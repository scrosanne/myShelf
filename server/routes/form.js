const express = require("express");
const router = express.Router();

const { addBook, getBooks, getBookById } = require("../db");

// / / / / / / / / G E T  B O O K  B Y  I D / / / / / / / /
router.get("/book/:id/json", (req, res) => {
    const bookId = req.params.id;
    getBookById(bookId).then((books) => {
        console.log(books);
        res.json(books);
    });
});

// / / / / / / / / G E T  A L L  B O O K S / / / / / / / /
router.get("/books", (req, res) => {
    getBooks().then((books) => {
        console.log(books);
        res.json(books);
    });
});

// / / / / / / / / B O O K  F O R M / / / / / / / /
router.post("/book", (req, res) => {
    const { author, title } = req.body;
    console.log(req.body);

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

module.exports = router;
