import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

type CollectionItem = {
  image: string;
  name: string;
  description: string;
};

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
  return (
    <>
      <section className=" h-screen w-full flex items-center justify-center px-4  ">
        <h2 className="text-center text-5xl uppercase font-play font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Our Collection
        </h2>
      </section>
      <section className="w-full h-full px-6 py-10 sm:py-28">
        <div className="mx-auto w-full max-w-full sm:max-w-3/4  h-1/2 max-h-1/2 ">
          <div className="mt-4 grid grid-cols-1 gap-6 md:gap-48 sm:grid-cols-1 lg:grid-cols-1  ">
            {collectionItems.map((item) => (
              <Card
                key={item.name}
                className="h-full "
                sx={{
                  height: "100%",
                  borderRadius: 3,
                }}
              >
                <CardActionArea
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={`${item.name} watch`}
                    sx={{
                      width: "100%",
                      height: { xs: 220, sm: 500 },
                      objectFit: "contain",
                      padding: 3,
                    }}
                  />

                  <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                    <Typography gutterBottom variant="h3" component="div">
                      <span className="font-play">{item.name}</span>
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        textAlign: "center",
                        marginBottom: 4,
                      }}
                    >
                      <span className="font-inter">{item.description}</span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
