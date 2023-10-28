//theme.js is used to modify themes of existing MUI components (imported by App.js )
//see: https://mui.com/material-ui/customization/theming/
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9E258F",
      contrastText: "#FFFF",
      fontFamily: "Comic Neue",
    },
    secondary: {
      main: "#FDB046",
      fontFamily: "Comic Neue",
    },
    tertiary: {
      main: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: "Comic Neue",
    fontWeight: "bold",
  }
});

export default theme;
