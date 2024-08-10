import logo from "../../public/logo.png";
import { TiThMenu } from "react-icons/ti";
import { FaRadio } from "react-icons/fa6";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#3C3C3E] text-white flex items-center justify-between p-4 shadow-lg z-30">
      <Link to=>
      <img src={logo} alt="Logo" className="h-20" />
      </Link>

      <div className="flex gap-24 items-center ">
        <div className="md:flex hidden gap-4">
          <Link to="/login">
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Sign up
            </button>
          </Link>
        </div>
        <FaRadio size={35} className="hidden md:block" />
        <TiThMenu size={35} className="cursor-pointer" onClick={handleClick} />
      </div>

      {/* Sliding menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-black font-bold text-2xl ">Home</h2>
          <IoClose
            size={30}
            className="cursor-pointer text-black"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Add menu items here */}

        <div className="text-black p-4 gap-5">
          <div className="flex justify-between items-center py-3">
            <Link to="/#">
              <button className="text-xl">About Us</button>
            </Link>
            <FaPlus size={20} className="cursor-pointer text-black" />
          </div>
          <div className="flex justify-between items-center py-3">
            <Link to="/#">
              <button className="text-xl">Blog</button>
            </Link>
            <FaPlus size={20} className="cursor-pointer text-black" />
          </div>
          <div className="flex justify-between items-center py-3">
            <Link to="/#">
              <button className="text-xl">Videos + Podcasts</button>
            </Link>
          </div>
          <div className="flex justify-between items-center py-3">
            <Link to="/#">
              <button className="text-xl">Love + Grace</button>
            </Link>
          </div>
          <div className="flex justify-between items-center py-3">
            <Link to="/#">
              <button className="text-xl">Court of Heaven</button>
            </Link>
            <FaPlus size={20} className="cursor-pointer text-black" />
          </div>
          <div className="flex justify-between items-center py-3">
            <Link to="/#">
              <button className="text-xl">Events</button>
            </Link>
            <FaPlus size={20} className="cursor-pointer text-black" />
          </div>
          <div className="flex justify-between items-center py-3">
            <Link to="/#">
              <button className="text-xl">Missions + Projects</button>
            </Link>
          </div>
          <div className="flex justify-between items-center py-3">
            <Link to="/#">
              <button className="text-xl">Partner + Give</button>
            </Link>
          </div>
          <div className="flex justify-between items-center py-3">
            <Link to="/#">
              <button className="text-xl">Connect with us</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-10 z-20"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
};
