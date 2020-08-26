import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Spring, animated } from "react-spring/renderprops";

import hero from "../../assests/hero.jpg";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url(${hero})`,
    backgroundColor: "rgba(67, 78, 96, 1)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      minHeight: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "250px",
    },
  },
  filter: {
    width: "100%",
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to right, rgba(0,0,0,0) , rgba(0,0,0,0.6), rgba(0,0,0,0.7), rgba(0,0,0,0.6), rgba(0,0,0,0))",
    [theme.breakpoints.down("md")]: {
      minHeight: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "250px",
      background: "rgba(0,0,0,0.5)",
    },
  },
  title: {
    fontFamily: "Poppins, sans",
    fontSize: "4rem",
    fontWeight: 500,
    color: "white",
    marginBottom: "1rem",
    textShadow: "0px 0px 1px rgba(0, 0, 0, 1)",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
      fontSize: "2.6rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  subtitle: {
    fontFamily: "Poppins, sans",
    fontSize: "1.8rem",
    color: "white",
    textShadow: "0px 0px 1px rgba(0, 0, 0, 1)",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  blue: {
    color: theme.palette.primary.main,
  },
}));

const Hero = ({ setValue }) => {
  const classes = useStyles();

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      delay={1000}
      config={{ mass: 100, tension: 280, friction: 120 }}
    >
      {(props) => (
        <animated.div style={props} className={classes.hero}>
          <div className={classes.filter}>
            <div className={classes.title}>
              <span className={classes.blue}>c</span>limate monitor
            </div>
            <div className={classes.subtitle}>json data on climate change</div>
          </div>
        </animated.div>
      )}
    </Spring>
  );
};

export default Hero;
