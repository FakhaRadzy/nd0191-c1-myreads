import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import * as BooksAPI from "./BooksAPI";
import PropTypes from "prop-types";

const Search = ({ onMoveBook, shelves }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    let isActive = true;
    const searchBook = async () => {
      if (query.trim()) {
        const res = await BooksAPI.search(query.trim(), 20);
        if (res && !res.error) {
          if (isActive) {
            setSearchResults(res);
          }
        } else {
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    };
    searchBook();

    return () => {
      isActive = false;
    };
  }, [query]);

  return (
    <div className="search-books">
      <SearchBar query={query} onSearch={setQuery} />
      <SearchResults
        onMoveBook={onMoveBook}
        results={searchResults}
        shelves={shelves}
      />
    </div>
  );
};

Search.propTypes = {
  onMoveBook: PropTypes.func.isRequired,
  shelves: PropTypes.array.isRequired,
};

export default Search;
