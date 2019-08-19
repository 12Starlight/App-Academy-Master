Daves-MacBook-Pro:Readings commandcenter$ cat create_tables.sql | sqlite3 school.db
Daves-MacBook-Pro:Readings commandcenter$ sqlite3 school.db

SQLite version 3.24.0 2018-06-04 14:10:15
Enter ".help" for usage hints.


sqlite> .tables

departments  professors 


sqlite> .schema departments

CREATE TABLE departments (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);


sqlite> INSERT INTO departments ("name") VALUES ("russian literature");


sqlite> SELECT * FROM departments;

1|mathematics
2|physics
3|russian literature
sqlite> 


sqlite> INSERT INTO professors ("department_id", "first_name", "last_name") VALUES (3, "Vladimir", "Nabokov");
sqlite> .tables

departments  professors 


sqlite> .schema
CREATE TABLE departments (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
CREATE TABLE professors (
  -- SQLite3 will automatically populate an integer primary key
  -- (unless it is specifically provided). The conventional primary
  -- key name is 'id'.
  id INTEGER PRIMARY KEY,
  -- NOT NULL specifies that the column must be provided. This is a
  -- useful check of the integrity of the data.
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  department_id INTEGER NOT NULL,

  -- Not strictly necessary, but informs the DB not to
  --  (1) create a professor with an invalid department_id,
  --  (2) delete a department (or change its id) if professors
  --      reference it.
  -- Either event would leave the database in an invalid state, with a
  -- foreign key that doesn't point to a valid record. Older versions
  -- of SQLite3 may not enforce this, and will just ignore the foreign
  -- key constraint.
  FOREIGN KEY (department_id) REFERENCES departments(id)
);


sqlite> sqlite3 school.db "SELECT * FROM departments";
Error: near "sqlite3": syntax error
sqlite> SELECT * FROM departments;
1|mathematics
2|physics
3|russian literature
sqlite> 