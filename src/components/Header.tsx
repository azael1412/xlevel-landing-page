import { useState } from "react";
import logo from "../assets/img/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

interface NavbarData {
  title : string
  href : string
  name : string
}
const navbarData : NavbarData[] = [
  {
    title: "Our Process",
    href: "/Our-Process",
    name:
      " font-medium w-full flex justify-center p-2 mt-3  lg:p-0 lg:mt-0 lg:w-auto",
  },
  {
    title: "Services",
    href: "/Services",
    name:
      " font-medium w-full flex justify-center p-2  lg:p-0 lg:w-auto",
  },
  {
    title: "Packages",
    href: "/Packages",
    name:
      " font-medium w-full flex justify-center p-2  lg:p-0 lg:w-auto",
  },
  {
    title: "Consultation",
    href: "/Consultation",
    name:
      " font-medium w-full flex justify-center p-2  lg:p-0 lg:w-auto",
  },
//   {
//     title: "Contact",
//     href: "/contact",
//     name:
//       "font-medium w-full flex justify-center p-2  lg:p-0 lg:w-auto",
//   },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  // start mobile first plus facile
  return (
    <nav className="fixed top-0 w-full bg-black items-center flex p-4 z-50 font-poppins text-2xl md:text-xl uppercase font-bold">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full flex-wrap lg:flex-nowrap">
        <img
          src={logo}
          alt="logo de la empresa"
          className="block object-contain h-12 w-28 bg-primary cursor-pointer"
        />

        <button
          className="flex justify-end lg:hidden ring-1 ring-black rounded"
          onClick={showNav}
        >
            {toggle ? <IoCloseSharp className="text-2xl" /> : <GiHamburgerMenu className="text-2xl" /> }
          {/* <i className="fas fa-bars text-white w-9 h-9 flex justify-center items-center hover:text-black"></i> */}
        </button>

        <ul
          className={`${
            toggle ? " flex" : " hidden"
          } flex-col justify-center md:items-center h-screen  lg:h-auto items-center w-full first:mt-2 lg:flex-row lg:w-auto lg:space-x-10 lg:flex`}
        >
          {navbarData.map((link, index) => {
            return (
              <li key={index} className={link.name}>
                <a
                  className="hover:text-primary"
                  href={link.href}
                  onClick={showNav}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
            <div className="hidden xl:flex items-center gap-2 border-2 border-primary rounded-2xl p-2">
                    <a href="#" className="block">
                      Join the team
                    </a>
                    <IoMdArrowDropdown className="text-primary" />
                  </div>
        </ul>
      </div>
    </nav>
  );
}
