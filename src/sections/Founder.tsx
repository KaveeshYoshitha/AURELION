import founder from "/images/elianVoss.webp";

const Founder = () => {
  return (
    <div className="bg-white h-auto w-full">
      <section className=" h-screen w-full flex items-center justify-center px-4 bg-white  ">
        <h2 className="text-center text-5xl text-black  uppercase font-play font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Meet the Founder
        </h2>
      </section>
      <section className="w-full h-full px-2 py-10 sm:py-28 sm:px-6 bg-white">
        <h2 className="text-center text-5xl text-black uppercase font-play font-bold tracking-widest sm:text-8xl ">
          ELIAN VOSS
        </h2>

        <img
          src={founder}
          alt="Elian Voss"
          className="mx-auto w-full object-cover -mt-6 h-[75svh] sm:h-auto sm:-mt-12 "
        />
      </section>

      <section className="w-full h-screen flex items-center justify-center bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-6 text-center">
          <p className="font-inter text-base leading-relaxed text-black/80 sm:text-lg lg:text-xl">
            Elian Voss is the visionary behind AURELION — a brand born from a
            deep passion for precision and timeless design.
          </p>
          <p className="font-inter text-base leading-relaxed text-black/80 sm:text-lg lg:text-xl">
            With years of dedication to the art of watchmaking, Elian set out to
            create more than just timepieces. His mission was to craft
            experiences that reflect elegance, discipline, and innovation.
          </p>
          <p className="font-inter text-base leading-relaxed text-black/80 sm:text-lg lg:text-xl">
            Every AURELION watch carries his philosophy: Time is not just
            measured — it is mastered.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Founder;
