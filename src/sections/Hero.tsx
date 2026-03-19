import CustomButton from "../components/CustomButton";
import heroWatch from "/images/heroWatch.svg";
import { motion } from "framer-motion";

// import startBacklight from "/images/starBacklight.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background glow */}
      {/* <img
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 opacity-70 sm:max-w-5xl"
        alt="Star backlight"
        src={startBacklight}
      /> */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-10 px-6 pt-28 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-0">
        {/* Text */}
        <div className="w-full max-w-xl text-center sm:text-left">
          <h1 className="font-play text-4xl leading-[1.05] tracking-wide sm:text-6xl">
            PRESERVING ELEGANCE,
            <br />
            CAPTURING TIME
          </h1>

          <p className="mt-5 font-inter text-base text-white/80 sm:text-lg">
            Celebrate Every Moment in Timeless Luxury
          </p>

          {/* <button
            className="mt-8 inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3 font-inter text-sm uppercase tracking-wider hover:border-white hover:text-white"
            type="button"
          >
            Explore Now
          </button> */}

          <CustomButton />
        </div>

        {/* Watch image */}
        <div className="relative flex w-full max-w-sm shrink-0 items-center justify-center sm:ml-auto sm:max-w-md">
          <img
            className="mx-auto w-72 sm:w-full"
            alt="Hero watch"
            src={heroWatch}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="pointer-events-none absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <div className="h-10 w-0.5 overflow-hidden rounded bg-white/20">
          <div className="h-4 w-full bg-white/70" />
        </div>
      </div> */}

      <motion.div
        className="pointer-events-none absolute sm:bottom-18 left-1/2 z-20 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#C39E6F] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
