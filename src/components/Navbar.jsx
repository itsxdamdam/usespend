import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              usespend
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link to="/send" className="text-gray-600 hover:text-gray-900">
              Send Money
            </Link>
            <Link
              to="/create-account"
              className="text-gray-600 hover:text-gray-900"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
