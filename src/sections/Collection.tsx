import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type CollectionItem = {
  image: string;
  name: string;
  description: string;
};

gsap.registerPlugin(ScrollTrigger);

const collectionItems: CollectionItem[] = [
  {
    image: "/images/starWatch.webp",
    name: "Astra Nova",
    description:
      "A fusion of celestial elegance and modern design, inspired by the stars.",
  },
  {
    image: "/images/silverWatch.webp",
    name: "Noir Classic",
    description: "Minimal timeless design.",
  },
  {
    image: "/images/sportWatch.webp",
    name: "Sportivo Pro",
    description:
      "Bold performance watch with a sleek design, built for precision and durability.",
  },
];

const Collection = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const panels = Array.from(
        container.querySelectorAll<HTMLElement>(".collection-panel"),
      );
      if (panels.length <= 1) return;

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${window.innerWidth * (panels.length - 1)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <>
      <section
        id="collection"
        className="sticky top-0 z-20 flex h-screen w-full items-center justify-center bg-black px-4 text-white overflow-hidden"
      >
        <h2 className="text-center text-5xl font-play font-bold uppercase tracking-tight sm:text-9xl lg:text-9xl">
          Our Collection
        </h2>
      </section>

      <section
        ref={containerRef}
        className="relative z-20 h-screen w-screen overflow-hidden bg-black"
      >
        <div id="horizontal-wrapper" className="flex h-full ">
          {collectionItems.map((item) => (
            <div
              key={item.name}
              className="collection-panel flex h-screen w-full shrink-0 items-center   justify-center px-6"
            >
              <Card
                className="h-10/12 w-2/3 flex items-center justify-center"
                sx={{ width: { xs: "85vw", sm: "70vw" }, borderRadius: 15 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={`${item.name} watch`}
                    sx={{ height: { xs: 280, sm: 420 }, objectFit: "contain" }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography gutterBottom variant="h2">
                      <span className="font-play font-bold text-[#C39E6F] ">
                        {item.name}
                      </span>
                    </Typography>
                    <Typography variant="body1">{item.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Collection;
