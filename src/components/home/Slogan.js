import React from "react";
import { Spring, animated, config } from "react-spring/renderprops";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  sloganContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3.5rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  sloganText: {
    fontFamily: "Poppins, sans",
    fontSize: "2rem",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.85rem",
    },
  },
  strong: {
    color: theme.palette.text.primary,
  },
}));

const Slogan = () => {
  const classes = useStyles();

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      delay={300}
      config={config.slow}
    >
      {(props) => (
        <animated.div style={props} className={classes.sloganContainer}>
          <div className={classes.sloganText}>
            Latest and historical climate data
          </div>
        </animated.div>
      )}
    </Spring>
  );
};

export default Slogan;
