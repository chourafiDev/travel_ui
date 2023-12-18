"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import { LuBaggageClaim } from "react-icons/lu";
import { TbCreditCard } from "react-icons/tb";
import { LuBookMarked } from "react-icons/lu";
import { HiOutlineTrophy } from "react-icons/hi2";

import "swiper/css";
import Link from "next/link";

const Services = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const taretId = href.replace(/.*\#/, "");
    const elem = document.getElementById(taretId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <section className="dark:bg-[#171717] bg-[#F7F7F7] lg:px-20 md:px-12 px-3 pb-16">
      <Reveal>
        <h1 className="dark:text-white text-dark text-center font-semibold text-[1.8rem] tracking-wide leading-[50px] lg:px-72 px-10">
          Our Services
        </h1>
      </Reveal>

      <Reveal>
        <div className="flex lg:flex-row flex-col gap-10 mt-16">
          <div className="my-auto flex-1">
            <h4 className="text-dark dark:text-white md:text-4xl text-2xl font-medium tracking-wide md:leading-[2.9rem] leading-[2.2rem]">
              Tailored journeys for the excited traveler: adventure, culture,
              unforgettable moments.
            </h4>
          </div>
          <div className="flex-1 space-y-2 my-auto">
            <p className="text-gray mb-6">
              Crafting personalized journeys that blend adventure and culture,
              our agency invites the excited traveler to explore unforgettable
              moments. Join us in curating experiences that resonate with your
              unique interests and passions.
            </p>
            <Link
              href="/about#services"
              onClick={handleScroll}
              className="btn bg-gradient bg-gradient-hover"
            >
              Discover
            </Link>
          </div>
        </div>
      </Reveal>

      <div id="services">
        <Reveal>
          <div className="flex gap-3 items-center pt-24 justify-end">
            <div
              ref={prevRef}
              className="w-9 h-9 flex cursor-pointer bg-gradient justify-center items-center rounded-full text-white"
            >
              <FiChevronLeft size={20} />
            </div>
            <div
              ref={nextRef}
              className="w-9 h-9 flex cursor-pointer bg-gradient justify-center items-center rounded-full text-white"
            >
              <FiChevronRight size={20} />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Swiper
            spaceBetween={8}
            slidesPerView={3}
            loop
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
              },
            }}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.update();
            }}
            className="w-full"
            style={{ padding: "20px 0px 30px 0px" }}
          >
            <SwiperSlide>
              <div className="dark:bg-dark-2 p-6 rounded-4 flex flex-col justify-between bg-white">
                <div className="flex justify-center items-center w-14 h-14 rounded-full bg-gradient">
                  <TbCreditCard className="text-white text-2xl" />
                </div>
                <p className="font-semibold text-dark dark:text-white text-lg mt-3">
                  Ultimate flexibility
                </p>
                <p className="text-gray mt-3">
                  You’re in control, with free cancellation and payment options
                  to satisfy any plan or budget.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dark:bg-dark-2 p-6 rounded-4 flex flex-col justify-between bg-white">
                <div className="flex justify-center items-center w-14 h-14 rounded-full bg-gradient">
                  <LuBaggageClaim className="text-white text-2xl" />
                </div>
                <p className="font-semibold text-dark dark:text-white text-lg mt-3">
                  Memorable experiences
                </p>
                <p className="text-gray mt-3">
                  Browse and book tours and activities so incredible, you’ll
                  want to tell your friends.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dark:bg-dark-2 p-6 rounded-4 flex flex-col justify-between bg-white">
                <div className="flex justify-center items-center w-14 h-14 rounded-full bg-gradient">
                  <LuBookMarked className="text-white text-2xl" />
                </div>
                <p className="font-semibold text-dark dark:text-white text-lg mt-3">
                  Quality at our core
                </p>
                <p className="text-gray mt-3">
                  High quality standards. Millions of reviews. A Tripadvisor
                  company.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dark:bg-dark-2 p-6 rounded-4 flex flex-col justify-between bg-white">
                <div className="flex justify-center items-center w-14 h-14 rounded-full bg-gradient">
                  <HiOutlineTrophy className="text-white text-2xl" />
                </div>
                <p className="font-semibold text-dark dark:text-white text-lg mt-3">
                  Award winning support
                </p>
                <p className="text-gray mt-3">
                  New price? New plan? No problem. We’re here to help, 24/7.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
