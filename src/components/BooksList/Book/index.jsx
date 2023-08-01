import { Link } from "react-router-dom";
import Ratings from "../../UIComponents/Ratings";

const Book = ({ book }) => {
  const { title, author, description, image, rating, id } = book;

  return (
    <Link to={`/books/${id}`} className="border-1 border-gray-500 shadow-lg rounded-md overflow-hidden hover:scale-95 cursor-pointer duration-200">
      {/* image container  */}
      <div>
        <img src={image} alt={title} className="w-full h-[250px] sm:h-[300px] lg:h-[350px]" />
      </div>

      {/* card body  */}
      <div className="p-4 space-y-2">
        {/* title  */}
        <h5 className="text-2xl font-semibold font-mono">{title}</h5>
        <span className="italic text-gray-500">By {author}</span>
        <p className="line-clamp-3 leading-5">{description}</p>
        <div>
          <Ratings value={rating}/>
        </div>
      </div>
    </Link>
  );
};
export default Book;
