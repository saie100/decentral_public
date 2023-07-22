import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import arrowright from "../../assets/images/arrow-right.png";

export default function ButtonAppBar() {
  const [first, setfirst] = useState(false);

  return (
    <div>
      <nav className=" bg-white px-2 smL:px-4 py-2.5 dark:bg-gray-900  w-full z-20 top-0 left-0 ">
        <div
          className=" w-11/12 lgL:w-10/12 2xlL:w-8/12 ml-auto mr-auto  flex flex-wrap justify-between items-center mx-auto"
          bis_skin_checked="1"
        >
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-6 smL:h-9" alt="Flowbite Logo" />
          </Link>
          <div className="flex mdL:order-2" bis_skin_checked="1">
            <button
              type="button"
              className="text-primary bg-primary-light   focus:ring-4 focus:outline-none  rounded-3xl text-xsLa hidden smL:block mdL:text-smLa px-6 py-3 text-center f-f-sm  mr-3 "
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-primary  focus:ring-4 focus:outline-none  rounded-3xl text-xsLa mdL:text-smLa px-6 py-3 text-center f-f-sm mr-3 mdL:mr-0 "
            >
              <ul className="inline-flex">
                <li>Get started</li>
              </ul>
            </button>
            <button
              type="button"
              onClick={() => {
                setfirst(!first);
              }}
              className="inline-flex items-center p-2 text-smLa text-gray-500 rounded-lg mdL:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              first ? "block" : " hidden"
            }   justify-between items-center w-full mdL:flex mdL:w-auto mdL:order-1`}
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 mdL:flex-row mdL:space-x-3 xlL:space-x-8 mdL:mt-0 mdL:text-smLa mdL:font-medium mdL:border-0 mdL:bg-white dark:bg-gray-800 mdL:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-white f-f-b bg-primary rounded mdL:bg-transparent mdL:text-black mdL:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="ml-0 mt-2 mdL:mt-0">
                <Link
                  to="/portfolio"
                  className="block py-2 pr-4 pl-3 text-grey    f-f-r text-smLa  rounded hover:text-white  hover:bg-primary mdL:hover:bg-transparent mdL:hover:text-blue-700 mdL:p-0 "
                >
                  Wallet
                </Link>
              </li>
              <li className="ml-0 mt-2 mdL:mt-0">
                <Link
                  to="/buy-sell"
                  className="block py-2 pr-4 pl-3 text-grey    f-f-r text-smLa  rounded hover:text-white  hover:bg-primary mdL:hover:bg-transparent mdL:hover:text-blue-700 mdL:p-0 "
                >
                  Buy
                </Link>
              </li>
              <li className="ml-0 mt-2 mdL:mt-0">
                <Link
                  to="/buy-sell"
                  className="block py-2 pr-4 pl-3 text-grey    f-f-r text-smLa  rounded hover:text-white  hover:bg-primary mdL:hover:bg-transparent mdL:hover:text-blue-700 mdL:p-0 "
                >
                  Sell
                </Link>
              </li>
              <li className="ml-0 mt-2 mdL:mt-0">
                <Link
                  to="/buy-sell"
                  className="block py-2 pr-4 pl-3 text-grey    f-f-r text-smLa  rounded hover:text-white  hover:bg-primary mdL:hover:bg-transparent mdL:hover:text-blue-700 mdL:p-0 "
                >
                  Send
                </Link>
              </li>
              <li className="ml-0 mt-2 mdL:mt-0">
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-grey    f-f-r text-smLa  rounded hover:text-white  hover:bg-primary mdL:hover:bg-transparent mdL:hover:text-blue-700 mdL:p-0 "
                >
                  Learn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
