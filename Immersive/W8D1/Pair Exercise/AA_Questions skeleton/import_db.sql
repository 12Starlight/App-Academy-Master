PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS question_follows; 
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users; 

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL, 
    lname TEXT NOT NULL 
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY, 
    title TEXT NOT NULL, 
    body TEXT NOT NULL,
    author_id INTEGER NOT NULL,

    FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    questions_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (questions_id) REFERENCES questions(id)
);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    subject_question_id INTEGER NOT NULL,
    parent_reply_id INTEGER,
    user_id INTEGER NOT NULL,
    body VARCHAR(255),

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (subject_question_id) REFERENCES questions(id),
    FOREIGN KEY (parent_reply_id) REFERENCES replies(id)
);

CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY, 
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,
    likes INTEGER, 

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO 
    users (fname, lname)
VALUES 
    ('Mickey', 'Mouse'),
    ('Donald', 'Duck');

INSERT INTO 
    questions (title, body, author_id)
VALUES 
    ('Where''s Log Mountain?', 'Family was having a hard time navigating the park.', (SELECT id FROM users WHERE users.fname = 'Mickey')),
    ('What time are the fireworks?', 'Want to propose to my wife again', (SELECT id FROM users WHERE users.fname = 'Donald'));

INSERT INTO 
    replies (subject_question_id, parent_reply_id, user_id, body) 
VALUES 
    ((SELECT id FROM questions LIMIT 1), NULL, (SELECT id FROM users LIMIT 1), 'Log Mountain is just around the corner from Adventure Land.');

