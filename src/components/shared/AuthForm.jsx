import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Axios from "../../config/Axios";
import { jwtDecode } from "jwt-decode";
const AuthForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { pathname } = useLocation();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const signin = (data) => {
    setError(false);
    Axios.post(`auth/${pathname.includes("signin") ? "signin" : "login"}`, data)
      .then((res) => {
        setError(false);
        localStorage.setItem("token", res.data.token);
        const token = res.data.token;
        const decodedToken = jwtDecode(token);

        if (pathname.includes("login") && decodedToken.userType === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
        reset();
      })
      .catch((err) => {
        setError(err.response.data.error);
        console.log(err.response.data.error);
      });
  };
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl  flex-center flex-col h-screen px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          {pathname.includes("signin") ? "Sign in" : "Log in"}
        </h2>

        <form
          onSubmit={handleSubmit(signin)}
          className="mx-auto max-w-lg w-full rounded-lg border"
        >
          <div className="flex flex-col gap-4 p-4 md:p-8">
            {pathname.includes("signin") && (
              <div>
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Name
                </label>
                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name length must be atleast 2",
                    },
                    maxLength: {
                      value: 20,
                      message: "Name length must be with in 20",
                    },
                  })}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
            )}

            <div>
              <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                Email
              </label>
              <input
                name="email"
                {...register("email", {
                  required: "Email is required",
                  minLength: {
                    value: 5,
                    message: "Enter a valid Email",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid Email",
                  },
                })}
                required
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                Password
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password has min 8 character",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be with in 20 character",
                  },
                })}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <ul className="list-disc pl-5">
              {error && <li className="text-sm  text-red-500 ">{error}</li>}
              {errors.name && (
                <li className="text-sm  text-red-500 ">
                  {errors.name.message}
                </li>
              )}
              {errors.email && (
                <li className="text-sm  text-red-500 ">
                  {errors.email.message}
                </li>
              )}
              {errors.password && (
                <li className="text-sm  text-red-500 ">
                  {errors.password.message}
                </li>
              )}
            </ul>
            <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
              {pathname.includes("signin") ? "Sign in" : "Log in"}
            </button>
          </div>

          <div className="flex items-center justify-center bg-gray-100 p-4">
            <p className="text-center text-sm text-gray-500">
              {pathname.includes("signin")
                ? "Already have an account ?"
                : "Don't have an account?"}
              <Link
                to={
                  pathname.includes("signin") ? "/auth/login" : "/auth/signin"
                }
                className="text-indigo-500 ml-1 hover:font-medium transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                {pathname.includes("signin") ? "Login" : "Register"}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
