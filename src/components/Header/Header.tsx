import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assests/logo.png";
import Leaf from "../../assests/leaf.png";
import BlueLinkButton from "../Buttons/BlueLinkButton";
import { Link, useLocation } from "react-router-dom";
import LeafCap from "../../assests/LeafCap.png";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isCurrentPage = (path: string) => {
    return location.pathname === path;
  };
  return (
    <header className="w-full">
      <nav
        className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-row">
        <div className="flex lg:flex-1 mr-10">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="mt-3 h-20 w-auto" src={Logo} alt="" />
          </a>
        </div>
        <PopoverGroup className="max-[1220px]:hidden flex gap-x-6 translate-y-[8px]">
          <div className="flex flex-col items-center">
            <img
              src={LeafCap}
              alt="leafCap"
              className={`opacity-0 ${isCurrentPage("/") && "opacity-100"}`}
            />
            <Link
              to="/"
              className={`${isCurrentPage("/") ? "text-green-500" : "text-black"
                } text-[18px] font-bold font-poppins transition ease-in-out hover:bg-gray-200 rounded-md px-2 py-1`}
            >
              {" "}
              Home
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={LeafCap}
              alt="leafCap"
              className={`opacity-0 ${isCurrentPage("/swap") && "opacity-100"}`}
            />
            <Link
              to="/swap"
              className={`${isCurrentPage("/swap") ? "text-green-500" : "text-black"
                } text-[18px] font-bold font-poppins transition ease-in-out hover:bg-gray-200 rounded-md px-2 py-1`}
            >
              {" "}
              Swap
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={LeafCap}
              alt="leafCap"
              className={`opacity-0 ${isCurrentPage("/blog") && "opacity-100"}`}
            />
            <Link
              to="/blog"
              className={`${isCurrentPage("/blog") ? "text-green-500" : "text-black"
                } text-[18px] font-bold font-poppins transition ease-in-out hover:bg-gray-200 rounded-md px-2 py-1`}
            >
              {" "}
              Blog
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={LeafCap}
              alt="leafCap"
              className={`opacity-0 ${isCurrentPage("/faq") && "opacity-100"}`}
            />
            <Link
              to="/faq"
              className={`${isCurrentPage("/faq") ? "text-green-500" : "text-black"
                } text-[18px] font-bold font-poppins transition ease-in-out hover:bg-gray-200 rounded-md px-2 py-1`}
            >
              {" "}
              FAQ
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={LeafCap}
              alt="leafCap"
              className={`opacity-0 ${isCurrentPage("/contact") && "opacity-100"
                }`}
            />
            <Link
              to="/contact"
              className={`${isCurrentPage("/contact") ? "text-green-500" : "text-black"
                } text-[18px] font-bold font-poppins transition ease-in-out hover:bg-gray-200 rounded-md px-2 py-1`}
            >
              {" "}
              Contact
            </Link>
          </div>
        </PopoverGroup>
        </div>
        <div className="max-[1220px]:hidden flex flex-1 justify-end">
        <PopoverGroup className="max-[1220px]:hidden flex gap-x-6 translate-y-[-8px] mr-10">
          <div className="flex flex-col items-center">
            <img
              src={LeafCap}
              alt="leafCap"
              className={`opacity-0 ${isCurrentPage("/login") && "opacity-100"
                }`}
            />
            <Link
              to="/login"
              className={`${isCurrentPage("/login") ? "text-green-500" : "text-black"
                } text-[18px] font-bold font-poppins transition ease-in-out hover:bg-gray-200 rounded-md px-2 py-1`}
            >
              {" "}
              Login
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={LeafCap}
              alt="leafCap"
              className={`opacity-0 ${isCurrentPage("/register") && "opacity-100"
                }`}
            />
            <Link
              to="/register"
              className={`${isCurrentPage("/register") ? "text-green-500" : "text-black"
                } text-[18px] font-bold font-poppins transition ease-in-out hover:bg-gray-200 rounded-md px-2 py-1`}
            >
              {" "}
              Signup
            </Link>
          </div>
          </PopoverGroup>
          <BlueLinkButton text="CONNECT WALLET" link="/login" />
        </div>
        <div className="flex min-[1220px]:hidden mt-3">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10  overflow-y-auto bg-white py-6 w-full sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 ml-6">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src={Leaf} alt="leaf" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 mr-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div
                className="space-y-2 py-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link
                  to="/home"
                  className={`${isCurrentPage("/home") ? "text-green-500" : "text-black"
                    } text-[18px] font-poppins block -mx-3 py-2 pl-10 hover:bg-gray-50 `}
                >
                  {" "}
                  Home
                </Link>
                <Link
                  to="/swap"
                  className={`${isCurrentPage("/swap") ? "text-green-500" : "text-black"
                    } text-[18px] font-poppins block -mx-3 py-2 pl-10 hover:bg-gray-50 `}
                >
                  {" "}
                  Swap
                </Link>
                <Link
                  to="/blog"
                  className={`${isCurrentPage("/blog") ? "text-green-500" : "text-black"
                    } text-[18px] font-poppins block -mx-3 py-2 pl-10 hover:bg-gray-50 `}
                >
                  {" "}
                  Blog
                </Link>
                <Link
                  to="/faq"
                  className={`${isCurrentPage("/faq") ? "text-green-500" : "text-black"
                    } text-[18px] font-poppins block -mx-3 py-2 pl-10 hover:bg-gray-50 `}
                >
                  {" "}
                  FAQ
                </Link>
                <Link
                  to="/contact"
                  className={`${isCurrentPage("/contact") ? "text-green-500" : "text-black"
                    } text-[18px] font-poppins block -mx-3 py-2 pl-10 hover:bg-gray-50 `}
                >
                  {" "}
                  Contact
                </Link>
              </div>
              <div className="py-6" onClick={() => setMobileMenuOpen(false)}>
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg py-2.5 text-[18px] font-poppins leading-7 text-gray-900 pl-10 hover:bg-gray-50"
                >
                  Connect Wallet
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
