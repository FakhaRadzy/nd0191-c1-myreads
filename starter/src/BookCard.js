import ListBooks from "./ListBooks";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BookCard = ({ name, books, onMoveBook, shelves }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
      </div>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <ListBooks
              key={book.id}
              book={book}
              onMoveBook={onMoveBook}
              shelves={shelves}
            />
          ))}
        </ol>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onMoveBook: PropTypes.func.isRequired,
  shelves: PropTypes.array.isRequired,
};

export default BookCard;
