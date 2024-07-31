import React, { useState } from "react";
import { ArrowUpRightIcon as ArrowUpRightOutline } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
            axios.post("https://africoin-server.vercel.app//api/user/register", formData).then((res) => {
                console.log(res);
                // localStorage.setItem("cur_email", formData.email);
                navigate("/login");
            })
                .catch((err) => console.log(err));
        }
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
                        className={`w-full p-3 border rounded-lg ${errors.firstname ? "border-red-500" : "border-gray-300"
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
                        className={`w-full p-3 border rounded-lg ${errors.lastname ? "border-red-500" : "border-gray-300"
                            }`}
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                    {errors.lastname && (
                        <p className="text-red-500 text-sm pt-1">{errors.lastname}</p>
                    )}
                </div>
                <div className="pb-5 mx-5">
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
                        className={`w-full p-3 border rounded-lg ${errors.password ? "border-red-500" : "border-gray-300"
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
                        className={`w-full p-3 border rounded-lg ${errors.password2 ? "border-red-500" : "border-gray-300"
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
                    <p className="text-green-500 text-sm pt-4 text-center">
                        Form submitted successfully!
                    </p>
                )} */}
                <div className="flex justify-center my-5">
                    <p className="text-gray-600 pr-5">Already User?</p>
                    <Link to="/login" className="font-bold">Login here.</Link>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;