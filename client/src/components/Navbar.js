import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="font-bold text-xl tracking-wider" to="/">
          CarFinder
        </Link>
        <Menu>
          <Menu.Button className="inline-flex items-center justify-center px-4 py-2 text-white rounded-md hover:bg-opacity-80 focus:outline-none">
            Menu
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 space-y-2 bg-white text-black rounded-md shadow-lg focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`block px-4 py-2 rounded-md ${
                    active ? "bg-blue-500 text-white" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`block px-4 py-2 rounded-md ${
                    active ? "bg-blue-500 text-white" : ""
                  }`}
                  to="/login"
                >
                  Login
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
