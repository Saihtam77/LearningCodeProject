/* creae  table animal if not existe */
CREATE TABLE
    IF NOT EXISTS animal (
        id INTEGER PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        type VARCHAR(100) NOT NULL,
        age INT NOT NULL
    );

INSERT INTO
    animal (name, type, age)
VALUES
    ('dog', 'mammal', 5);

INSERT INTO
    animal (name, type, age)
VALUES
    ('cat', 'mammal', 3);

INSERT INTO
    animal (name, type, age)
VALUES
    ('parrot', 'bird', 2);

INSERT INTO
    animal (name, type, age)
VALUES
    ('goldfish', 'fish', 1);