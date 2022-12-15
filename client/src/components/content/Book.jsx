export default function Book({ book, openBook }) {
    return (
        <div className="book" onClick={(e) => openBook(e, book.id)}>
            <h2>{book.author}</h2>
            <h4>{book.title}</h4>
        </div>
    );
}
