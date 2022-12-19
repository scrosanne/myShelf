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

function getBooks() {
    return db.query("SELECT * FROM books ORDER BY created_at DESC").then((result) => result.rows);
}

function getBookById(id) {
    return db
        .query(`SELECT * FROM books WHERE id = $1`, [id])
        .then((result) => result.rows[0]);
}

function addPost(book_id, category, content) {
    return db
        .query(
            `INSERT INTO posts (
                book_id, category, content)
    VALUES ($1, $2, $3)
    RETURNING *`,
            [book_id, category, content]
        )
        .then((result) => result.rows[0]);
}

function getPostsByBookId(id) {
    return db.query(`SELECT * FROM posts WHERE book_id = $1`, [id]).then((result) => result.rows);
}

function ratePost(rating, post_id) {
    console.log(post_id);
    console.log(rating);
    return db.query(
        `UPDATE posts 
                        SET ${rating} = ${rating} + 1
                        WHERE id = $1`,
        [post_id]
    );
   
}

module.exports = {
    addBook,
    getBooks,
    getBookById,

    addPost,
    getPostsByBookId,
    ratePost
};
