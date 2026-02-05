import ListBooks from "./ListBooks";
import PropTypes from "prop-types";

const SearchResults = ({ results, onMoveBook, shelves }) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {results.map((result) => (
          <ListBooks
            key={result.id}
            book={result}
            onMoveBook={onMoveBook}
            shelves={shelves}
          />
        ))}
      </ol>
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
  onMoveBook: PropTypes.func.isRequired,
  shelves: PropTypes.array.isRequired,
};

export default SearchResults;
