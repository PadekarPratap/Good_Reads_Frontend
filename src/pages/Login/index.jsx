import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/goodreadslogo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiFillExclamationCircle } from "react-icons/ai";
import axios from "axios";
import Loader from "../../components/UIComponents/Loader";
import { toast } from "react-toastify";

const schema = yup.object({
  email: yup
    .string()
    .required("Enter your email")
    .email("Please enter a valid email address"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be atleast 8 characters"),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  }, [navigate]);

  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      setIsLoading(true);
      setError("");
      const { data } = await axios.post(
        `https://orca-app-jhg4l.ondigitalocean.app/api/auth/login`,
        { email, password }
      );
      console.log(data);

      toast.success("Login Successful");

      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          firstName: data.user.firstName,
          email: data.user.email,
        })
      );
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="bg-primary min-h-screen flex items-center justify-center">
        <div className="max-w-xl w-full bg-white p-6 mx-5 rounded-lg">
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Link to="/">
              <img
                src={Logo}
                alt="Good Reads Logo"
                className="w-36 mx-auto mb-5"
              />
            </Link>
            <h1 className="text-center text-3xl font-RobotoCondensed uppercase text-secondary font-bold">
              Login
            </h1>
            <hr className="h-[2px] w-[10%] mx-auto bg-secondary" />

            {error && <p className="error">{error}</p>}

            <div className="form-group relative">
              <label htmlFor="email" className="label-group">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className={`input-control ${
                  errors.email?.message
                    ? "border-red-500 focus-within:border-red-500"
                    : ""
                } `}
                placeholder="Enter your email..."
              />
              {errors.email?.message && (
                <AiFillExclamationCircle
                  size={30}
                  className="absolute text-red-500 top-9 right-3"
                />
              )}
              {errors.email?.message && <small>{errors.email.message}</small>}
            </div>

            <div className="form-group relative">
              <label htmlFor="password2" className="label-group">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                id="password2"
                className={`input-control ${
                  errors.password?.message
                    ? "border-red-500 focus-within:border-red-500"
                    : ""
                } `}
                placeholder="Enter your phone number..."
              />
              {errors.password?.message && (
                <AiFillExclamationCircle
                  size={30}
                  className="absolute text-red-500 top-9 right-3"
                />
              )}
              {errors.password?.message && (
                <small>{errors.password.message}</small>
              )}
            </div>

            <div className="mt-12 text-center space-y-3">
              <button className="btn btn-primary">Login</button>
              <p className="text-xl">
                <span>New user?</span>{" "}
                <Link to="/register" className="underline underline-offset-2">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
