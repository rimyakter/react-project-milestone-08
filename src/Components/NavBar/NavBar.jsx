import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between mx-10 py-10">
      <span className="flex space-x-2" onClick={() => setOpen(!open)}>
        {open ? <X className="md:hidden"></X> : <Menu className="md:hidden" />}

        <ul
          className={`md:hidden absolute bg-[#eee] p-4 rounded duration-500 ${
            open ? "top-18" : "-top-48"
          }`}
        >
          {links}
        </ul>
        <h1>My NavBar</h1>
      </span>
      <ul className="md:flex hidden">{links}</ul>
      <button>Sign In</button>
    </nav>
  );
};

export default NavBar;
