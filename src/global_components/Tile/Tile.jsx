import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Block } from "@mui/icons-material";

function Tile({ path, name, image, colorback, onClick, ...props }) {
  const navigate = useNavigate();

  //Funciton allows us to use multiple onClick methods
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
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              textTransform: "lowercase",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
}

export default Tile;
