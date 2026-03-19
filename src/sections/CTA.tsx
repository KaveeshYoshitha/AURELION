import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CustomButton from "../components/CustomButton";
gsap.registerPlugin(ScrollTrigger);
const CTA = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const heading = section.querySelector("h2");
      const paragraph = section.querySelector("p");
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (!heading || !paragraph) return;
      if (prefersReducedMotion) {
        gsap.set(section, { backgroundColor: "#000000" });
        gsap.set(heading, { color: "#ffffff" });
        gsap.set(paragraph, { color: "rgba(255, 255, 255, 0.7)" });
        return;
      }
      gsap.set([section, heading, paragraph], {
        willChange: "background-color, color",
      });
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      tl.to(section, { backgroundColor: "#000000" }, 0)
        .to(heading, { color: "#ffffff" }, 0)
        .to(paragraph, { color: "rgba(255, 255, 255, 0.7)" }, 0);
      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef },
  );
  return (
    <>
      {" "}
      <section
        ref={sectionRef}
        className="w-full h-[70vh] bg-white px-6 py-24 sm:py-28 sticky top-0 "
      >
        {" "}
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          {" "}
          <h2 className="font-play text-4xl font-bold uppercase tracking-tight text-black sm:text-6xl lg:text-7xl">
            {" "}
            Discover Your Timepiece{" "}
          </h2>{" "}
          <p className="mt-6 max-w-2xl font-inter text-base leading-relaxed text-black/70 sm:text-lg">
            {" "}
            Experience the perfect blend of elegance and precision{" "}
          </p>{" "}
          <div className="mt-10 flex w-full items-center justify-center">
            {" "}
            <CustomButton />{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
};
export default CTA;
