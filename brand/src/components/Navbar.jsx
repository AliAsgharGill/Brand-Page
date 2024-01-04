import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="w-full h-[72px] relative flex  justify-between items-start ">
        <NavLink to="/">
          <img
            className="w-[76px] h-[42.75px]  "
            src="/public/Images/brand_logo.png"
          />
        </NavLink>

        <div className="justify-start items-start gap-6 inline-flex">
          <div className="w-[46px] h-6 justify-center items-center flex">
            <NavLink
              to="/"
              className="text-zinc-800 text-base font-semibold font-['Poppins'] hover:text-red-600"
            >
              MENU
            </NavLink>
          </div>
          <div className="w-[82px] h-6 justify-center items-center flex">
            <NavLink
              to="/"
              className="text-zinc-800 text-base font-semibold font-['Poppins'] hover:text-red-600"
            >
              LOCATION
            </NavLink>
          </div>
          <div className="w-14 h-6 pr-px justify-center items-center flex">
            <NavLink
              to="/about"
              className="text-zinc-800 text-base font-semibold font-['Poppins'] hover:text-red-600"
            >
              ABOUT
            </NavLink>
          </div>
          <div className="w-[77px] h-6 justify-center items-center flex">
            <NavLink
              to="/"
              className="text-zinc-800 text-base font-semibold font-['Poppins'] hover:text-red-600"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
        <NavLink
          to="/login"
          className="px-4 py-1.5 bg-red-600 text-white text-base font-semibold font-['Inter'] hover:text-red-600 hover:border-rose-600 hover:border hover:bg-white  justify-start items-start gap-2.5 inline-flex"
        >
          <div className="">Login</div>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
