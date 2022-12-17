import Search from "./Search";
import CategorySearch from "./CategorySearch";

export default function Navbar({ setQuery, setCategory }) {
    //
    return (
        <div className="navbar">
            <h1>myShelf</h1>
            {setCategory && <CategorySearch setCategory={setCategory} />}
            {setQuery && <Search setQuery={setQuery} />}

            {/* ProfilePic */}
        </div>
    );
}
