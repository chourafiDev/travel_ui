"use client";

import { BsArrowUpRight } from "react-icons/bs";
import ContactUs from "@/components/ui/ContactUs";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const BottomContact = () => {
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
      <section className="bg-[#040836] dark:bg-dark-4 lg:px-20 md:px-12 px-3 py-16 relative">
        <Reveal>
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-medium text-white lg:leading-[4rem] md:leading-[3rem] leading-[2.5rem] tracking-wide">
            Contact us for personalized travel experiences and unforgettable
            adventures.
          </h1>
        </Reveal>
        <div
          onClick={handleOpenModal}
          className="absolute cursor-pointer right-28 md:bottom-10 bottom-5 lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14 rounded-full flex justify-center items-center bg-white"
        >
          <BsArrowUpRight className="text-gradient text-3xl text-primary" />
        </div>
      </section>

      <ContactUs isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default BottomContact;
