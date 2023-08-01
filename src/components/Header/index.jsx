import HeaderImage from "../../assets/images/headerimg.png"

const Header = () => {
  return (
    <div className="relative w-full h-96 hidden md:block">
      <img src={HeaderImage} alt="Header Image" className="absolute w-full h-full object-cover" />

    </div>
  )
}
export default Header