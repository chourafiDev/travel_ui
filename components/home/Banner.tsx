"use client";

import { banner, star } from "@/utils/assets";
import Image from "next/image";
import React, { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { BsArrowRight } from "react-icons/bs";
import ContactUs from "@/components/ui/ContactUs";
import Link from "next/link";

const Banner = () => {
  // handle open modal contact
  let [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      id="banner"
      className="dark:bg-dark-4 bg-[#F7F7F7] lg:px-20 md:px-12 px-3 pb-16 pt-10 h-full relative"
    >
      <div className="dark:bg-ellipse"></div>
      <div className="bg-hero-line"></div>
      <Reveal>
        <div className="mb-5 flex justify-center">
          <div className="flex items-center gap-4 bg-gray/10 border border-gray/10 rounded-full p-1">
            <div className="flex justify-center items-center relative w-7 h-7 rounded-full bg-gradient shadow-md shadow-dark/20">
              <Image src={star} fill alt="star" className="p-[6px]" />
            </div>

            <p className="text-dark/80 dark:text-white/80 font-medium pr-8">
              100% guaranteed
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h1 className="text-center dark:text-white text-dark font-bold md:text-6xl text-4xl lg:px-36 md:px-10 tracking-wide md:leading-[65px] leading-[50px]">
          Discover amazing places at exclusive deals.
        </h1>
      </Reveal>

      <Reveal>
        <p className="text-center text-gray lg:px-48 md:px-10 mt-10">
          Embark on a journey of discovery and exploration with our exclusive
          deals, unlocking access to truly amazing places. Whether you&apos;re
          seeking serene landscapes, vibrant cityscapes, or hidden gems off the
          beaten path, our curated selection of travel offers ensures that you
          experience the extraordinary without compromising on value.
        </p>
      </Reveal>

      <Reveal>
        <div className="flex flex-col md:flex-row justify-center gap-3 w-full mt-10">
          <Link
            href="#services"
            className="btn bg-gradient bg-gradient-hover flex items-center justify-center gap-4"
          >
            Popular Tours
            <BsArrowRight />
          </Link>
          <button className="btn btn-outline" onClick={handleOpenModal}>
            Contact us
          </button>
        </div>
      </Reveal>

      <Reveal>
        <>
          <div className="relative w-full 2xl:h-[800px] md:h-[600px] h-[400px] mt-20 rounded-4 overflow-hidden">
            <Image
              src={banner}
              fill
              alt="banner"
              className="object-cover"
              quality={100}
            />
          </div>

          <div className="bg-gradient dark:bg-dark-2 rounded-4 flex lg:flex-row gap-6 flex-col justify-between lg:items-center items-start md:-translate-y-14 -translate-y-20 shadow-2xl shadow-gray/20 dark:shadow-black/10 lg:px-20 md:px-12 px-3 py-12 lg:mx-20 md:mx-6 mx-3 md:mt-0 mt-6">
            <div className="flex items-center gap-4">
              <h2 className="text-white md:text-5xl text-3xl font-semibold">
                45K+
              </h2>
              <p className="text-white/80">
                Happy <br /> customer
              </p>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-white md:text-5xl text-3xl font-semibold">
                290+
              </h2>
              <p className="text-white/80">
                Destination <br /> collaborations
              </p>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-white md:text-5xl text-3xl font-semibold">
                20+
              </h2>
              <p className="text-white/80">
                Years <br /> experience
              </p>
            </div>
          </div>
        </>
      </Reveal>

      <ContactUs isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default Banner;
