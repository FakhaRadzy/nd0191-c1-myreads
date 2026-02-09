import PropTypes from "prop-types";

const ListBooks = ({ book, onMoveBook, shelves }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks?.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={book.shelf || "none"}
              onChange={(e) => onMoveBook(book, e.target.value)}
            >
              <option value="none">None</option>

              {shelves.map((shelf) => {
                return (
                  <option key={shelf.id} value={shelf.id}>
                    {shelf.title}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

ListBooks.propTypes = {
  book: PropTypes.object.isRequired,
  onMoveBook: PropTypes.func.isRequired,
  shelves: PropTypes.array.isRequired,
};

export default ListBooks;
