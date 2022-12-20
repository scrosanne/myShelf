const express = require("express");
const router = express.Router();

const {
    addBook,
    getBooks,
    getBookById,
    addPost,
    getPostsByBookId,
    ratePost,
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
            if (post) {
                res.json({ success: true });
            } else {
                res.json({ success: false });
            }
        })
        .catch((err) => console.log(err));
});

// / / / / / / / / R A T E  P O S T / / / / / / / /
router.post("/post/:id", (req, res) => {
    const { rating } = req.body;
    const postId = req.params.id;

    //check if user already rated current post
    if (req.session.postId === postId) {
        res.json({ success: false, message: "not again!" });
        return;
    }

    ratePost(rating, postId)
        .then((rating) => {
            if (rating) {
                //set cookie to remeber, user rated this post
                req.session.postId = postId;
                res.json({
                    success: true,
                    agree: rating.agree,
                    disagree: rating.disagree,
                    incorrect: rating.incorrect,
                    spam: rating.spam,
                });
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
        res.json(post);
    });
});

module.exports = router;
