import Search from "./Search";

export default function Navbar({ setQuery }) {
    //
    return (
        <div className="navbar">
            <h1>myShelf</h1>
            <Search setQuery={setQuery} />
            {/* ProfilePic */}
        </div>
    );
}
