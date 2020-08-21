import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    ...theme.typography.tab,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width: "100%",
    minHeight: "12rem",
    marginLeft: 0,
    zIndex: 1302,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      minHeight: "6rem",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <h1>footer</h1>
    </div>
  );
};

export default Footer;
