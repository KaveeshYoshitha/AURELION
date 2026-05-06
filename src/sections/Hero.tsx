import { useEffect, useRef } from "react";
import CustomButton from "../components/CustomButton";
import heroWatch from "/images/heroWatch.svg";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    const onLenisScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", onLenisScroll);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
    };
  }, []);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);

      gsap.set(q(".hero-heading, .hero-sub, .hero-cta, .shared-watch"), {
        willChange: "transform, opacity",
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        q(".hero-heading"),
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.75 },
      )
        .fromTo(
          q(".hero-sub"),
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.35",
        )
        .fromTo(
          q(".hero-cta"),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.25",
        )
        .fromTo(
          q(".shared-watch"),
          { opacity: 0, y: 24, rotate: -2 },
          { opacity: 1, y: 0, rotate: 0, duration: 0.8 },
          "-=0.5",
        );

      gsap.to(q(".shared-watch"), {
        y: 10,
        duration: 2.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.2,
      });

      gsap.to(q(".hero-scroll"), {
        y: 10,
        duration: 1.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-10 px-6 pt-28 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-0">
        {/* Text */}
        <div className="relative z-20 w-full max-w-xl text-center sm:text-left">
          <h1 className="hero-heading font-play text-4xl leading-[1.05] tracking-wide sm:text-6xl">
            PRESERVING ELEGANCE,
            <br />
            CAPTURING TIME
          </h1>

          <p className="hero-sub mt-5 font-inter text-base text-white/80 sm:text-lg">
            Celebrate Every Moment in Timeless Luxury
          </p>

          <div className="hero-cta relative z-20">
            <CustomButton />
          </div>
        </div>

        {/* Watch image */}
        <div
          id="hero-watch-parent"
          className="relative z-10 mt-6 flex h-72 w-full max-w-sm shrink-0 items-center justify-center sm:ml-auto sm:mt-0 sm:h-auto sm:max-w-md"
        >
          <div
            id="shared-watch"
            className="shared-watch pointer-events-none w-72 sm:w-full"
          >
            <img className="block w-full" alt="Hero watch" src={heroWatch} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}

      <div className="hero-scroll pointer-events-none absolute bottom-8 sm:bottom-18 left-1/2 z-20 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#C39E6F] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
