import { NavLink } from "react-router-dom";

const Nav = () => {
    const link = <>
    <li><NavLink to="/"
     className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] bg-none font-semibold text-lg ': 'text-lg font-normal' }   
    >Home</NavLink></li>
    <li><NavLink to="/listedBooks/readBooks"
     className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] bg-none font-semibold text-lg': 'text-lg font-normal' }>Listed Books</NavLink></li>
    <li><NavLink to="/pagesToRead"
     className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] bg-none font-semibold text-lg': 'text-lg font-normal' }>Pages to Read</NavLink></li>
    <li><NavLink to="/author"
     className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] bg-none font-semibold text-lg': 'text-lg font-normal' }>Authors</NavLink></li>
    </>
  return (
    <div className="work-sans mt-[50px] mb-[48px]">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {link}
            </ul>
          </div>
          <a className="btn btn-ghost  text-[#131313] font-bold text-2xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end gap-4 hidden md:flex">
          <a className="btn bg-[#23BE0A] font-semibold text-lg text-white">Sign In</a>
          <a className="btn bg-[#59C6D2] font-semibold text-lg text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
