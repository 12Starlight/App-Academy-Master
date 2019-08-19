
DROP TABLE cats CASCADE;
DROP TABLE toys CASCADE;
DROP TABLE cattoys CASCADE; 

CREATE TABLE cats
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    color VARCHAR(20),
    breed VARCHAR(20)
);

INSERT INTO cats 
    (name, color, breed)
VALUES 
    ('fluffy', 'white', 'manx'),
    ('sugar', 'beige', 'tabi'),
    ('tommy', 'yellow', 'tiger'), 
    ('sue', 'black', 'panther'),
    ('juice', 'orange', 'cheetah');

CREATE TABLE toys
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    price VARCHAR(20),
    color VARCHAR(20)
);

INSERT INTO toys
    (name, price, color)
VALUES
    ('ball', 19, 'red'),
    ('pool', 92000, 'aqua'),
    ('palm tree', 88, 'green'),
    ('pet dog', 100, 'pom'),
    ('sand box', 84, 'gold');

CREATE TABLE cattoys
(
    id SERIAL PRIMARY KEY,
    cat_id INTEGER NOT NULL,
    toy_id INTEGER NOT NULL,
    FOREIGN KEY (cat_id) REFERENCES cats (id), 
    FOREIGN KEY (toy_id) REFERENCES toys (id) 
);

INSERT INTO cattoys
    (cat_id, toy_id)
VALUES 
    ((SELECT id FROM cats WHERE cats.name = 'fluffy'),
    (SELECT id FROM toys WHERE toys.name = 'ball')),
    ((SELECT id FROM cats WHERE cats.name = 'sugar'),
    (SELECT id FROM toys WHERE toys.name = 'pool')),
    ((SELECT id FROM cats WHERE cats.name = 'sue'),
    (SELECT id FROM toys WHERE toys.name = 'palm tree')),
    ((SELECT id FROM cats WHERE cats.name = 'tommy'),
    (SELECT id FROM toys WHERE toys.name = 'pet dog')),
    ((SELECT id FROM cats WHERE cats.name = 'juice'),
    (SELECT id FROM toys WHERE toys.name = 'sand box'));


