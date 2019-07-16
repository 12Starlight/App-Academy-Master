require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class User
    attr_accessor :id, :lname, :fname

    def self.find_all
        data = QuestionsDatabase.instance.execute("SELECT * FROM users ")
        data.map { |datum| User.new(datum) }
    end


    def self.find_by_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
          SELECT
              *
          FROM
              users
          WHERE
              id = ?
        SQL
        data.map { |datum| User.new(datum) }
    end

    def initialize(options)
        @id = options['id']
        @lname = options['lname']
        @fname = options['fname']
    end

end

class Question
    attr_accessor :id, :title, :body, :author_id

    def self.find_all
        data = QuestionsDatabase.instance.execute("SELECT * FROM questions ")
        data.map { |datum| Question.new(datum) }
    end

    def self.find_by_author_id(author_id)
        author = QuestionsDatabase.instance.execute(<<-SQL, author_id)
        SELECT
            *
        FROM
            questions
        WHERE
            author_id = ?
        SQL
        author.map { |authortum| Question.new(authortum) }
    end

    def self.find_by_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT
            *
        FROM
            questions
        WHERE
            id = ?
        SQL
        data.map { |datum| Question.new(datum) }
    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author_id = options['author_id']
    end

end

class QuestionFollows
    attr_accessor :id, :question_id, :follower_id

    def self.find_by_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
         SELECT
            *
        FROM
            question_follows
        WHERE
            id = ?
        SQL
        data.map { |datum| QuestionFollows.new(datum) }
    end

    def self.followers_for_question_id(question_id)
        data = QuestionsDatabase.instance.execute(<<-SQL, question_id)
        SELECT
           users.*
        FROM
            users
        JOIN
            question_follows ON question_follows.follower_id = users.id
        WHERE
            question_follows.question_id = ?
        SQL
      
        data.map { |datum| User.new(datum) }
    end

    def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @follower_id = options['follower_id']
    end

end

class Reply
    attr_accessor :id, :question_id, :parent_id, :author_id, :body

    def self.find_by_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT
            *
        FROM
            replies
        WHERE
            id = ?
    SQL
        data.map { |datum| Reply.new(datum) }
    end

    def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @parent_id = options['parent_id']
        @author_id = options['author_id']
        @body = options['body']
    end

end

class QuestionLikes
    attr_accessor :id, :liker_id, :question_id

    def self.find_by_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
             *
            FROM
               question_likes
            WHERE
              id = ?
        SQL
        data.map { |datum| QuestionLikes.new(datum) }
    end

    def initialize(options)
        @id = options['id']
        @liker_id = options['liker_id']
        @question_id = options['question_id']
    end

end