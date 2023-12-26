import { notFoundImg } from "@/utils/assets";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
};

const notFound = () => {
  return (
    <main className="md:my-16 my-8 mx-4 flex flex-col justify-center items-center">
      <Image src={notFoundImg} alt="404" className="object-cover mb-10" />
      <h1 className="text-dark md:text-4xl text-2xl font-bold mb-2 text-center">
        Oops! That Page Can’t Be Found.
      </h1>
      <p className="text-dark/70 md:text-lg text-base text-center">
        The Page you are looking for doesn&apos;t exitst or an other error
        occured. Go to <Link href="/">Homepage</Link>
      </p>
    </main>
  );
};

export default notFound;
