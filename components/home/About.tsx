"use client";

import Image from "next/image";
import {
  america,
  asia,
  europe,
  lightLogo,
  morocco,
  southAfrica,
} from "@/utils/assets";
import { BsPlayFill } from "react-icons/bs";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "@/components/ui/ModalVideo";

const About = () => {
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
      <section className="dark:bg-[#171717] bg-[#F7F7F7] lg:px-20 md:px-12 px-3 py-16">
        <div id="propos">
          <Reveal>
            <div className="grid md:grid-cols-2 grid-cols-1  md:gap-0 gap-4 mb-24">
              <div className="space-y-2">
                <h1 className="lg:text-4xl text-3xl dark:text-white text-black font-semibold leading-tight">
                  Find Next
                </h1>
                <h1 className="lg:text-4xl text-3xl dark:text-white text-black font-semibold leading-tight">
                  Place To Visit
                </h1>
              </div>
              <div>
                <p className="text-[20px] text-gray">
                  Discover amzaing places at exclusive deals. Eat, Shop, Visit
                  interesting places around the world.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-video mb-24">
              <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] mx-auto flex justify-center items-center">
                <div>
                  <button
                    onClick={handleOpenModal}
                    className="bg-dark/70 w-16 h-16 rounded-full flex justify-center items-center mb-5 mx-auto"
                  >
                    <BsPlayFill color="#ffffff" size={28} />
                  </button>
                  <Image src={lightLogo} alt="logo" width={220} />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-4 my-10">
              <div className="space-y-2">
                <h1 className="lg:text-4xl text-3xl dark:text-white text-black font-semibold">
                  Travel Destinations
                </h1>
                <h1 className="lg:text-4xl text-3xl dark:text-white text-black font-semibold">
                  Available Worldwide
                </h1>
              </div>
              <div>
                <p className="text-[20px] text-gray">
                  We have compiled a list of top destinations across the globe,
                  scoured the world for the most alluring and fascinating places
                  to visit, From the beautiful beaches of the Caribbean to the
                  majestic mountains of Europe and the vibrant cities of Asia.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div id="services">
          <Reveal>
            <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-20">
              <Link
                href="/western-europe"
                className="relative w-full h-full rounded-4 overflow-hidden shadow-lg shadow-dark/10"
              >
                <div className="before:absolute before:bg-primary/40 top-0 before:left-0 before:w-full before:h-full"></div>
                <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] flex flex-col justify-center items-center">
                  <p className="text-white rounded-4 text-xl border border-white/40 bg-primary/60 backdrop-blur-md px-8 py-2 font-semibold">
                    Western Europe
                  </p>
                </div>
                <Image
                  src={europe}
                  alt="about"
                  width={900}
                  height={100}
                  style={{ height: "300px" }}
                  className="object-cover"
                />
              </Link>

              <Link
                href="/asia"
                className="relative w-full h-full rounded-4 overflow-hidden shadow-lg shadow-dark/10"
              >
                <div className="before:absolute before:bg-primary/40 top-0 before:left-0 before:w-full before:h-full"></div>
                <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] flex flex-col justify-center items-center">
                  <p className="text-white rounded-4 text-xl bg-primary/60 border border-white/40 backdrop-blur-md px-8 py-2 font-semibold">
                    Asia
                  </p>
                </div>
                <Image
                  src={asia}
                  alt="about"
                  width={900}
                  height={100}
                  style={{ height: "300px" }}
                  className="object-cover"
                />
              </Link>

              <Link
                href="/america"
                className="relative w-full h-full rounded-4 overflow-hidden shadow-lg shadow-dark/10"
              >
                <div className="before:absolute before:bg-primary/40 top-0 before:left-0 before:w-full before:h-full"></div>
                <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] flex flex-col justify-center items-center">
                  <p className="text-white rounded-4 text-xl bg-primary/60 border border-white/40 backdrop-blur-md px-8 py-2 font-semibold">
                    America
                  </p>
                </div>
                <Image
                  src={america}
                  alt="about"
                  width={900}
                  height={100}
                  style={{ height: "300px" }}
                  className="object-cover"
                />
              </Link>

              <Link
                href="/morocco"
                className="lg:col-span-2 relative w-full h-full rounded-4 overflow-hidden shadow-lg shadow-dark/10"
              >
                <div className="before:absolute before:bg-primary/40 top-0 before:left-0 before:w-full before:h-full"></div>
                <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] flex flex-col justify-center items-center">
                  <p className="text-white rounded-4 text-xl bg-primary/60 border border-white/40 backdrop-blur-md px-8 py-2 font-semibold">
                    Morocco
                  </p>
                </div>
                <Image
                  src={morocco}
                  alt="about"
                  width={900}
                  height={100}
                  style={{ height: "300px" }}
                  className="object-cover"
                />
              </Link>

              <Link
                href="/south-africa"
                className="relative w-full h-full rounded-4 overflow-hidden shadow-lg shadow-dark/10"
              >
                <div className="before:absolute before:bg-primary/40 top-0 before:left-0 before:w-full before:h-full"></div>
                <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] flex flex-col justify-center items-center">
                  <p className="text-white text-xl rounded-4 bg-primary/60 border border-white/40 backdrop-blur-md px-8 py-2 font-semibold">
                    South Africa
                  </p>
                </div>
                <Image
                  src={southAfrica}
                  alt="about"
                  width={900}
                  height={100}
                  style={{ height: "300px" }}
                  className="object-cover"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ModalVideo isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default About;
