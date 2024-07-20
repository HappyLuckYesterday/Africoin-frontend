import { Link, useLocation } from "react-router-dom";
import Logo from "../../assests/logo.png";
import IconDiscord from "../../assests/IconDiscord.png";
import IconInstagram from "../../assests/IconInstagram.png";
import IconTwitter from "../../assests/IconTwitter.png";
import IconLinkedin from "../../assests/IconLinkedin.png";

const Footer = () => {
  const location = useLocation();
  const isCurrentPage = (path: string) => {
    return location.pathname === path;
  };
  return (
    <div className="static inset-x-0 bottom-0 container">
      <div className="flex justify-between flex-wrap mt-10 items-center text-center">
        <div className={`${location.pathname === "/swap" && "hidden"}`}>
          <Link to="" className="hidden lg:flex lg:h-20 lg:w-auto mb-5">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div
          className={`flex gap-x-3 sm:gap-x-12 mx-auto lg:mr-0 mb-5 ${
            location.pathname === "/swap" && "hidden"
          }`}
        >
          <Link
            to="/"
            className={`${
              isCurrentPage("/") ? "text-green-500" : "text-black"
            } text-[18px] font-bold font-poppins block`}
          >
            {" "}
            Home
          </Link>
          <Link
            to="/swap"
            className={`${
              isCurrentPage("/swap") ? "text-green-500" : "text-black"
            } text-[18px] font-bold font-poppins block`}
          >
            {" "}
            Swap
          </Link>
          <Link
            to="/blog"
            className={`${
              isCurrentPage("/blog") ? "text-green-500" : "text-black"
            } text-[18px] font-bold font-poppins block`}
          >
            {" "}
            Blog
          </Link>
          <Link
            to="/faq"
            className={`${
              isCurrentPage("/faq") ? "text-green-500" : "text-black"
            } text-[18px] font-bold font-poppins block`}
          >
            {" "}
            FAQ
          </Link>
          <Link
            to="/contact"
            className={`${
              isCurrentPage("/contact") ? "text-green-500" : "text-black"
            } text-[18px] font-bold font-poppins block`}
          >
            {" "}
            Contact
          </Link>
        </div>  
      </div>
      <div
          className={`flex justify-center mx-auto mb-5 mt-5  ${
            location.pathname === "/swap" && "absolute right-40"
          }`}
        >
          <Link to="" className="mx-2">
            <img src={IconTwitter} alt="Twitter" />
          </Link>
          <Link to="" className="mx-2">
            <img src={IconDiscord} alt="Discord" />
          </Link>
          <Link to="" className="mx-2">
            <img src={IconInstagram} alt="Instagram" />
          </Link>
          <Link to="" className="mx-2">
            <img src={IconLinkedin} alt="Linkedin" />
          </Link>
        </div>
      <div
        className={`flex justify-center flex-wrap mb-8 items-center text-center ${
          location.pathname === "/swap" && "mt-10"
        }`}
      >
        <p className="mt-5 text-[16px] text-[#868686] font-poppins">
          Copyright@2024 Africoin All Rights Reserved
        </p>
        <p className="mt-5 text-[16px] text-[#868686] font-poppins flex">
          <p className="mx-6">Privacy Policy</p>
          <p className="mx-6">Terms of Use</p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
