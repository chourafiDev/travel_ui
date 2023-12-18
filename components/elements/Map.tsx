import Reveal from "@/components/ui/Reveal";

const Map = () => {
  return (
    <section className="dark:bg-[#171717] bg-[#F7F7F7] pt-20">
      <div className="bg-[#1F1F1F] dark:bg-dark-3/50 flex flex-col justify-between md:h-[600px] h-[800px] py-16 lg:px-20 md:px-12 px-3 relative bg-map">
        <Reveal>
          <div className="z-20">
            <p className="text-gray text-xl">Who we are??</p>
            <h1 className="text-white font-medium lg:text-6xl md:text-4xl text-3xl my-8 lg:leading-[4.4rem] md:leading-[3.2rem] leading-[3rem]">
              We make it easier for everyone
              <br /> to experience the world
            </h1>
            <p className="text-white/70 text-[18px] font-light">
              Take your longest vacation yet!
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex items-center md:justify-end gap-10 z-20 flex-wrap">
            <div>
              <h5 className="text-white lg:text-5xl md:text-4xl text-2xl mb-5">
                45K+
              </h5>
              <p className="text-white/60 font-light text-xl">Happy customer</p>
            </div>
            <div>
              <h5 className="text-white lg:text-5xl md:text-4xl text-2xl mb-5">
                290+
              </h5>
              <p className="text-white/60 font-light text-xl">
                Destination collaboration
              </p>
            </div>
            <div>
              <h5 className="text-white lg:text-5xl md:text-4xl text-2xl mb-5">
                20+
              </h5>
              <p className="text-white/60 font-light text-xl">
                Years experience
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Map;
