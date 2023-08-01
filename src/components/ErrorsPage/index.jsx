import { Link, useRouteError } from "react-router-dom";
import Logo from "../../assets/images/goodreadslogo.png";

const ErrorsPage = () => {
  const errors = useRouteError();

  return (
    <>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="w-52 mx-auto" />
        </Link>

        <h1 className="text-5xl font-bold text-center">Oops!</h1>
        <p className="text-center font-semibold text-base sm:text-xl">
          Sorry, an unexpected error has occurred!
        </p>
        <p className="text-center text-gray-600 italic text-lg">
          {errors.statusText || errors.message}
        </p>
        <Link
          to="/"
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg self-center hover:bg-indigo-800 transition delay-75 ease-linear active:scale-95"
        >
          Go Home
        </Link>
      </div>
    </>
  );
};
export default ErrorsPage;
