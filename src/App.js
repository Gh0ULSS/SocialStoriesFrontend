import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme"; //Theme of the MUI components
import Routing from "./Routing.js"; //Routing for the pages in the website

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
