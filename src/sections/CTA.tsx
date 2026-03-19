import CustomButton from "../components/CustomButton";

const CTA = () => {
  return (
    <>
      <section className="w-full h-[70vh] bg-white px-6 py-24 sm:py-28  ">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <h2 className="font-play text-4xl font-bold uppercase tracking-tight text-black sm:text-6xl lg:text-7xl">
            Discover Your Timepiece
          </h2>

          <p className="mt-6 max-w-2xl font-inter text-base leading-relaxed text-black/70 sm:text-lg">
            Experience the perfect blend of elegance and precision
          </p>

          <div className="mt-10 flex w-full items-center justify-center">
            <CustomButton />
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
