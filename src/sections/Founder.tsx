import founder from "/images/elianVoss.webp";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Founder = () => {
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      if (
        !pinRef.current ||
        !nameRef.current ||
        !copyRef.current ||
        !imageRef.current
      )
        return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 1023px)",
          isDesktop: "(min-width: 1024px)",
        },
        (context) => {
          const isMobile = Boolean(context.conditions?.isMobile);

          gsap.set([nameRef.current!, copyRef.current!, imageRef.current!], {
            willChange: "transform, opacity",
          });

          gsap.set(nameRef.current!, {
            scale: isMobile ? 1.2 : 1.8,
            y: 0,
            transformOrigin: "50% 50%",
          });

          gsap.set(copyRef.current!, {
            autoAlpha: 0,
            y: 24,
          });

          gsap.set(imageRef.current!, {
            autoAlpha: 0,
            yPercent: isMobile ? 12 : 18,
          });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: pinRef.current,
              start: "top top",
              end: isMobile ? "+=220%" : "+=240%",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // ELIAN VOSS text appears large then shrinks to its normal size
          tl.to(
            nameRef.current!,
            {
              scale: 1,
              y: () => -(window.innerHeight / 2 - (isMobile ? 80 : 110)),
            },
            0,
          );

          //  Paragraphs come in as one block
          tl.to(
            copyRef.current!,
            {
              autoAlpha: 1,
              y: 0,
            },
            0.35,
          );

          // Image appears from the bottom
          tl.to(
            imageRef.current!,
            {
              autoAlpha: 1,
              yPercent: isMobile ? 0 : 8,
            },
            0.65,
          );

          // After image comes in, hide the paragraph
          tl.to(
            copyRef.current!,
            {
              autoAlpha: 0,
            },
            0.66,
          );

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        },
      );

      return () => mm.revert();
    },
    { scope: scopeRef },
  );

  return (
    <div ref={scopeRef} className="bg-white w-full  ">
      <section
        className=" h-svh w-full bg-white sm:h-screen sticky top-0 overflow-hidden "
        id="founder"
      >
        <div className="flex h-svh w-full items-center justify-center bg-white px-4 sm:h-screen">
          <h2 className="text-center text-5xl text-black uppercase font-play font-bold tracking-tight sm:text-9xl lg:text-9xl">
            Meet the Founder
          </h2>
        </div>
      </section>

      <section className="w-full bg-white overflow-hidden">
        <div
          ref={pinRef}
          className="relative flex h-svh w-full items-center justify-center overflow-hidden bg-white px-4 sm:h-screen sm:px-6"
        >
          <h2
            ref={nameRef}
            className="font-play font-bold text-[12vw] text-black uppercase tracking-widest sm:text-9xl lg:text-9xl z-10"
          >
            ELIAN VOSS
          </h2>

          <div
            ref={copyRef}
            className="absolute inset-0 z-10 flex items-center justify-center px-6"
          >
            <div className="mx-auto w-full max-w-3xl text-center">
              <p className="font-inter text-base leading-relaxed text-black/80 sm:text-lg lg:text-xl">
                Elian Voss is the visionary behind AURELION — a brand born from
                a deep passion for precision and timeless design. With years of
                dedication to the art of watchmaking, Elian set out to create
                more than just timepieces. His mission was to craft experiences
                that reflect elegance, discipline, and innovation. Every
                AURELION watch carries his philosophy: Time is not just measured
                — it is mastered.
              </p>
            </div>
          </div>

          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none lg:items-end">
            <img
              ref={imageRef}
              src={founder}
              alt="Elian Voss"
              onLoad={() => {
                requestAnimationFrame(() => ScrollTrigger.refresh());
              }}
              className="w-full h-[100svh] max-w-none object-cover object-center lg:w-[92vw] lg:h-auto lg:object-contain lg:max-h-[90svh]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
