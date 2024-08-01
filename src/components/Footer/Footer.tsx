import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../assests/logo.png";
import IconDiscord from "../../assests/IconDiscord.png";
import IconInstagram from "../../assests/IconInstagram.png";
import IconTwitter from "../../assests/IconTwitter.png";
import IconLinkedin from "../../assests/IconLinkedin.png";
import "./style.css"

const Footer = () => {
  const location = useLocation();

  const myauth = useSelector((state: any) => state.auth);

  const isCurrentPage = (path: string) => {
    return location.pathname === path;
  };
  return (
    <div className="static inset-x-0 bottom-0 w-full max-w-7xl mx-auto">
      <div className="flex justify-between flex-wrap mt-10 items-center text-center">
        <div className={`${location.pathname === "/swap" && "hidden"}`}>
          <Link to="" className="hidden lg:flex lg:h-20 lg:w-auto mb-5">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        {!myauth.isAuthenticated &&
          <div
            className={`flex gap-x-2 min-[400px]:gap-x-4 min-[500px]:gap-x-6 sm:gap-x-12 mx-auto lg:mr-0 mb-5 ${
              location.pathname === "/swap" && "hidden"
            }`}
          >
            <Link
              to="/"
              className={`${
                isCurrentPage("/") ? "text-green-500" : "text-black"
              } text-[18px] font-bold font-poppins block hover-effect`}
            >
              {" "}
              Home
            </Link>
            <Link
              to="/swap"
              className={`${
                isCurrentPage("/swap") ? "text-green-500" : "text-black"
              } text-[18px] font-bold font-poppins block hover-effect`}
            >
              {" "}
              Swap
            </Link>
            <Link
              to="/blog"
              className={`${
                isCurrentPage("/blog") ? "text-green-500" : "text-black"
              } text-[18px] font-bold font-poppins block hover-effect`}
            >
              {" "}
              Blog
            </Link>
            <Link
              to="/faq"
              className={`${
                isCurrentPage("/faq") ? "text-green-500" : "text-black"
              } text-[18px] font-bold font-poppins block hover-effect`}
            >
              {" "}
              FAQ
            </Link>
            <Link
              to="/contact"
              className={`${
                isCurrentPage("/contact") ? "text-green-500" : "text-black"
              } text-[18px] font-bold font-poppins block hover-effect`}
            >
              {" "}
              Contact
            </Link>
          </div>  
        }
        {myauth.isAuthenticated &&
          <div
            className={`flex gap-x-6 sm:gap-x-12 mx-auto lg:mr-0 mb-5 ${
              location.pathname === "/swap" && "hidden"
            }`}
          >
            <Link
              to="/admin/user"
              className={`${
                isCurrentPage("/admin/user") ? "text-green-500" : "text-black"
              } text-[18px] font-bold font-poppins block hover-effect`}
            >
              {" "}
              User
            </Link>
            <Link
              to="/admin/blog"
              className={`${
                isCurrentPage("/admin/blog") ? "text-green-500" : "text-black"
              } text-[18px] font-bold font-poppins block hover-effect`}
            >
              {" "}
              Blog
            </Link>
            <Link
              to="/admin/faq"
              className={`${
                isCurrentPage("/admin/faq") ? "text-green-500" : "text-black"
              } text-[18px] font-bold font-poppins block hover-effect`}
            >
              {" "}
              FAQ
            </Link>
            <Link
              to="/admin/contact"
              className={`${
                isCurrentPage("/admin/contact") ? "text-green-500" : "text-black"
              } text-[18px] font-bold font-poppins block hover-effect`}
            >
              {" "}
              Contact
            </Link>
          </div>  
        }
      </div>
      <div
          className={`flex justify-center mx-auto mb-5 mt-5 ${
            location.pathname === "/swap" && "mx-auto mt-0"
          }`}
        >
          <Link to="" className="mx-2 link-hover-effect">
            <img src={IconTwitter} alt="Twitter" />
          </Link>
          <Link to="" className="mx-2 link-hover-effect">
            <img src={IconDiscord} alt="Discord" />
          </Link>
          <Link to="" className="mx-2 link-hover-effect">
            <img src={IconInstagram} alt="Instagram" />
          </Link>
          <Link to="" className="mx-2 link-hover-effect">
            <img src={IconLinkedin} alt="Linkedin" />
          </Link>
        </div>
      <div
        className={`flex justify-center flex-wrap mb-8 items-center text-center ${
          location.pathname === "/swap" && "mt-5"
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
