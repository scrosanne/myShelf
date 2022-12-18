import Search from "./Search";
import CategorySearch from "./CategorySearch";

//depening on what page Navbar is rendered, it gets either setQuery or setCategory
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
