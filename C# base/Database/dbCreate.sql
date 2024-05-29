/* creae  table animal if not existe */
CREATE TABLE
    IF NOT EXISTS animal (
        id INTEGER PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        type VARCHAR(100) NOT NULL,
        age INT NOT NULL
    );

