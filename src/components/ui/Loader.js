import React from "react";
import loader from "../../assets/globespinner.gif";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerStyle: {
    height: "3rem",
    margin: "2rem",
    opacity: ".4",
  },
  label: {
    ...theme.typography.tab,
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
    fontWeight: 400,
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.85rem",
    },
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerStyle}>
      <h1 className={classes.label}>Fetching latest data...</h1>
      <img
        src={loader}
        alt="fetching data..."
        className={classes.spinnerStyle}
      />
    </div>
  );
};

export default Loader;
