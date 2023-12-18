import Accordion from "@/components/accordion/Accordion";
import BottomContact from "@/components/ui/BottomContact";
import Reveal from "@/components/ui/Reveal";
import { BsQuestionLg } from "react-icons/bs";

const page = () => {
  return (
    <main className="dark:bg-dark-4 bg-[#F7F7F7] h-full">
      <div className="pb-16 pt-10 lg:px-20 md:px-12 px-3">
        <div className="pb-16">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="w-9 h-9 bg-gradient rounded-full flex justify-center items-center">
                <BsQuestionLg className="text-white text-xl" />
              </div>
              <h1 className="text-dark dark:text-white md:text-4xl text-2xl font-medium">
                Explore Your Curiosity: Q&A Unveiled – Your Travel Queries
                Answered with Expert Insight.
              </h1>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-gray">
              Welcome to our Q&A Unveiled section, where we unravel the
              mysteries of your travel inquiries with expert insight. Have
              burning questions about destinations, planning tips, or unique
              travel experiences? Our dedicated team is here to provide you with
              in-depth answers, helping you navigate the world of travel with
              confidence. From the latest trends to personalized
              recommendations, we&apos;re committed to enhancing your travel
              knowledge and ensuring your adventures are seamless and
              unforgettable. Dive into the wealth of information curated just
              for you and let your curiosity lead the way.
            </p>
          </Reveal>
        </div>

        <Accordion />
      </div>

      <BottomContact />
    </main>
  );
};

export default page;
