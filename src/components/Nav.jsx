import React from "react";

function Nav() {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between">
      <div>
        <img src="./images/ii.png" className="w-10 " />
      </div>
      <div className="grid content-center">
        <ul className="flex justify-end">
          <li className="pr-6 font-semibold font-serif text-gray-300">
            <a href="">About</a>
          </li>
          <li className="pr-6 font-semibold font-serif text-gray-300">
            <a href="">Experience</a>
          </li>
          <li className="pr-5 font-semibold font-serif text-gray-300">
            <a href="">Work</a>
          </li>
          <li className="pr-3 pl-3 border font-serif rounded-lg text-gray-300 hover:bg-gray-800">
            <a href="">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
