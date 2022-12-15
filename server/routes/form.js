const express = require("express");
const router = express.Router();

const { addBook, getBooks } = require("../db");

// / / / / / / / / GET ALL BOOKS / / / / / / / /
router.get("/books/all", (req, res) => {
    getBooks().then((books) => {
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
