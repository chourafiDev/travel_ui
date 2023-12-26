import { america, asia, europe, morocco, southAfrica } from "@/utils/assets";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Asia",
};

const page = () => {
  return (
    <div className="dark:bg-[#171717] bg-[#F7F7F7] lg:px-20 md:px-12 px-3 py-16">
      <div className="w-full h-80 relative">
        <Image src={asia} alt="paie" fill className="object-cover rounded-4" />

        <div className="absolute -bottom-10 left-10 bg-gradient rounded-4 lg:px-24 px-16 lg:py-6 py-4 shadow-xl shadow-gray/5 dark:shadow-black/10">
          <p className="text-white font-semibold lg:text-5xl md:text-3xl text-2xl">
            Asia
          </p>
        </div>
      </div>

      <div className="mt-28 dark:bg-dark-2 bg-white rounded-4 p-6">
        <p className="text-dark dark:text-white text-lg tracking-wide leading-loose mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="text-dark dark:text-white text-lg tracking-wide leading-loose">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <h2 className="text-dark dark:text-white mt-20 mb-8 font-semibold text-3xl">
        Autres services
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <Link
          href="/america"
          className="bg-white rounded-4 dark:bg-dark-2 p-3 shadow-xl shadow-gray/10 dark:shadow-black/20"
        >
          <div className="w-full h-[200px] relative">
            <Image
              src={america}
              fill
              className="object-fill rounded-4"
              alt="about"
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-dark dark:text-white font-medium text-lg">
              America
            </p>
            <div className="bg-gradient w-7 h-7 rounded-full flex justify-center items-center">
              <BiRightArrowAlt className="text-white" />
            </div>
          </div>
        </Link>
        <Link
          href="/morocco"
          className="bg-white rounded-4 dark:bg-dark-2 p-3 shadow-xl shadow-gray/10 dark:shadow-black/20"
        >
          <div className="w-full h-[200px] relative">
            <Image
              src={morocco}
              fill
              className="object-fill rounded-4"
              alt="about"
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-dark dark:text-white font-medium text-lg">
              Morocco
            </p>
            <div className="bg-gradient w-7 h-7 rounded-full flex justify-center items-center">
              <BiRightArrowAlt className="text-white" />
            </div>
          </div>
        </Link>
        <Link
          href="/south-africa"
          className="bg-white rounded-4 dark:bg-dark-2 p-3 shadow-xl shadow-gray/10 dark:shadow-black/20"
        >
          <div className="w-full h-[200px] relative">
            <Image
              src={southAfrica}
              fill
              className="object-fill rounded-4"
              alt="about"
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-dark dark:text-white font-medium text-lg">
              South Africa
            </p>
            <div className="bg-gradient w-7 h-7 rounded-full flex justify-center items-center">
              <BiRightArrowAlt className="text-white" />
            </div>
          </div>
        </Link>
        <Link
          href="/western-europe"
          className="bg-white rounded-4 dark:bg-dark-2 p-3 shadow-xl shadow-gray/10 dark:shadow-black/20"
        >
          <div className="w-full h-[200px] relative">
            <Image
              src={europe}
              fill
              className="object-fill rounded-4"
              alt="about"
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-dark dark:text-white font-medium text-lg">
              Western Europe
            </p>
            <div className="bg-gradient w-7 h-7 rounded-full flex justify-center items-center">
              <BiRightArrowAlt className="text-white" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
