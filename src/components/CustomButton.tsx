import { Button } from "@mui/material";

const CustomButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#C39E6F",
        color: "#000",
        textTransform: "none",
        px: 3,
        py: 1.25,
        mt: 4,
        borderRadius: 100,
        fontWeight: 600,
        "&:hover": {
          backgroundColor: "#B58D5D",
        },
      }}
    >
      Explore Now
    </Button>
  );
};

export default CustomButton;
