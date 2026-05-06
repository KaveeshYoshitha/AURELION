import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import PrecisionWatch from "/images/precisionWatch.webp";
import SapphireWatch from "/images/sapphireWatch.webp";
import SwissWatch from "/images/swissWatch.webp";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current || !textRef.current || !nextRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      gsap.set(nextRef.current, { autoAlpha: 1 });
      return;
    }

    const mm = gsap.matchMedia();

    const cleanups: Array<() => void> = [];

    mm.add(
      {
        isMobile: "(max-width: 639px)",
        isDesktop: "(min-width: 640px)",
      },
      (context) => {
        const isMobile = Boolean(context.conditions?.isMobile);

        gsap.set(sectionRef.current, { backgroundColor: "#000000" });
        gsap.set(textRef.current, {
          autoAlpha: 1,
          scale: 1,
          transformOrigin: "50% 50%",
          willChange: "transform, opacity",
        });
        gsap.set(nextRef.current, { autoAlpha: 0 });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // zoom text then end on a full white screen
        tl.to(
          textRef.current,
          {
            scale: isMobile ? 140 : 250,
            force3D: true,
            ease: "power2.inOut",
          },
          0,
        )
          // .to(
          //   sectionRef.current,
          //   {
          //     backgroundColor: "#ffffff",
          //   },
          //   0.55,
          // )
          // .to(
          //   textRef.current,
          //   {
          //     autoAlpha: 0,
          //   },
          //   0.62,
          // )
          .to(
            nextRef.current,
            {
              autoAlpha: 1,
            },
            0.66,
          );

        cleanups.push(() => {
          tl.scrollTrigger?.kill();
          tl.kill();
        });

        // Each section slides in (h2 left, img right) and slides out on scroll
        const panels = Array.from(nextRef.current!.querySelectorAll("section"));

        panels.forEach((panel) => {
          const heading = panel.querySelector("h2");
          const image = panel.querySelector("img");
          if (!heading || !image) return;

          gsap.set([heading, image], {
            willChange: "transform, opacity",
          });
          gsap.set(heading, { xPercent: -30, autoAlpha: 0 });
          gsap.set(image, { xPercent: 30, autoAlpha: 0 });

          const panelTl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: panel,
              start: "top top",
              end: "+=140%",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // In
          panelTl
            .to(
              heading,
              {
                xPercent: 0,
                autoAlpha: 1,
              },
              0,
            )
            .to(
              image,
              {
                xPercent: 0,
                autoAlpha: 1,
              },
              0,
            );

          // Out
          panelTl
            .to(
              heading,
              {
                xPercent: -30,
                autoAlpha: 0,
              },
              1.4,
            )
            .to(
              image,
              {
                xPercent: 30,
                autoAlpha: 0,
              },
              0.9,
            );

          cleanups.push(() => {
            panelTl.scrollTrigger?.kill();
            panelTl.kill();
          });
        });
      },
    );

    return () => {
      cleanups.forEach((fn) => fn());
      mm.revert();
    };
  }, []);

  return (
    <div className="bg-white">
      {/* PIN + ZOOM SECTION */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
      >
        <h2
          ref={textRef}
          className="text-white text-4xl sm:text-9xl font-play font-bold uppercase text-center"
        >
          Why AURELION ?
        </h2>
      </section>

      {/* NEXT CONTENT */}
      <div ref={nextRef} className="bg-white overflow-hidden">
        <section className="h-screen w-full grid grid-cols-1 sm:grid-cols-2 px-4 py-12 sm:py-0">
          <div className="flex items-center justify-center p-4">
            <h2 className="text-black text-4xl sm:text-5xl font-inter font-bold text-center">
              Precision Engineering
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={PrecisionWatch}
              className="w-11/12 max-h-[45vh] sm:max-h-none h-11/12 object-cover rounded-xl"
            />
          </div>
        </section>

        <section className="h-screen w-full grid grid-cols-1 sm:grid-cols-2 px-4 py-12 sm:py-0">
          <div className="flex items-center justify-center order-2 sm:order-1">
            <img src={SapphireWatch} className="w-11/12 max-h-[45vh] sm:max-h-none h-11/12 object-cover rounded-xl" />
          </div>
          <div className="flex items-center justify-center order-1 sm:order-2 p-4">
            <h2 className="text-black text-4xl sm:text-5xl font-inter font-bold text-center">
              Sapphire Glass
            </h2>
          </div>
        </section>

        <section className="h-screen w-full grid grid-cols-1 sm:grid-cols-2 px-4 py-12 sm:py-0">
          <div className="flex items-center justify-center p-4">
            <h2 className="text-black text-4xl sm:text-5xl font-inter font-bold text-center">
              Swiss Movement
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <img src={SwissWatch} className="w-11/12 max-h-[45vh] sm:max-h-none h-11/12 object-cover rounded-xl" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Showcase;
