import React from "react";
import { navdata, hometext } from "../data";
import Link from "next/link";


const Navbar = () => {
  return (
    <>
      {" "}
      <nav className="bg-blue-400 flex justify-between">
        <Link href="/home/aweb">
          <span className="text-xl flex items-center pl-10 font-bold font-mono">
            Landing Page
          </span>
        </Link>
        <ul className="flex cursor-pointer  text-white px-5 py-2 justify-end">
          {navdata.map((data, i) => {
            const { name, href } = data;
            return (
              <>
                <Link key={i} href={href}>
                  <li className="m-2 cursor-pointer ml-10 hover:text-neutral-700 pt-1">
                    {name}
                  </li>
                </Link>
              </>
            );
          })}
          <div className={hometext.btnClass2}>
            <button>{hometext.btnText}</button>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
