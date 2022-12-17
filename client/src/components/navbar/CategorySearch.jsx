export default function CategorySearch({ setCategory }) {
    return (
        <div className="search">
            <select
                onChange={(e) => setCategory(e.currentTarget.value)}
                name="category"
                id="category"
            >
                <option value="all"># all</option>
                <option value="quote"># quote</option>
                <option value="thoughts"># thoughts</option>
            </select>
        </div>
    );
}
