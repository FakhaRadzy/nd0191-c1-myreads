import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchBar = ({ query, onSearch }) => {
  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={query}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
