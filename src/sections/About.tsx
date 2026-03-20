import { useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, Flip);

const About = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);

      const moveWatchToAbout = () => {
        const watch = document.getElementById("shared-watch");
        const slot = document.getElementById("about-watch-slot");
        if (!watch || !slot) return;
        if (slot.contains(watch)) return;

        gsap.killTweensOf(watch);
        gsap.set(watch, { autoAlpha: 1 });
        const state = Flip.getState(watch);
        slot.appendChild(watch);
        Flip.from(state, {
          duration: 0.9,
          ease: "power3.inOut",
          absolute: true,
          scale: true,
          simple: true,
          onComplete: () => {
            gsap.set(watch, {
              clearProps: "transform,opacity,left,top,width,height,position",
            });
          },
        });
      };

      const moveWatchToHero = () => {
        const watch = document.getElementById("shared-watch");
        const heroParent = document.getElementById("hero-watch-parent");
        if (!watch || !heroParent) return;
        if (heroParent.contains(watch)) return;

        gsap.killTweensOf(watch);
        gsap.set(watch, { autoAlpha: 1 });
        const state = Flip.getState(watch);
        heroParent.appendChild(watch);
        Flip.from(state, {
          duration: 0.85,
          ease: "power3.inOut",
          absolute: true,
          scale: true,
          simple: true,
          onComplete: () => {
            gsap.set(watch, {
              clearProps: "transform,opacity,left,top,width,height,position",
            });

            // Re-apply the subtle float once it's back in the Hero.
            gsap.killTweensOf(watch);
            gsap.to(watch, {
              y: 10,
              duration: 2.6,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              delay: 0.2,
            });
          },
        });
      };

      gsap.set(q(".about-heading span, .about-copy"), {
        willChange: "transform, opacity",
      });

      // 1) When About comes into view, move watch into About.
      ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top 85%",
        onEnter: moveWatchToAbout,
        onEnterBack: moveWatchToAbout,
        onLeaveBack: moveWatchToHero,
      });

      // 2) When Collection starts, move watch back to Hero.
      // This avoids sticky-layout edge cases where About's own "leave" isn't reliable.
      ScrollTrigger.create({
        trigger: "#collection",
        start: "top 90%",
        onEnter: moveWatchToHero,
        onLeaveBack: moveWatchToAbout,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        q(".about-heading span"),
        { autoAlpha: 0, y: 22 },
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12 },
      ).fromTo(
        q(".about-copy"),
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.75 },
        "-=0.35",
      );
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="about"
      className="sticky top-0 z-10 w-full h-screen bg-black text-white overflow-hidden "
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col items-center gap-12 sm:flex-row sm:items-start sm:gap-14">
          <div
            id="about-watch-slot"
            className="flex h-72 w-full justify-center sm:h-auto sm:w-[44%] sm:justify-start sm:pt-6"
          />

          <div className="w-full sm:w-[56%]">
            <header className="mx-auto w-full max-w-4xl sm:mx-0">
              <h2 className="about-heading font-play text-5xl font-bold uppercase leading-[0.85] sm:leading-[0.55] tracking-wide sm:text-6xl lg:text-7xl">
                <span className="block text-center sm:text-left sm:pl-2">
                  BRAND STORY
                </span>
              </h2>
            </header>

            <p className="about-copy mt-10 w-full max-w-3xl mx-auto text-center font-inter text-base leading-relaxed text-white/85 sm:mt-14 sm:mx-0 sm:text-lg lg:text-2xl sm:text-left">
              AURELION was founded with a singular vision — to redefine how time
              is experienced. Every timepiece is a result of meticulous
              craftsmanship, combining traditional watchmaking techniques with
              modern design philosophy.
              <br />
              <br />
              We believe a watch is more than an accessory. It is a statement of
              identity, precision, and timeless elegance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
