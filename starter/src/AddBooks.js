import PropTypes from "prop-types";

const AddBooks = ({ result, onMoveBook, shelves }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${result.imageLinks?.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={result.shelf}
              onChange={(e) => onMoveBook(result, e.target.value)}
            >
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
        <div className="book-title">{result.title}</div>
        <div className="book-authors">{result.authors}</div>
      </div>
    </li>
  );
};

AddBooks.propTypes = {
  result: PropTypes.object.isRequired,
};

export default AddBooks;
