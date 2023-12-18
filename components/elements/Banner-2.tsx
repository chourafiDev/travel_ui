"use client";

import { banner } from "@/utils/assets";
import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";
import ModalVideo from "../ui/ModalVideo";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const Banner2 = () => {
  // handle open modal contact
  let [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        id="banner"
        className="dark:bg-dark-4 bg-[#F7F7F7] lg:px-20 md:px-12 px-3 pb-16 pt-10 h-full relative"
      >
        <Reveal>
          <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-5 justify-between pt-4">
            <h1 className="text-dark dark:text-white font-semibold lg:text-5xl text-3xl lg:leading-[3.5rem] leading-[2.8rem] tracking-wide">
              We create journeys <br /> for the excited <br />
              <span className="text-gradient">traveler.</span>
            </h1>
            <p className="text-gray text-[20px]">
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative w-full h-[400px] mt-20">
            <div
              onClick={handleOpenModal}
              className="absolute z-10 cursor-pointer bg-primary lg:-top-14 md:-top-10 -top-8 right-10 lg:w-24 lg:h-24 md:w-16 md:h-16 w-14 h-14 border-2 dark:border-dark-4 border-white rounded-full flex justify-center items-center"
            >
              <BsPlayFill color="#ffffff" className="md:text-5xl text-3xl" />
            </div>
            <Image
              src={banner}
              alt="banner"
              fill
              className="object-cover rounded-4"
            />
          </div>
        </Reveal>
      </div>

      <ModalVideo isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default Banner2;
