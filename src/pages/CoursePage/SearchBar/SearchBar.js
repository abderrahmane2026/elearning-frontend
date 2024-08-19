import "./SearchBar.css";

const SearchBar = ({ handleInputChange, query }) => {
  return (
    <div className="begcontainer-searchbar">
    <div
      onSubmit={(e) => e.preventDefault()}
      className="search-container"
    >
      <div className="search-bar">
        
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search..."
        />

      </div>
    </div>
    </div>
  );
};

export default SearchBar;
