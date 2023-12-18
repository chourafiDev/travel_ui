import { HiMenu } from "react-icons/hi";
import { FC } from "react";

interface NavlangProps {
  handelNav: () => void;
  handleOpenModal: () => void;
}

const NavLeftSide: FC<NavlangProps> = ({ handelNav, handleOpenModal }) => {
  return (
    <div className="flex items-center md:gap-8 gap-6">
      <button
        className="btn bg-gradient bg-gradient-hover md:flex hidden items-center gap-4"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
        onClick={handleOpenModal}
      >
        Contact us
      </button>
      <div
        onClick={handelNav}
        className="md:hidden cursor-pointer bg-white w-10 h-9 rounded-md shadow-xl shadow-gray/10 flex justify-center items-center"
      >
        <HiMenu className="text-primary text-2xl" />
      </div>
    </div>
  );
};

export default NavLeftSide;
