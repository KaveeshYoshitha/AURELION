import PrecisionWatch from "/images/precisionWatch.webp";
import SapphireWatch from "/images/sapphireWatch.webp";
import SwissWatch from "/images/swissWatch.webp";

const Showcase = () => {
  return (
    <>
      <section className=" h-screen w-full flex items-center justify-center px-4   ">
        <h2 className="text-center text-4xl uppercase font-play font-bold tracking-tight sm:text-9xl lg:text-9xl">
          Why AURELION ?
        </h2>
      </section>

      <div className="h-auto w-full bg-white">
        <section className=" h-screen w-full grid grid-cols-1 sm:grid-cols-2  px-4 bg-white">
          <div className="flex items-center justify-center px-4">
            <h2 className="text-center text-black text-5xl uppercase font-inter font-bold tracking-wide sm:text-6xl lg:text-7xl">
              Precision Engineering
            </h2>
          </div>
          <div className="flex items-center justify-center px-4">
            <img
              src={PrecisionWatch}
              alt="Precision Watch"
              className="w-11/12 h-11/12 object-cover"
            />
          </div>
        </section>
        <section className=" h-screen w-full grid grid-cols-1 sm:grid-cols-2 mt-10 px-4 bg-white  ">
          <div className="flex items-center justify-center px-4">
            <img
              src={SapphireWatch}
              alt="Precision Watch"
              className="w-11/12 h-11/12 object-cover"
            />
          </div>

          <div className="flex items-center justify-center px-4">
            <h2 className="text-center text-black text-5xl uppercase font-inter font-bold tracking-wide sm:text-6xl lg:text-7xl">
              Sapphire Glass
            </h2>
          </div>
        </section>
        <section className=" h-screen w-full grid grid-cols-1 sm:grid-cols-2  px-4 -mt-10 sm:mt-10 bg-white  ">
          <div className="flex items-center justify-center px-4">
            <h2 className="text-center text-black text-5xl uppercase font-inter font-bold tracking-wide sm:text-6xl lg:text-7xl ">
              Swiss Movement
            </h2>
          </div>
          <div className="flex items-center justify-center px-4">
            <img
              src={SwissWatch}
              alt="Precision Watch"
              className="w-11/12 h-11/12 object-cover"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Showcase;
