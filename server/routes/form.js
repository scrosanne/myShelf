const express = require("express");
const router = express.Router();

const {
    addBook,
    getBooks,
    getBookById,
    addPost,
    getPostsByBookId,
} = require("../db");

// / / / / / / / / G E T  B O O K  B Y  I D / / / / / / / /
router.get("/book/:id/json", (req, res) => {
    const bookId = req.params.id;
    getBookById(bookId).then((books) => {
        res.json(books);
    });
});

// / / / / / / / / G E T  A L L  B O O K S / / / / / / / /
router.get("/books", (req, res) => {
    getBooks().then((books) => {
        res.json(books);
    });
});

// / / / / / / / / B O O K  F O R M / / / / / / / /
router.post("/book", (req, res) => {
    const { author, title } = req.body;

    addBook(author, title)
        .then((book) => {
            console.log(book);
            //response necessarry, else nothing to fetch!
            if (book) {
                res.json({ success: true });
            } else {
                res.json({ success: false });
            }
        })
        .catch((err) => console.log(err));
});

// / / / / / / / / P O S T  F O R M / / / / / / / /
router.post("/post", (req, res) => {
    const { category, content } = req.body.input;
    const book_id = req.body.id;

    addPost(book_id, category, content)
        .then((post) => {
            //console.log(post);
            //response necessarry, else nothing to fetch!
            if (post) {
                res.json({ success: true });
            } else {
                res.json({ success: false });
            }
        })
        .catch((err) => console.log(err));
});

// / / / / / / / / G E T  A L L  P O S T S / / / / / / / /
router.get("/posts/:id", (req, res) => {
    const bookId = req.params.id;
    getPostsByBookId(bookId).then((post) => {
        console.log(post);
        res.json(post);
    });
});

module.exports = router;
