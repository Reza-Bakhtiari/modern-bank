import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <ul className="hover:text-secondary list-none sm:flex hidden justify-start items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`hover:text-secondary font-vazir font-normal cursor-pointer text-[16px] text-white mr-10  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-start items-center ">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
          alt="menu"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="hover:text-secondary list-none flex z-10 flex-col justify-start items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` hover:text-secondary font-vazir font-normal z-10 cursor-pointer text-[16px] text-white mr-1 ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white `}
              >
                <a
                  className="z-10 hover:text-secondary cursor-pointer"
                  href={`#${nav.id}`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
    </div>
  );
};

export default Navbar;
