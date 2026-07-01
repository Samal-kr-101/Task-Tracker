function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">

      <span className="search-icon">🔍</span>

      <input
        type="text"
        placeholder="Search tasks by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {search && (
        <button
          className="clear-btn"
          onClick={() => setSearch("")}
        >
          ✕
        </button>
      )}

    </div>
  );
}

export default SearchBar;