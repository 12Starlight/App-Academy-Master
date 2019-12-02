PRAGMA foreign_keys = ON;

DROP TABLE question_likes; 
DROP TABLE replies;
DROP TABLE question_follows; 
DROP TABLE questions;
DROP TABLE users;


CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    lname TEXT NOT NULL,
    fname TEXT NOT NULL
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author_id INTEGER NOT NULL,
    
    FOREIGN KEY (author_id) REFERENCES users(id) -- author_id (user_id)
);

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    follower_id TEXT NOT NULL,
    
    FOREIGN KEY (question_id) REFERENCES questions(id),-- follower_id (user_id)
    FOREIGN KEY (follower_id) REFERENCES users(id)
);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    parent_id INTEGER,
    author_id INTEGER NOT NULL,
    body TEXT NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (parent_id) REFERENCES replies(id),
    FOREIGN KEY (author_id) REFERENCES users(id) 

);

CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY,
    liker_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (liker_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO users (fname, lname)
VALUES
    ('Tom', 'Driscoll'),
    ('Dave', 'Gannet'),
    ('Elvis', 'Presley');

INSERT INTO questions (title, body, author_id)
VALUES
    ('Stupid Question', 'What do you do if someone asks a stupid question?', 2),
    ('Lunch?', 'What time is lunch? I''m hungry.', 1),
    ('Snack?', 'Is there a time for us to snack? Can i snack while I work?', 1);

INSERT INTO question_follows (question_id, follower_id)
VALUES 
    (1, 1),
    (2, 2),
    (2, 3);

INSERT INTO replies (question_id, parent_id, author_id, body)
VALUES 
    (2, NULL, 3, 'yeah I''d really love a peanut butter and bacon sandwich'),
    (1, NULL, 1, 'no such thing'),
    (2, 1, 2, 'sounds yummy');

INSERT INTO question_likes (liker_id, question_id)
VALUES
    (3, 2),
    (3, 3),
    (1, 1);







-- CREATE TABLE toys
-- (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(20),
--     price VARCHAR(20),
--     color VARCHAR(20)
-- );

-- INSERT INTO toys
--     (name, price, color)
-- VALUES
--     ('ball', 19, 'red'),
--     ('pool', 92000, 'aqua'),
--     ('palm tree', 88, 'green'),
--     ('pet dog', 100, 'pom'),
--     ('sand box', 84, 'gold');

-- CREATE TABLE cattoys
-- (
--     id SERIAL PRIMARY KEY,
--     cat_id INTEGER NOT NULL,
--     toy_id INTEGER NOT NULL,
--     FOREIGN KEY (cat_id) REFERENCES cats (id), 
--     FOREIGN KEY (toy_id) REFERENCES toys (id) 
-- );