import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/goodreadslogo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
import { AiFillExclamationCircle } from "react-icons/ai";
import Loader from "../../components/UIComponents/Loader";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

YupPassword(yup);

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must contain atleast 3 characters.")
    .max(12, "Name cannot contain more than 12 characters")
    .matches(/^\S*$/, "Name cannot contain blank spaces"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Enter a valid email address"),
  number: yup
    .string()
    .required("Number is a required field")
    .min(10, "Enter a valid phone number"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must contain atleast 8 characters")
    .minLowercase(1, "Password must contain atleast on lowercase character")
    .minUppercase(1, "Password must contain atleast one uppercase")
    .minNumbers(1, "Password must contain atleast 1 number")
    .minSymbols(1, "Password must contain atleast on special character"),
  confirm_password: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
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

  const onSubmit = async (values) => {
    const { name, email, password, number } = values;

    const newUser = {
      firstName: name,
      email,
      password,
      mobile: number,
    };

    try {
      setIsLoading(true);
      setError("");
      const { data } = await axios.post(
        `https://orca-app-jhg4l.ondigitalocean.app/api/auth/register`,
        newUser
      );
      console.log(data);

      toast.success("Registration successful! Please login to continue");
      navigate("/login");
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/">
              <img
                src={Logo}
                alt="Good Reads Logo"
                className="w-36 mx-auto mb-5"
              />
            </Link>
            <h1 className="text-center text-3xl font-RobotoCondensed uppercase text-secondary font-bold">
              Register
            </h1>
            <hr className="h-[2px] w-[10%] mx-auto bg-secondary" />

            {error && <p className="error">{error}</p>}

            <div className="form-group relative">
              <label htmlFor="name" className="label-group">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                className={`input-control ${
                  errors.name?.message
                    ? "border-red-500 focus-within:border-red-500"
                    : ""
                } `}
                placeholder="Enter your name..."
              />
              {errors.name?.message && (
                <AiFillExclamationCircle
                  size={30}
                  className="absolute text-red-500 top-9 right-3"
                />
              )}
              {errors.name?.message && <small>{errors.name.message}</small>}
            </div>

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
              <label htmlFor="number" className="label-group">
                Number
              </label>
              <input
                {...register("number")}
                type="number"
                id="number"
                className={`input-control ${
                  errors.number?.message
                    ? "border-red-500 focus-within:border-red-500"
                    : ""
                } `}
                placeholder="Enter your phone number..."
              />
              {errors.number?.message && (
                <AiFillExclamationCircle
                  size={30}
                  className="absolute text-red-500 top-9 right-3"
                />
              )}
              {errors.number?.message && <small>{errors.number.message}</small>}
            </div>

            <div className="form-group relative">
              <label htmlFor="password" className="label-group">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
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

            <div className="form-group relative">
              <label htmlFor="c_password" className="label-group">
                Confirm Password
              </label>
              <input
                {...register("confirm_password")}
                type="password"
                id="c_password"
                className={`input-control ${
                  errors.confirm_password?.message
                    ? "border-red-500 focus-within:border-red-500"
                    : ""
                } `}
                placeholder="Enter your phone number..."
              />
              {errors.confirm_password?.message && (
                <AiFillExclamationCircle
                  size={30}
                  className="absolute text-red-500 top-9 right-3"
                />
              )}
              {errors.confirm_password?.message && (
                <small>{errors.confirm_password.message}</small>
              )}
            </div>

            <div className="mt-12 text-center space-y-3">
              <button disabled={isLoading} className="btn btn-primary">
                Register
              </button>
              <p className="text-xl">
                <span>Already a user?</span>{" "}
                <Link to="/login" className="underline underline-offset-2">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
