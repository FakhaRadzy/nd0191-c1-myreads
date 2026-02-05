import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import BookShelves from "./BookShelves";
import * as BooksAPI from "./BooksAPI";

function App() {
  const shelves = [
    { id: "currentlyReading", title: "Currently Reading" },
    { id: "wantToRead", title: "Want to Read" },
    { id: "read", title: "Read" },
  ];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const moveBook = async (book, newShelf) => {
    await BooksAPI.update(book, newShelf);
    setBooks((prevBooks) => {
      const isBookInLibrary = prevBooks.find((b) => b.id === book.id);
      if (isBookInLibrary) {
        return prevBooks.map((b) =>
          b.id === book.id ? { ...b, shelf: newShelf } : b,
        );
      } else {
        const newBook = { ...book, shelf: newShelf };
        return [...prevBooks, newBook];
      }
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <BookShelves
              books={books}
              onMoveBook={moveBook}
              shelves={shelves}
            />
          }
        />
        <Route
          path="/search"
          element={<Search onMoveBook={moveBook} shelves={shelves} />}
        />
      </Routes>
    </div>
  );
}

export default App;
