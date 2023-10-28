import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { toPng } from "html-to-image";

function PECSTile({ path, name, image, colorback, ...props }) {
  const cardRef = useRef(null);

  const handleDownload = () => {
    if (cardRef.current) {
      const scale = 2; // Increase scale for better resolution (adjust as needed)

      toPng(cardRef.current, {
        pixelRatio: scale,
        backgroundColor: "white", // Set background color if needed
      })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = `${name}_card.png`;
          link.click();
        })
        .catch((error) => {
          console.error("Error creating image:", error);
        });
    }
  };

  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          width: 180,
          backgroundColor: "white",
          border: "2px solid #ccc",
          display: "block",
          height: 190,
          pt: 2,
        }}
        ref={cardRef}
      >
        <CardMedia
          sx={{
            height: 125,
            width: 125,
            position: "center",
            mx: "auto",
          }}
          image={image}
          title={name}
        />
        <Divider
          sx={{
            borderTopWidth: "1px",
            borderTopColor: "#ccc",
            width: "100%",
            my: 1,
          }}
        />
        <CardContent sx={{ pt: 0.3 }}>
          <Typography
            gutterBottom
            variant="h5"
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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          // marginLeft: "35px",
          marginLeft: "20%",
          marginRight: "20%",
        }}
      >
        <Button
          onClick={handleDownload}
          variant="contained"
          sx={{
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          Download
        </Button>
      </div>
    </div>
  );
}

export default PECSTile;
