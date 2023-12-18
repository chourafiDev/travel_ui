import { Dialog, Transition } from "@headlessui/react";
import React, { FC, Fragment } from "react";
import { FaPhone } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { contact } from "@/utils/assets";
import Image from "next/image";

interface ModalVideoProps {
  handleCloseModal: () => void;
  isOpen: boolean;
}

const ModalVideo: FC<ModalVideoProps> = ({ handleCloseModal, isOpen }) => {
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
            <Dialog.Panel className="w-full max-w-[1050px] max-h-[600px] bg-white rounded-4 dark:bg-dark-3 dark:border dark:border-gray/10 p-1 flex justify-center items-center">
              <video
                src="https://res.cloudinary.com/abdelmonaime/video/upload/v1702551172/sea_-_6399_540p_tt5916.mp4"
                //   type="video/mp4"
                className="secteur-img"
                playsInline
                autoPlay
                loop
                muted
                controls
              ></video>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ModalVideo;
