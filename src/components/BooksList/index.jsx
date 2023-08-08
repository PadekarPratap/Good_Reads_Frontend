import BookData from "../../data/BookListData";
import Book from "./Book";

const BooksList = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 my-6">
      <div className="mb-4">
        <h1 className="text-3xl font-bold">All Books</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
        {BookData.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksList;
