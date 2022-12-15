export default function Search({ setQuery }) {
    return (
        <div className="search">
            <input
                onChange={(e) => setQuery(e.currentTarget.value)}
                type="text"
                name="query"
                id=""
                placeholder="search for author/title"
            />
        </div>
    );
}
