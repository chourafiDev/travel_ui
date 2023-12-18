import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IoClose } from "react-icons/io5";
import { darkLogo, lightLogo } from "@/utils/assets";
import { useTheme } from "next-themes";

interface ResponsiveNavbar {
  nav: boolean;
  handelNav: () => void;
}

const ResponsiveNavbar: FC<ResponsiveNavbar> = ({ nav, handelNav }) => {
  const { theme } = useTheme();
  return (
    <div
      className={
        nav
          ? "md:hidden fixed left-0 top-0 w-full h-full bg-dark/50 backdrop-blur z-50"
          : ""
      }
    >
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-full dark:bg-[#171717] bg-white p-4 ease-in duration-500"
            : "fixed left-[-100%] top-0  p-10 h-full ease-in duration-500"
        }
      >
        <div className="border-b border-gray pb-4">
          <div className="flex justify-between w-full items-center">
            <Image
              src={theme === "dark" ? lightLogo : darkLogo}
              alt="logo"
              width={160}
              height={100}
            />
            <div
              onClick={handelNav}
              className="rounded-full shadow-md w-10 h-10 cursor-pointer flex items-center justify-center bg-primary"
            >
              <IoClose className="text-white text-xl" />
            </div>
          </div>
        </div>
        <div className="py-5 flex flex-col justify-between  h-full">
          <div>
            <ul className="uppercase font-roboto-mono">
              <Link href="/">
                <li className="py-4 text-sm text-lightest-slate tracking-wide hover:text-green duration-300 ease-in">
                  Home
                </li>
              </Link>
              <Link href="#about">
                <li className="py-4 text-sm text-lightest-slate tracking-wide hover:text-green duration-300 ease-in">
                  About
                </li>
              </Link>
            </ul>

            <button className="btn bg-gradient-hover mt-10">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
