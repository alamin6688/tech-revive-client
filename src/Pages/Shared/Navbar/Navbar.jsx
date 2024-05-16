import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import DarkMode from "../../DarkMode/Darkmode";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <NavLink
        className="btn px-3 text-[16px] text-[#ff2a00] bg-transparent border-none"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="btn px-3 text-[16px] ml-2 bg-transparent border-none"
        to="/all-services"
      >
        All Services
      </NavLink>
      {user ? (
        <Link to="">
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn px-3 text-[16px] ml-2 bg-transparent border-none">
              Dashboard
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[20] menu p-2 shadow bg-gray-200 rounded-box w-52 text-black md:text-[16px] md:font-semibold"
            >
              <li>
                <Link to="/add-service">Add Service</Link>
              </li>
              <li>
                <Link to="/manage-service">Manage Service</Link>
              </li>
              <li>
                <Link to="/booked-service">Booked Services</Link>
              </li>
              <li>
                <Link to="/to-do-service">Service-To-Do</Link>
              </li>
            </ul>
          </div>
        </Link>
      ) : (
        <Link to="/sign-up">
          <button className="btn px-3 text-[16px] ml-2 bg-transparent border-none">
            Sign Up
          </button>
        </Link>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 w-[98%] mx-auto mt-3 p-0">
        <div className="navbar-start ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 rounded-box w-52 text-center"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <button className="btn btn-ghost font-bold text-xl md:text-3xl lg:text-4xl pl-0 md:pl-2 text-black ">
              Tech <span className="text-[#FF3811]">Revive</span>
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navLinks}</ul>
        </div>
        <div className="navbar-end mr-2">
        <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
            <div className="mt-1">
              <DarkMode></DarkMode>
            </div>
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar ml-3">
            <div className="w-10 rounded-full">
              {user ? <img src={user.photoURL} title={user.displayName} /> : ""}
            </div>
          </div>


          <div>
            {user ? (
              <button
                onClick={handleSignOut}
                className="btn text-[18px] bg-[#FF3811] hover:bg-[#ff2a00] text-white border-none ml-2"
              >
                Log Out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn text-[18px] bg-[#FF3811] hover:bg-[#ff2a00] text-white border-none  ml-2">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
