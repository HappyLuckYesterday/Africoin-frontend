// src/components/SubscriptionForm.tsx
import React, { useState } from "react";
import { ArrowUpRightIcon as ArrowUpRightOutline } from "@heroicons/react/24/outline";
import axios from "axios";

interface FormData {
  firstname: string;
  lastname: string;
  country: string;
  organization: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    country: "",
    organization: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstname) {
      newErrors.firstname = "First Name is required";
    }

    if (!formData.lastname) {
      newErrors.lastname = "Last Name is required";
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
      axios.post("https://cff9-2600-1f16-2b2-ef00-b24e-e6e0-e03c-eef4.ngrok-free.app/api/contact", formData).then((res) => {
        console.log(res.data);
      })
        .catch((err) => console.log(err));
    }
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
              htmlFor="firstname"
              className="block text-gray-700 font-bold pb-2"
            >
              First Name
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              className={`w-full p-3 border rounded-lg ${errors.firstname ? "border-red-500" : "border-gray-300"
                }`}
              value={formData.firstname}
              onChange={handleChange}
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm pt-1">{errors.firstname}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 pr-3 pb-6 md:pb-0">
            <label
              htmlFor="lastname"
              className="block text-gray-700 font-bold pb-2"
            >
              Last Name
            </label>
            <input
              id="lastname"
              name="lastname"
              type="email"
              className={`w-full p-3 border rounded-lg ${errors.lastname ? "border-red-500" : "border-gray-300"
                }`}
              value={formData.lastname}
              onChange={handleChange}
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm pt-1">{errors.lastname}</p>
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
              className={`w-full p-3 border rounded-lg ${errors.country ? "border-red-500" : "border-gray-300"
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
              className={`w-full p-3 border rounded-lg ${errors.organization ? "border-red-500" : "border-gray-300"
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
              className={`w-full p-3 border rounded-lg ${errors.phone ? "border-red-500" : "border-gray-300"
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
              className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"
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
            className={`w-full p-3 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"
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
        {submitted && (
          <p className="text-green-500 text-sm pt-4 text-center">
            Form submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
