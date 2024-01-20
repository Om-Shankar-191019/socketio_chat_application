import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Navigation = () => {
  const currentUser = false;
  return (
    <header className="bg-slate-200 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          {" "}
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">socket</span>
            <span className="text-slate-700">CHat</span>
          </h1>
        </Link>

        <ul className="flex gap-4">
          <Link to="/">
            {" "}
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/chat">
            {" "}
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Chat
            </li>
          </Link>
          <Link to="/login">
            {currentUser ? (
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="profile"
                className="rounded-full h-7 w-7 object-cover"
              />
            ) : (
              <li className=" text-slate-700 hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
