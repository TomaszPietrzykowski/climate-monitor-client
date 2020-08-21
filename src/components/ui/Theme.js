import { createMuiTheme } from "@material-ui/core/styles";

const blue = "#00aaff";
const orange = "#ffba60";
const whitish = "rgba(245, 245, 255, 1)";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      orange: `${orange}`,
    },
    primary: {
      main: `${blue}`,
    },
    secondary: {
      main: `${whitish}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Poppins, sans",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
      marginLeft: "25px",
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 340,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
