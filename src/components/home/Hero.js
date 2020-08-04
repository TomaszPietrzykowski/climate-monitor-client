import React from "react";
import { makeStyles } from "@material-ui/styles";

import hero from "../../assests/hero.jpg";

const useStyles = makeStyles((theme) => ({
  hero: {
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
    color: "white",
    textShadow: "0px 0px 8px rgba(0, 0, 0, 1)",
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
    <div className={classes.hero}>
      <div className={classes.subtitle}>Latest and historical</div>
      <div className={classes.title}> climate data </div>
    </div>
  );
};

export default Hero;
