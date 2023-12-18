import { Dialog, Transition } from "@headlessui/react";
import React, { FC, Fragment } from "react";
import { FaPhone } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { contact } from "@/utils/assets";
import Image from "next/image";

interface ContactUsProps {
  handleCloseModal: () => void;
  isOpen: boolean;
}

const ContactUs: FC<ContactUsProps> = ({ handleCloseModal, isOpen }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={handleCloseModal} className="">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <Dialog.Panel className="relative w-full lg:max-w-[60%] max-w-[100%] bg-white dark:bg-dark-3 dark:border dark:border-gray/10 p-2 md:p-6">
              <div className="flex gap-10">
                <div className="space-y-4">
                  <div className="space-y-1 mb-8">
                    <h3 className="text-dark dark:text-white font-medium text-[19px] md:text-[22px]">
                      Let&apos;s contact us 👋
                    </h3>
                    <p className="text-dark/60 dark:text-white/60 text-[15px] font-medium">
                      Fill out the form and we will contact you <br /> as soon
                      as possible.
                    </p>
                  </div>

                  <div className="w-full">
                    <p className="mb-1 text-dark dark:text-white font-medium">
                      Full Name
                    </p>
                    <input
                      type="text"
                      className="px-4 py-2 bg-white dark:bg-dark-2 border border-gray/60 dark:border-dark-2/80 text-dark/70 dark:text-white/70 outline-none w-full focus:border-primary"
                    />
                  </div>
                  <div className="w-full">
                    <p className="mb-1 text-dark dark:text-white font-medium">
                      E-mail
                    </p>
                    <input
                      type="text"
                      className="px-4 py-2 bg-white dark:bg-dark-2 border border-gray/60 dark:border-dark-2/80 text-dark/70 dark:text-white/70 outline-none w-full focus:border-primary"
                    />
                  </div>
                  <div className="w-full">
                    <p className="mb-1 text-dark dark:text-white font-medium">
                      Message
                    </p>
                    <textarea className="px-4 py-2 bg-white dark:bg-dark-2 border text-dark/70 dark:text-white/70 border-gray/60 dark:border-dark-2/80 outline-none w-full focus:border-primary"></textarea>
                  </div>

                  <button className="btn bg-gradient bg-gradient-hover flex items-center gap-4">
                    Confirm
                  </button>
                </div>

                <div className="relative md:block hidden flex-1">
                  <Image
                    src={contact}
                    alt="contact"
                    fill
                    className="object-cover absolute rounded-tl-[100px]"
                  />
                  <div className="before:rounded-tl-[100px] before:absolute before:bg-dark/40 before:backdrop-blur-sm top-0 before:left-0 before:w-full before:h-full"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-white/80 font-normal text-[16px]">
                      Contact us for all your questions.
                    </p>
                    <div className=" mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-white">
                        <FaPhone /> 012345678
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <BsFillEnvelopeFill /> chourafidev@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                onClick={handleCloseModal}
                className="flex items-center justify-center w-7 h-7 bg-gradient absolute top-2 right-2 md:top-7 md:right-7 cursor-pointer"
              >
                <IoMdClose className="text-white" />
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ContactUs;
