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
  },
  sloganText: {
    fontFamily: "Poppins, sans",
    fontSize: "2rem",
    color: "rgba(0, 0, 0, 0.5)",
  },
}));

const Slogan = () => {
  const classes = useStyles();

  return (
    <Spring
      from={{ opacity: 0, marginTop: 50, marginBottom: -50 }}
      to={{ opacity: 1, marginTop: 0, marginBottom: 0 }}
      delay={300}
      config={config.gentle}
    >
      {(props) => (
        <animated.div style={props} className={classes.sloganContainer}>
          <div className={classes.sloganText}>It starts with awareness</div>
        </animated.div>
      )}
    </Spring>
  );
};

export default Slogan;
