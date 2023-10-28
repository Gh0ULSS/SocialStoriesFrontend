import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box>
      <BottomNavigation
        showLabels
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background:
            "linear-gradient(180deg, #FF8252 0%, #FDB046 63.54%, #FDBA50 100%)",
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/reference"
          label="Reference"
          icon={<InfoIcon />}
          style={{ color: "white" }}
        />
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
