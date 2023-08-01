import BookData from "../../data/BookListData";
import Ratings from "../UIComponents/Ratings";

const BookDetail = ({ id }) => {
  const book = BookData.find((item) => item.id === Number(id));

  console.log(book);

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-12 mb-8">
      <div className="grid md:grid-cols-3 gap-4">
        {/* grid column 1 */}
        <div>
          {/* book image container  */}
          <div>
            <img src={book.image} alt={book.title} className="mx-auto" />
          </div>
        </div>

        {/* grid column 2 */}
        <div className="md:col-span-2">
          {/* Book body container  */}
          <div>
            {/* book name and author */}
            <div>
              <h1 className="text-5xl font-semibold font-GentiumBookPlus">
                {book.title}
              </h1>
              <span className="text-gray-500 text-xl capitalize block mt-2">
                {book.author}
              </span>
            </div>

            {/* book description  */}
            <div className="mt-6">
              <p className="font-RobotoCondensed text-xl text-justify">
                {book.description}
              </p>
            </div>

            {/* book ratings  */}
            <div className="mt-5">
              <Ratings value={book.rating} views={5146} />
            </div>
          </div>

          {/* reviews and ratings */}
          <div className="mt-10 bg-primary p-5 rounded-md" >
            <h2 className="text-3xl font-RobotoCondensed" >Reviews & Ratings</h2>
            
            {/* review button  */}
            <div className="mt-4" >
              <button className="w-full py-3 rounded-md bg-[#ffbf09] font-bold" >Write a Review</button>
            </div>  

            <hr className="mt-5 h-[1.5px] bg-gray-500" />

            <div>
              <span className="text-gray-600 font-RobotoCondensed" >Displaying: 0 reviews</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
export default BookDetail;
