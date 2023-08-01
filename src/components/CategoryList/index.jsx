import Category from "./Category";

const CategoryList = () => {
  const categoryList = [
    {
      catId: 1,
      catName: "History",
      catImage: "http://placehold.it/400/888888",
    },
    {
      catId: 2,
      catName: "Science",
      catImage: "http://placehold.it/400/888888",
    },
    {
      catId: 3,
      catName: "External Affairs",
      catImage: "http://placehold.it/400/888888",
    },
    {
      catId: 4,
      catName: "Fiction",
      catImage: "http://placehold.it/400/888888",
    },
    {
      catId: 5,
      catName: "Non-Fiction",
      catImage: "http://placehold.it/400/888888",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="mb-4" >
        <h2 className="text-4xl font-bold font-YsabeauSC">Categories</h2>
        <p className="text-lg text-slate-500" >Choose from a wide range of categories.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 mb-16" >
        {categoryList.map((category) => (
          <Category key={category.catId} category={category} />
        ))}
      </div>
    </div>
  );
};
export default CategoryList;
