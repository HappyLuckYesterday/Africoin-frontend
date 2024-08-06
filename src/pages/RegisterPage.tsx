import React, { useEffect, useState } from "react";
import { ArrowUpRightIcon as ArrowUpRightOutline } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BarLoader, DotLoader } from "react-spinners";
import Popup from "../components/Popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { removeErrors } from "../redux/reducers/actionCreators/error";
import { AppDispatch } from "../redux/store";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password2: string;
}

const RegisterPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showPopupSuccess, setShowPopupSuccess] = useState(false);
  const [showPopupError, setShowPopupError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const store = useSelector((state: any) => state.errors);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstname) {
      newErrors.firstname = "First Name is required";
    }

    if (!formData.lastname) {
      newErrors.lastname = "Last Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (!formData.password2) {
      newErrors.password2 = "Confirm your Password";
    }

    if (formData.password !== formData.password2) {
      newErrors.password2 = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form data:", formData);
      setSubmitted(true);
      axios
        .post("https://africoin-web.vercel.app/api/user/register", formData)
        .then((res) => {
          console.log(res);
          // localStorage.setItem("cur_email", formData.email);
          // navigate("/login");
          setShowPopupSuccess(true);
        })
        .catch((err) => {
          console.log(err.response.data.message);
          setErrorMessage(err.response.data.message);
          setShowPopupError(true);
        });
    }
  };

  useEffect(() => {
    if (Object.keys(store.errors).length > 0) {
      setShowPopupError(true);
      setSubmitted(false);
    }
  }, [store.errors]);

  const handleClose = () => {
    setShowPopupSuccess(false);
    setShowPopupError(false);
    setSubmitted(false);
    setErrorMessage(null);
    removeErrors([], dispatch);
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="font-poppins text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] text-left">
        Welcome to <b className="text-green-500">Africoin</b>
      </h1>
      <p className="font-poppins text-[18px] md:text-[22px] xl:text-[25px] text-left">
        Register your account.
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-1/3 max-w-3xl min-w-[350px] pt-6 bg-gray-200 rounded-3xl"
      >
        <div className="pb-5 mx-5">
          <label
            htmlFor="firstname"
            className="block text-gray-700 font-bold pb-2"
          >
            First Name
          </label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            className={`w-full p-3 border rounded-lg ${
              errors.firstname ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.firstname}
            onChange={handleChange}
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm pt-1">{errors.firstname}</p>
          )}
        </div>
        <div className="pb-5 mx-5">
          <label
            htmlFor="lastname"
            className="block text-gray-700 font-bold pb-2"
          >
            Last Name
          </label>
          <input
            id="lastname"
            name="lastname"
            type="lastname"
            className={`w-full p-3 border rounded-lg ${
              errors.lastname ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.lastname}
            onChange={handleChange}
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm pt-1">{errors.lastname}</p>
          )}
        </div>
        <div className="pb-5 mx-5">
          <label htmlFor="email" className="block text-gray-700 font-bold pb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`w-full p-3 border rounded-lg ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm pt-1">{errors.email}</p>
          )}
        </div>

        <div className="pb-5 mx-5">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold pb-2"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className={`w-full p-3 border rounded-lg ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm pt-1">{errors.password}</p>
          )}
        </div>
        <div className="pb-5 mx-5">
          <label
            htmlFor="password2"
            className="block text-gray-700 font-bold pb-2"
          >
            Confirm Password
          </label>
          <input
            id="password2"
            name="password2"
            type="password"
            className={`w-full p-3 border rounded-lg ${
              errors.password2 ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.password2}
            onChange={handleChange}
          />
          {errors.password2 && (
            <p className="text-red-500 text-sm pt-1">{errors.password2}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-gradient-to-tr from-[#2600FC] to-[#048343] hover:bg-gradient-to-bl hover:shadow-[2px_2px_2px_gray] text-white  py-4 px-8 rounded-3xl text-[16px] top-[50%] font-semibold font-inter hover:bg-blue-700 transition duration-300"
        >
          Register
          <ArrowUpRightOutline className="w-6 h-6 inline pl-2" />
        </button>
        {/* {submitted && (
                    <div className="flex justify-center pt-5">
                        <BarLoader width={160} />
                    </div>
                )} */}
        <div className="flex justify-center my-5">
          <p className="text-gray-600 pr-5">Already User?</p>
          <Link to="/login" className="font-bold">
            Login here.
          </Link>
        </div>
      </form>
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="flex flex-col justify-center bg-none p-6 w-[320px] rounded-[20px]">
            <div className="mx-auto">
              <DotLoader />
            </div>
            <p className="text-2xl mt-4 text-white">Please wait...</p>
          </div>
        </div>
      )}
      {showPopupError && (
        <Popup
          title="Error"
          message={errorMessage || "An error occurred"}
          onClose={handleClose}
        />
      )}
      {showPopupSuccess && (
        <Popup
          title="Success"
          message={"Sign up Successfully."}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default RegisterPage;

function setShowPopup(arg0: boolean) {
  throw new Error("Function not implemented.");
}
