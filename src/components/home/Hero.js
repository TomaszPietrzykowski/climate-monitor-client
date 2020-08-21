import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Spring, animated, config } from "react-spring/renderprops";

import hero from "../../assests/hero.jpg";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: "rgba(67, 78, 96, 1)",
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins, sans",
    fontSize: "6rem",
    fontWeight: 500,
    color: "white",
    textShadow: "0px 0px 15px rgba(0, 0, 0, 1)",
  },
  subtitle: {
    fontFamily: "Poppins, sans",
    fontSize: "2rem",
    color: "white",
    textShadow: "0px 0px 4px rgba(0, 0, 0, 1)",
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      delay={1000}
      config={config.molasses}
    >
      {(props) => (
        <animated.div style={props} className={classes.hero}>
          <div className={classes.subtitle}>Latest and historical</div>
          <div className={classes.title}> climate data </div>
        </animated.div>
      )}
    </Spring>
  );
};

export default Hero;
