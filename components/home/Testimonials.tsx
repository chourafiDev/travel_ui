"use client";

import { person1, person2, person3, testimonail } from "@/utils/assets";
import Image from "next/image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Reveal from "@/components/ui/Reveal";
import ContactUs from "@/components/ui/ContactUs";

const Testimonials = () => {
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
      <div className="bg-gradient dark:bg-dark-2 lg:px-20 md:px-12 px-3 pt-16 pb-80 relative">
        <div className="bg-shape"></div>
        <div className="mb-8">
          <Reveal>
            <div className="space-y-2">
              <h1 className="md:text-4xl text-3xl lg:text-start text-center text-dark font-semibold leading-tight">
                What our customers
              </h1>
              <h1 className="md:text-4xl text-3xl lg:text-start text-center text-dark font-semibold leading-tight">
                are saying about us
              </h1>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex w-full items-center gap-12 mt-8">
            <div className="lg:w-1/3 w-full lg:block hidden">
              <Image
                src={testimonail}
                width={400}
                height={200}
                alt="testimoniale"
                className="rounded-4"
              />
            </div>
            <div className="lg:w-2/3 w-full">
              <div className="flex justify-end items-center gap-2">
                <button className="prev w-10 h-10 flex justify-center items-center rounded-full border border-white/20 text-white bg-white/10 backdrop-blur-lg">
                  <BsArrowLeft />
                </button>
                <button className="next w-10 h-10 flex justify-center items-center rounded-full border border-white/20 text-white bg-white/10 backdrop-blur-lg">
                  <BsArrowRight />
                </button>
              </div>
              <Swiper
                spaceBetween={8}
                slidesPerView={1}
                loop
                modules={[Navigation, Pagination]}
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                pagination={{ clickable: true }}
                style={{ padding: "30px 0px" }}
              >
                <SwiperSlide className="bg-white px-4 py-3 rounded-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={person1}
                        className="rounded-full"
                        alt="person"
                        width={65}
                        height={65}
                      />
                      <div>
                        <h3 className="text-dark font-bold">David Doe</h3>
                        <p className="text-dark/60">Traveler</p>
                        <ul className="flex items-center">
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-white/20 flex justify-center items-center">
                      <BiSolidQuoteAltLeft color="#ffffff" size={22} />
                    </div>
                  </div>

                  <p className="text-dark/70 text-[18px] font-light mt-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </SwiperSlide>

                <SwiperSlide className="bg-white px-4 py-3 rounded-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={person2}
                        className="rounded-full"
                        alt="person"
                        width={65}
                        height={65}
                      />
                      <div>
                        <h3 className="text-dark font-bold">Jhon Bosh</h3>
                        <p className="text-dark/60">Traveler</p>
                        <ul className="flex items-center">
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-white/20 flex justify-center items-center">
                      <BiSolidQuoteAltLeft color="#ffffff" size={22} />
                    </div>
                  </div>

                  <p className="text-dark/70 text-[18px] font-light mt-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </SwiperSlide>

                <SwiperSlide className="bg-white px-4 py-3 rounded-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={person3}
                        className="rounded-full"
                        alt="person"
                        width={65}
                        height={65}
                      />
                      <div>
                        <h3 className="text-dark font-bold">Katrin Bir</h3>
                        <p className="text-dark/60">Traveler</p>
                        <ul className="flex items-center">
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                          <li>
                            <TiStarFullOutline className="text-yellow-400 text-[20px]" />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-white/20 flex justify-center items-center">
                      <BiSolidQuoteAltLeft color="#ffffff" size={22} />
                    </div>
                  </div>

                  <p className="text-dark/70 text-[18px] font-light mt-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="lg:mx-20 md:mx-12 mx-3 rounded-4 py-16 bg-white dark:bg-dark-3 -translate-y-56 shadow-2xl shadow-gray/20 dark:shadow-black/10">
        <div className="lg:px-20 md:px-12 px-3 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <h1 className="md:text-4xl text-2xl text-black dark:text-white font-medium leading-tight">
              Get the best travel
              <br /> Experience with travello.
            </h1>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-[18px] text-dark dark:text-white/60">
                All our know-how at your service.
              </p>
            </Reveal>
            <Reveal>
              <button
                className="btn bg-gradient bg-gradient-hover mt-4"
                onClick={handleOpenModal}
              >
                Contactez nous
              </button>
            </Reveal>
          </div>
        </div>

        <div className="lg:px-20 md:px-12 px-3 grid grid-cols-1 lg:grid-cols-3 gap-3 mt-14">
          <Reveal>
            <div className="flex items-start gap-4 rounded-4 p-5 bg-secondary/10 dark:bg-dark-2 h-[200px]">
              <p className="text-dark dark:text-white font-semibold text-lg relative before:absolute before:bg-primary before:bottom-0 before:right-0 before:h-[3px] before:w-4">
                01
              </p>
              <div className="">
                <p className="text-dark dark:text-white font-medium text-lg md:mr-20 mr-2">
                  Tour guide
                </p>
                <p className="text-[16px] text-gray mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex items-start gap-4 p-5 rounded-4 bg-secondary/10 dark:bg-dark-2 h-[200px]">
              <p className="text-dark dark:text-white font-semibold text-lg relative before:absolute before:bg-primary before:bottom-0 before:right-0 before:h-[3px] before:w-4">
                02
              </p>
              <div className="">
                <p className="text-dark dark:text-white font-medium text-lg md:mr-20 mr-2">
                  Friendly price
                </p>
                <p className="text-[16px] text-gray mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex items-start gap-4 p-5 rounded-4 bg-secondary/10 dark:bg-dark-2 h-[200px]">
              <p className="text-dark dark:text-white font-semibold text-lg relative before:absolute before:bg-primary before:bottom-0 before:right-0 before:h-[3px] before:w-4">
                03
              </p>
              <div className="">
                <p className="text-dark dark:text-white font-medium text-lg md:mr-20 mr-2">
                  Instant booking
                </p>
                <p className="text-[16px] text-gray mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <ContactUs isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default Testimonials;
