import { Link } from "react-router-dom";
import Search from "./Search";
import CategorySearch from "./CategorySearch";

//depening on what page Navbar is rendered, it gets either setQuery or setCategory
export default function Navbar({ setQuery, setCategory }) {
    //
    return (
        <div className="navbar">
            <Link to="/">
                <h1>myShelf</h1>
            </Link>
            {setCategory && <CategorySearch setCategory={setCategory} />}
            {setQuery && <Search setQuery={setQuery} />}
        </div>
    );
}
