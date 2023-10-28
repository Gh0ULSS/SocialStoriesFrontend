import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function NavigationButton({ path, name, ...props }) {
  const navigate = useNavigate();

  return (
    <Button {...props} onClick={() => navigate(path)}>
      {name}
    </Button>
  );
}

export default NavigationButton;
