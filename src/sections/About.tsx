const About = () => {
  return (
    <section id="about" className="w-full h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <header className="mx-auto w-full max-w-4xl">
          <h2 className="font-play text-5xl font-bold uppercase leading-[0.85] sm:leading-[0.55] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-center sm:text-left sm:pl-2">
              BRAND
            </span>
            <span className="mt-0 block text-center  sm:pr-2">STORY</span>
          </h2>
        </header>

        <p className="mt-10 w-full max-w-3xl mx-auto text-center font-inter text-base leading-relaxed text-white/85 sm:mt-14 sm:ml-120 sm:mx-0 sm:text-lg lg:text-2xl sm:text-left ">
          AURELION was founded with a singular vision — to redefine how time is
          experienced. Every timepiece is a result of meticulous craftsmanship,
          combining traditional watchmaking techniques with modern design
          philosophy.
          <br />
          <br />
          We believe a watch is more than an accessory. It is a statement of
          identity, precision, and timeless elegance.
        </p>
      </div>
    </section>
  );
};

export default About;
