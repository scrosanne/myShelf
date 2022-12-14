// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import BookForm from "../content/BookForm";
import Book from "../content/Book";

export default function Shelf() {
    //
    return (
        <>
            <Navbar />
            <div className="shelf">
                <BookForm />
                <Book />
                {/* flex container containing BookForm and Books 
            width and height set, depending on viewport */}
            </div>
        </>
    );
}
