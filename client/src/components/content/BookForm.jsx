export default function BookForm() {
    //
    return (
        <div className="book-form">
            <input
                type="text"
                name="author"
                placeholder="AUTHOR"
                // onChange={(e) => handleInputChange(e)}
            />

            <input
                type="text"
                name="title"
                placeholder="TITLE"
                // onChange={(e) => handleInputChange(e)}
            />

            {/* <button onClick={() => handleSubmit()}>submit</button> */}
            <button>submit</button>
        </div>
    );
}
