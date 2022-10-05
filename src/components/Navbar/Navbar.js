import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "./home" },
    { id: 2, name: "Products", path: "./products" },
    { id: 5, name: "Orders", path: "./orders" },
    { id: 4, name: "About", path: "./about" },
    { id: 3, name: "Contact", path: "./contact" },
  ];
  return (
    <div>
      <nav className="bg-purple-200 w-full p-4 mb-3">
        <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        <ul
          className={`md:flex justify-center text-xl w-full absolute md:static duration-300 ease-in bg-purple-200 ${
            open ? "top-10" : "top-[-190px]"
          }`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
