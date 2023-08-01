
const Category = ({category}) => {

    const {catName, catImage} = category

  return (
    <div className="border-1 border-gray-100 cursor-pointer overflow-hidden rounded-md shadow-lg hover:scale-95 duration-500" >
        <img src={catImage} alt={catName} />
        <div className="p-3">
        <p className="tracking-widest text-gray-800" >{catName}</p>
        </div>
    </div>
  )
}



export default Category