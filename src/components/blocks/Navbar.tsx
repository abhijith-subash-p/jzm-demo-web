"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ModeToggle } from "./DarkModeToggle";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/" },
    { title: "About Us", path: "/" },
    { title: "Contact Us", path: "/" },
  ];

  return (
    <nav className="w-full md:border-0 bg-secondary">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-2 md:py-2 md:block">
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">Blog</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 dark:text-gray-200 outline-none p-2 rounded-md  focus:text-primary"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 rounded-lg ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center text-sm space-y-4 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-700 dark:text-gray-200 hover:text-primary"
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            <li className="block lg:hidden">
              <ModeToggle />
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
