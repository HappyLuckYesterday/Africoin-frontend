import React, { useState } from "react";
import { ArrowUpRightIcon as ArrowUpRightOutline } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { loginUser } from '../redux/reducers/actionCreators/auth';

interface FormData {
    email: string;
    password: string;
}

const LoginPage = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const validate = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid";
        }

        if (!formData.password) {
            newErrors.password = "Message is required";
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            console.log("Form data:", formData);
            setSubmitted(true);

            loginUser(formData, dispatch, navigate);
        }
    };

    return (
        <div className="p-10 flex flex-col items-center">
            <h1 className="font-poppins text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] text-left">
                Welcome to <b className="text-green-500">Africoin</b>
            </h1>
            <p className="font-poppins text-[18px] md:text-[22px] xl:text-[25px] text-left">
                Login to your account.
            </p>
            <form
                onSubmit={handleSubmit}
                noValidate
                className="w-1/3 max-w-3xl min-w-[350px] pt-6 bg-gray-200 rounded-3xl"
            >
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
                <p className="text-right mr-5">Forgot Password?</p>
                <button
                    type="submit"
                    className="bg-gradient-to-tr from-[#2600FC] to-[#048343] hover:bg-gradient-to-bl hover:shadow-[2px_2px_2px_gray] text-white  py-4 px-8 rounded-3xl text-[16px] top-[50%] font-semibold font-inter hover:bg-blue-700 transition duration-300"
                >
                    Login
                    <ArrowUpRightOutline className="w-6 h-6 inline pl-2" />
                </button>
                {submitted && (
                    <p className="text-green-500 text-sm pt-4 text-center">
                        Form submitted successfully!
                    </p>
                )}
                <div className="flex justify-center my-5">
                    <p className="text-gray-600 pr-5">New here?</p>
                    <Link to="/register" className="font-bold">Register here.</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;