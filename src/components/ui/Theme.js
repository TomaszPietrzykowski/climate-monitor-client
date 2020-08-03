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
    h5: {
      fontWeight: 500,
    },
  },
});
