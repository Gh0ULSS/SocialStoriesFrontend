import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function StoryTile({
  path,
  name,
  image,
  colorback,
  selected,
  onClick,
  ...props
}) {
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    if (path) navigate(path);
    if (onClick) onClick(e);
  };

  return (
    <Button {...props} onClick={handleOnClick}>
      <Card
        variant="outlined"
        sx={{
          width: 160,
          pt: 2,
          backgroundColor: colorback,
          borderBlockColor: "black",
          borderRadius: 4,
          border: 2,
          display: "block",
          height: 180,
          paddingBottom: "10px",
          border: selected ? "2px solid black" : "2px solid white",
          boxShadow: selected ? "0px 0px 15px rgba(0,0,0,0.1)" : "none",
          transform: selected ? "scale(1.03)" : "scale(1)",
          transition:
            "border 0.2s ease, boxShadow 0.2s ease, transform 0.2s ease",
          "&:hover": {
            borderColor: selected ? "#9E258F" : "#9E258F",
          },
        }}
      >
        <CardMedia
          sx={{
            height: 120,
            width: 120,
            position: "center",
            mx: "auto",
          }}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              textTransform: "capitalize",
              fontSize: name.length > 50 ? "0.9rem" : "1rem", // Adjust font size based on length
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
}

export default StoryTile;
