require 'sqlite3'
require 'singleton'

class QuestionDBConnection < SQLite3::Database 
    include Singleton 

    def initialize 
        super('questions.db')
        self.type_translation = true 
        self.results_as_hash = true 
    end
end

class User
    attr_accessor :id, :fname, :lname 

    def self.all 
        data = QuestionDBConnection.instance.execute('SELECT * FROM users')
        data.map { |datum| User.new(datum) }
    end

    def self.find_by_name(fname, lname)
        user = QuestionDBConnection.instance.execute(<<-SQL, fname, lname)
            SELECT
                * 
            FROM 
                users
            WHERE 
                users.fname = ?, users.lname = ?
        SQL
        return nil unless user.length > 0
        User.new(user.first)
    end

    def self.find_by_id(id)
         user = QuestionDBConnection.instance.execute(<<-SQL, id)
            SELECT
                * 
            FROM 
                users
            WHERE 
                users.id = ?
        SQL
        User.new(user.first) 
    end

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end

    def create
        raise "#{self} already in database" if self.id 
        QuestionDBConnection.instance.execute(<<-SQL, self.fname, self.lname)
            INSERT INTO 
                users (fname, lname)
            VALUES 
                (?, ?)
        SQL
        self.id = QuestionDBConnection.instance.last_insert_row_id
    end

    def update 
        raise "#{self} not in database" unless self.id 
        QuestionDBConnection.instance.execute(<<-SQL, self.id, self.fname, self.lname)
            UPDATE 
                users
            SET 
                fname = ?, lname = ?
            WHERE 
                id = ? 
        SQL
    end

    def authored_questions
        Question.find_by_author_id(self.id)
    end

    def authored_replies
        Reply.find_by_user_id(self.id)
    end

end


class Question
    attr_accessor :id, :title, :body, :author_id 

    def self.all 
        data = QuestionDBConnection.instance.execute('SELECT * FROM questions')
        data.map { |datum| Question.new(datum) }
    end

    def self.find_by_question(id)
        question = QuestionDBConnection.instance.execute(<<-SQL, id)
            SELECT
                * 
            FROM 
                questions
            WHERE 
                questions.id = ?
        SQL
        return nil unless question.length > 0
        Question.new(question.first)
    end

    def self.find_by_author_id(author_id)
        question = QuestionDBConnection.instance.execute(<<-SQL, author_id)
            SELECT 
                *
            FROM 
                questions
            WHERE
                author_id = ?
        SQL
        return nil unless question.length > 0
        question.map { |data| Question.new(data) }
    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author_id = options['author_id']
    end

    def author 
      User.find_by_id(self.author_id)
    end 

    def create
        raise "#{self} already in database" if self.id 
        QuestionDBConnection.instance.execute(<<-SQL, self.title, self.body, self.author_id)
            INSERT INTO 
                questions (title, body, author_id)
            VALUES 
                (?, ?, ?)
        SQL
        self.id = QuestionDBConnection.instance.last_insert_row_id
    end

    def update 
        raise "#{self} not in database" unless self.id 
        QuestionDBConnection.instance.execute(<<-SQL, self.id, self.title, self.body, self.author_id)
            UPDATE 
                questions
            SET 
                title = ?, body = ?, author_id = ?
            WHERE 
                id = ? 
        SQL
    end

    def replies
        Reply.find_by_subject_question_id(self.id)
    end

end


class Reply
    attr_accessor :id, :subject_question_id, :parent_reply_id, :user_id, :body 

    def self.all 
        reply = QuestionDBConnection.instance.execute('SELECT * FROM replies')
        reply.map { |datum| Reply.new(datum) }
    end

    def self.find_by_reply(id)
        reply = QuestionDBConnection.instance.execute(<<-SQL, id)
            SELECT
              * 
            FROM 
              replies
            WHERE 
              id = ?
        SQL
        return nil unless reply.length > 0
        Reply.new(reply.first)
    end

    def self.find_by_user_id(user_id)
        reply = QuestionDBConnection.instance.execute(<<-SQL, user_id)
            SELECT
              * 
            FROM 
              replies
            WHERE 
              user_id = ?
        SQL
        return nil unless reply.length > 0
        reply.map { |data| Reply.new(data) }
    end

    def self.find_by_subject_question_id(subject_question_id)
        reply = QuestionDBConnection.instance.execute(<<-SQL, subject_question_id)
            SELECT
              * 
            FROM 
              replies
            WHERE 
              subject_question_id = ?
        SQL
        return nil unless reply.length > 0
        reply.map { |data| Reply.new(data) }
    end

    def initialize(options)
        @id = options['id']
        @subject_question_id = options['subject_question_id']
        @parent_reply_id = options['parent_reply_id']
        @user_id = options['user_id']
        @body = options['body']
    end    

    def create
        raise "#{self} already in database" if self.id 
        QuestionDBConnection.instance.execute(<<-SQL, self.subject_question_id, self.parent_reply_id,  self.user_id, self.body)
            INSERT INTO 
                replies (subject_question_id, parent_reply_id, user_id, body)
            VALUES 
                (?, ?, ?, ?)
        SQL
        self.id = QuestionDBConnection.instance.last_insert_row_id
    end

    def update 
        raise "#{self} not in database" unless self.id 
        QuestionDBConnection.instance.execute(<<-SQL, self.id, self.subject_question_id, self.parent_reply_id,  self.user_id, self.body)
            UPDATE 
                replies
            SET 
                subject_question_id = ?, parent_reply_id = ?, user_id = ?, body = ?  
            WHERE 
                id = ? 
        SQL
    end

    def author 
        User.find_by_id(self.user_id)
    end

    def question 
        Question.find_by_question(self.subject_question_id)
    end

    def parent_reply
        self.find_by_reply(self.parent_reply_id)
    end

    def child_replies 
        
    end

end


class Question_Follow
    attr_accessor :id, :user_id, :questions_id

    def self.all 
        data = QuestionDBConnection.instance.execute('SELECT * FROM question_follows')
        data.map { |datum| Question_Follow.new(datum) }
    end

    def self.find_by_id(id)
        follow = QuestionDBConnection.instance.execute(<<-SQL, id)
            SELECT
              * 
            FROM 
              question_follows
            WHERE 
              id = ?
        SQL
        return nil unless follow.length > 0
        Question_Follow.new(follow.first)
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @questions_id = options['questions_id']
    end

end 

class Question_Like
    attr_accessor :id, :user_id, :question_id, :likes

    def self.all 
        data = QuestionDBConnection.instance.execute('SELECT * FROM question_likes')
        data.map { |datum| Question_Like.new(datum) }
    end

    def self.find_by_id(id)
        like = QuestionDBConnection.instance.execute(<<-SQL, id)
            SELECT
              * 
            FROM 
              question_likes
            WHERE 
              id = ?
        SQL
        return nil unless like.length > 0
        Question_Like.new(like.first)
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
        @likes = options['likes']
    end
    
end 


