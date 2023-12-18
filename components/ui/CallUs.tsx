import { Dialog, Transition } from "@headlessui/react";
import React, { FC, Fragment } from "react";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { lightLogo, darkLogo } from "@/utils/assets";
import Image from "next/image";
import { useTheme } from "next-themes";

interface CallUsProps {
  handleCloseModal: () => void;
  isOpen: boolean;
}

const CallUs: FC<CallUsProps> = ({ handleCloseModal, isOpen }) => {
  const { theme } = useTheme();

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
            <Dialog.Panel className="relative w-full lg:max-w-[50%] max-w-[100%] bg-white dark:bg-dark-3 dark:border dark:border-gray/10 p-2 md:p-6">
              <Image
                src={theme === "dark" ? lightLogo : darkLogo}
                width={120}
                alt="logo"
              />
              <h3 className="mt-8 mb-3 text-dark dark:text-white font-medium text-2xl">
                Nous sommes là pour vous aider
              </h3>
              <p className="text-dark/70 dark:text-white/80">
                Notre équipe dévouée est à votre disposition pour répondre à vos
                questions, résoudre vos problèmes et vous guider vers des
                solutions. Votre bien-être est notre priorité, et nous sommes
                fiers de vous accompagner avec expertise et compassion.
                N&apos;hésitez pas à nous contacter à tout moment.
              </p>
              <div className="border-t border-gray/30 flex flex-wrap items-center md:gap-10 gap-3 mt-6 pt-4">
                <div className="flex items-center gap-2">
                  <BsEnvelope
                    className="text-dark/80 dark:text-white/80"
                    size={18}
                  />
                  <p className="text-primary font-medium">
                    support@experalya.com
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <BsTelephone
                    className="text-dark/80 dark:text-white/80"
                    size={17}
                  />
                  <p className="text-primary font-medium">+1 (234) 1234567</p>
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

export default CallUs;
