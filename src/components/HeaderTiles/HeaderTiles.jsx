import Tile from "./Tile"
import { BiSolidBookOpen } from "react-icons/bi"
import { BsFillPenFill } from "react-icons/bs"
import { FaUsers } from "react-icons/fa"


const HeaderTiles = () => {

  return (
    <div className="max-w-screen-xl mx-auto px-4 my-8" >
        {/* grid  */}
        <div className="grid lg:grid-cols-3 gap-4" >

            {/* Explore  */}
            <Tile icon={<BiSolidBookOpen size={30} className="text-flowral group-hover:text-white" />} title="Explore" description={"Discover the best books from top authors. Find your favorite genre and start reading today"} />

            {/* Write reviews  */}
            <Tile icon={<BsFillPenFill size={25} className="text-flowral group-hover:text-white" />} title="Write reviews" description={"Write your own reviews for the books you love. Share your opinion with others"} />

            {/* contribute to the community */}
            <Tile icon={<FaUsers size={30} className="text-flowral group-hover:text-white" />} title="Contribute to the community" description={"Share your thoughts and opinions with the community. Help us to improve the platform"}  />

        </div>
    </div>
  )
}
export default HeaderTiles