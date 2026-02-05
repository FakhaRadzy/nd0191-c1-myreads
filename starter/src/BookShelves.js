import BookCard from "./BookCard";
import PropTypes from "prop-types";

const BookShelves = ({ books, onMoveBook, shelves }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-book-content">
        {shelves.map((shelf) => (
          <BookCard
            key={shelf.id}
            name={shelf.title}
            books={books.filter((b) => b.shelf === shelf.id)}
            onMoveBook={onMoveBook}
            shelves={shelves}
          />
        ))}
        {books.title}
      </div>
    </div>
  );
};

BookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  onMoveBook: PropTypes.func.isRequired,
  shelves: PropTypes.array.isRequired,
};

export default BookShelves;
