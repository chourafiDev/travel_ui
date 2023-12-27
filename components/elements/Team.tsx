import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { person1, person2, person3, person4 } from "@/utils/assets";
import Reveal from "../ui/Reveal";

const Team = () => {
  return (
    <section className="mb-20 lg:px-20 md:px-12 px-3 pb-16">
      <Reveal>
        <h1 className="dark:text-white text-dark text-center font-semibold text-[1.8rem] tracking-wide leading-[50px] lg:px-72 px-10">
          Team & Founders
        </h1>
      </Reveal>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mt-10">
        <div className="bg-white dark:bg-dark-2 p-2 shadow-xl shadow-gray/10 dark:shadow-black/20 rounded-4 group">
          <div className="w-full h-80 overflow-hidden rounded-4 relative">
            <Image
              src={person1}
              alt="team-1"
              fill
              className="absolute object-cover group-hover:scale-[1.1] duration-300 ease-linear"
            />
          </div>
          <div className="mt-4 space-y-1">
            <h2 className="text-dark dark:text-white font-semibold text-xl text-center">
              Gren Johnson
            </h2>
            <p className="text-gray text-center text-lg">Manager</p>
            <ul className="flex items-center gap-4 justify-center pt-4">
              <li>
                <FaFacebookF className="text-dark dark:text-white text-xl cursor-pointer hover:text-primary duration-200 ease-linear hover:-translate-y-1" />
              </li>
              <li>
                <FaInstagram className="text-dark dark:text-white text-xl cursor-pointer hover:text-primary duration-200 ease-linear hover:-translate-y-1" />
              </li>
              <li>
                <BsTwitter className="text-dark dark:text-white text-xl cursor-pointer hover:text-primary duration-200 ease-linear hover:-translate-y-1" />
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-dark-2 p-2 shadow-xl shadow-gray/10 dark:shadow-black/20 rounded-4 group">
          <div className="w-full h-80 overflow-hidden rounded-4 relative">
            <Image
              src={person2}
              alt="team-2"
              fill
              className="absolute object-cover group-hover:scale-[1.1] duration-300 ease-linear"
            />
          </div>
          <div className="mt-4 space-y-1">
            <h2 className="text-dark dark:text-white font-semibold text-xl text-center">
              David Gartn
            </h2>
            <p className="text-gray text-center text-lg">Marketing Manager</p>
            <ul className="flex items-center gap-4 justify-center pt-4">
              <li>
                <FaFacebookF className="text-dark dark:text-white text-xl cursor-pointer hover:text-primary duration-200 ease-linear hover:-translate-y-1" />
              </li>
              <li>
                <FaInstagram className="text-dark dark:text-white text-xl cursor-pointer hover:text-primary duration-200 ease-linear hover:-translate-y-1" />
              </li>
              <li>
                <BsTwitter className="text-dark dark:text-white text-xl cursor-pointer hover:text-primary duration-200 ease-linear hover:-translate-y-1" />
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-dark-2 p-2 shadow-xl shadow-gray/10 dark:shadow-black/20 rounded-4 group">
          <div className="w-full h-80 overflow-hidden rounded-4 relative">
            <Image
              src={person3}
              alt="team-3"
              fill
              className="absolute object-cover group-hover:scale-[1.1] duration-300 ease-linear"
            />
          </div>
          <div className="mt-4 space-y-1">
            <h2 className="text-dark dark:text-white font-semibold text-xl text-center">
              Marry Deff
            </h2>
            <p className="text-gray text-center text-lg">CFO</p>
            <ul className="flex items-center gap-4 justify-center pt-4">
              <li>
                <FaFacebookF className="text-dark dark:text-white text-xl cursor-pointer hover:text-primary duration-200 ease-linear hover:-translate-y-1" />
              </li>
              <li>
                <FaInstagram className="text-dark dark:text-white text-xl cursor-pointer hover:text-primary duration-200 ease-linear hover:-translate-y-1" />
              </li>
              <li>
                <BsTwitter className="text-dark dark:text-white text-xl cursor-pointer hover:text-primary duration-200 ease-linear hover:-translate-y-1" />
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-dark-2 p-2 shadow-xl shadow-gray/10 dark:shadow-black/20 rounded-4 group">
          <div className="w-full h-80 overflow-hidden rounded-4 relative">
            <Image
              src={person4}
              alt="team-4"
              fill
              className="absolute object-cover group-hover:scale-[1.1] duration-300 ease-linear"
            />
          </div>
          <div className="mt-4 space-y-1">
            <h2 className="text-dark dark:text-white font-semibold text-xl text-center">
              Jane Smith
            </h2>
            <p className="text-gray text-center text-lg">CEO & Founder</p>
            <ul className="flex items-center gap-4 justify-center pt-4">
              <li>
                <FaFacebookF className="text-dark dark:text-white text-xl cursor-pointer hover:text-primary duration-200 ease-linear hover:-translate-y-1" />
              </li>
              <li>
                <FaInstagram className="text-dark dark:text-white text-xl cursor-pointer hover:text-primary duration-200 ease-linear hover:-translate-y-1" />
              </li>
              <li>
                <BsTwitter className="text-dark dark:text-white text-xl cursor-pointer hover:text-primary duration-200 ease-linear hover:-translate-y-1" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
