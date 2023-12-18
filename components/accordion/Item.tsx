import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";

interface ItemProps {
  question: string;
  answer: string;
  id: number;
  show: boolean;
  onShow: (id: number) => void;
}

const Item: FC<ItemProps> = ({ question, answer, id, show, onShow }) => {
  return (
    <div>
      {/* question section */}
      <div
        onClick={() => onShow(id)}
        className="flex justify-between items-center cursor-pointer border-b border-gray/70 py-4"
      >
        <h1 className="text-xl font-medium dark:text-white text-dark">
          {question}
        </h1>
        <BiChevronDown
          className={`text-3xl transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        ></BiChevronDown>
      </div>
      {/* answer section */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            <p className="pt-3 text-gray text-sm md:text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Item;
