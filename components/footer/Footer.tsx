"use client";

import { img1, img2, img3, img4, img5, lightLogo } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import CallUs from "@/components/ui/CallUs";

const Footer = () => {
  // handle open modal call
  let [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <footer className="dark:bg-dark-4 bg-[#040836] dark:border-t dark:border-gray/10 pt-16 relative bg-footer-dots bg-no-repeat">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6 lg:px-20 md:px-12 px-3">
        <div className="lg:col-span-2 col-span-1">
          <Image src={lightLogo} alt="logo" width={180} height={100} />
          <p className="text-white/50 md:pr-40 pr-10 mt-8">
            Tailored adventures, unforgettable moments—your unique journey
            awaits.
          </p>
          <ul className="flex items-center gap-5 mt-6">
            <li>
              <Link href="/">
                <div className="bg-gradient w-10 h-10 rounded-full flex justify-center items-center p-2 hover:-translate-y-2 duration-300 ease-linear">
                  <BiLogoFacebook className="text-white text-2xl" />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="bg-gradient w-10 h-10 rounded-full flex justify-center items-center p-2 hover:-translate-y-2 duration-300 ease-linear">
                  <BiLogoInstagramAlt className="text-white text-2xl" />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="bg-gradient w-10 h-10 rounded-full flex justify-center items-center p-2 hover:-translate-y-2 duration-300 ease-linear">
                  <BiLogoLinkedin className="text-white text-2xl" />
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white mb-8 font-medium text-[20px] relative before:absolute before:bg-primary before:-bottom-2 before:left-0 before:h-[2px] before:w-10">
            Enterprise
          </h5>
          <ul className="space-y-3">
            <li className="text-white/50">
              <Link href="/about" className="link ">
                About
              </Link>
            </li>
            <li className="text-white/50">
              <Link href="/career" className="link">
                Career
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white mb-8 font-medium text-[20px] relative before:absolute before:bg-primary before:-bottom-2 before:left-0 before:h-[2px] before:w-10">
            Services
          </h5>
          <ul className="space-y-3">
            <li className="text-white/50">
              <Link href="/western-europe" className="link">
                Western Europe
              </Link>
            </li>
            <li className="text-white/50">
              <Link href="/asia" className="link">
                Asia
              </Link>
            </li>
            <li className="text-white/50">
              <Link href="/america" className="link">
                America
              </Link>
            </li>
            <li className="text-white/50">
              <Link href="/morocco" className="link">
                Morocco
              </Link>
            </li>
            <li className="text-white/50">
              <Link href="/south-africa" className="link">
                South Africa
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white mb-8 font-medium text-[20px] relative before:absolute before:bg-primary before:-bottom-2 before:left-0 before:h-[2px] before:w-10">
            Support
          </h5>
          <ul className="space-y-3">
            <li className="text-white/50">
              <Link href="/faq" className="link">
                Q&A
              </Link>
            </li>
            <li className="text-white/50">
              <Link href="/privacy-policy" className="link">
                Privacy Policy
              </Link>
            </li>
            <li className="text-white/50 pt-4">
              <button
                onClick={handleOpenModal}
                className="btn bg-gradient bg-gradient-hover"
              >
                Hotline
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:px-20 md:px-12 px-3 mt-10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-2">
        <div className="w-full h-48 relative rounded-md overflow-hidden group">
          <Image
            src={img1}
            alt="img1"
            fill
            className="absolute group-hover:scale-[1.3] duration-300 ease-linear"
          />
        </div>
        <div className="w-full h-48 relative rounded-md overflow-hidden group">
          <Image
            src={img2}
            alt="img1"
            fill
            className="absolute group-hover:scale-[1.3] duration-300 ease-linear"
          />
        </div>
        <div className="w-full h-48 relative rounded-md overflow-hidden group">
          <Image
            src={img3}
            alt="img1"
            fill
            className="absolute group-hover:scale-[1.3] duration-300 ease-linear"
          />
        </div>
        <div className="w-full h-48 relative rounded-md overflow-hidden group">
          <Image
            src={img4}
            alt="img1"
            fill
            className="absolute group-hover:scale-[1.3] duration-300 ease-linear"
          />
        </div>
        <div className="w-full h-48 relative rounded-md overflow-hidden group">
          <Image
            src={img5}
            alt="img1"
            fill
            className="absolute group-hover:scale-[1.3] duration-300 ease-linear"
          />
        </div>
      </div>

      <div className="py-6 mt-6 border-t border-gray/10 lg:px-20 md:px-12 px-3">
        <p className="text-white text-center">
          &copy; Copyright {new Date().getFullYear()} - Elite Travel
        </p>
      </div>

      <CallUs isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </footer>
  );
};

export default Footer;
