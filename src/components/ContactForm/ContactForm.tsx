// src/components/SubscriptionForm.tsx
import React, { useEffect, useState } from "react";
import { ArrowUpRightIcon as ArrowUpRightOutline } from "@heroicons/react/24/outline";
import axios from "axios";
import { RowData } from "../Table/Contacts/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { removeErrors } from "../../redux/reducers/actionCreators/error";
import Popup from "../Popup/Popup";
import { DotLoader } from "react-spinners";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<RowData>({
    _id: "",
    first_name: "",
    last_name: "",
    country: "",
    organization: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<RowData>>({});
  const [submitted, setSubmitted] = useState(false);

  const [showPopupSuccess, setShowPopupSuccess] = useState(false);
  const [showPopupError, setShowPopupError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const store = useSelector((state: any) => state.errors);
  const dispatch = useDispatch<AppDispatch>();

  const validate = (): boolean => {
    const newErrors: Partial<RowData> = {};

    if (!formData.first_name) {
      newErrors.first_name = "First Name is required";
    }

    if (!formData.last_name) {
      newErrors.last_name = "Last Name is required";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    if (!formData.organization) {
      newErrors.organization = "Organization is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
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
      const { _id, ...newformData } = formData;
      axios
        .post("https://africoin-web.vercel.app/api/contact", newformData)
        .then((res) => {
          console.log(res.data);
          setShowPopupSuccess(true);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(err.response.data.error || err.response.data.message);
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
    <div className="bg-leaf-pattern bg-cover p-10 rounded-[50px] shadow-md flex flex-col items-center">
      <p className="font-poppins text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] text-left">
        Get in Touch
      </p>
      <p className="font-poppins text-[18px] md:text-[22px] xl:text-[25px] text-left">
        Subscribe to our super-rare and exclusive drops & collections.
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full max-w-3xl pt-6"
      >
        <div className="flex flex-wrap pb-6">
          <div className="w-full md:w-1/2 pr-3 pb-6 md:pb-0">
            <label
              htmlFor="first_name"
              className="block text-gray-700 font-bold pb-2"
            >
              First Name
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              className={`w-full p-3 border rounded-lg ${
                errors.first_name ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.first_name}
              onChange={handleChange}
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm pt-1">{errors.first_name}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 pr-3 pb-6 md:pb-0">
            <label
              htmlFor="last_name"
              className="block text-gray-700 font-bold pb-2"
            >
              Last Name
            </label>
            <input
              id="last_name"
              name="last_name"
              type="email"
              className={`w-full p-3 border rounded-lg ${
                errors.last_name ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.last_name}
              onChange={handleChange}
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm pt-1">{errors.last_name}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap pb-6">
          <div className="w-full md:w-1/2 pr-3 pb-6 md:pb-0">
            <label
              htmlFor="country"
              className="block text-gray-700 font-bold pb-2"
            >
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              className={`w-full p-3 border rounded-lg ${
                errors.country ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.country}
              onChange={handleChange}
            />
            {errors.country && (
              <p className="text-red-500 text-sm pt-1">{errors.country}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 pr-3 pb-6 md:pb-0">
            <label
              htmlFor="organization"
              className="block text-gray-700 font-bold pb-2"
            >
              Organization
            </label>
            <input
              id="organization"
              name="organization"
              type="email"
              className={`w-full p-3 border rounded-lg ${
                errors.organization ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.organization}
              onChange={handleChange}
            />
            {errors.organization && (
              <p className="text-red-500 text-sm pt-1">{errors.organization}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap pb-6">
          <div className="w-full md:w-1/2 pr-3 pb-6 md:pb-0">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold pb-2"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              className={`w-full p-3 border rounded-lg ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm pt-1">{errors.phone}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 pr-3 pb-6 md:pb-0">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold pb-2"
            >
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
        </div>
        <div className="pb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold pb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={`w-full p-3 border rounded-lg ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-sm pt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-gradient-to-tr from-[#2600FC] to-[#048343] hover:bg-gradient-to-bl hover:shadow-[2px_2px_2px_gray] text-white  py-4 px-8 rounded-3xl text-[16px] top-[50%] font-semibold font-inter hover:bg-blue-700 transition duration-300"
        >
          Submit
          <ArrowUpRightOutline className="w-6 h-6 inline pl-2" />
        </button>
        {/* {submitted && (
          <p className="text-green-500 text-sm pt-4 text-center">
            Form submitted successfully!
          </p>
        )} */}
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
          message={"Subscribed Successfully."}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default ContactForm;
