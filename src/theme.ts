import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: orange[800],
    },
    secondary: {
      main: "#edf2ff",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// can add all The Base Props and base Theme Option here
//  You can custamize your app here.
