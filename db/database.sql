DROP DATABASE IF EXISTS books_web;
CREATE DATABASE books_web utf8mb4;
USE books_web;

CREATE TABLE books (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(200),
    author VARCHAR(200),
    image VARCHAR(500),
    description VARCHAR(500)
);

INSERT INTO books(title, author, image, description) 
VALUES ("Orgullo y prejuicio", "Jane Austen", "https://m.media-amazon.com/images/I/91F-tGwtyFL.jpg", "Orgullo y prejuicio, publicada por primera vez el 28 de enero de 1813 como una obra anónima, es la más famosa de las novelas de Jane Austen y una de las primeras comedias románticas ...");