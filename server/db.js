const spicedPg = require("spiced-pg");
const { USER, PASSWORD } = process.env;

const user = USER;
const password = PASSWORD;
const database = "myShelf";

const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:${user}:${password}@localhost:5432/${database}`
);

function addBook(author, title) {
    return db
        .query(
            `INSERT INTO books (
                author, title)
    VALUES ($1, $2)
    RETURNING *`,
            [author, title]
        )
        .then((result) => result.rows[0]);
}

module.exports = {
    addBook,
};
