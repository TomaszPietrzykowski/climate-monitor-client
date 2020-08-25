import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { Spring, animated, config } from "react-spring/renderprops";
import { Link } from "react-router-dom";

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
  },
  filter: {
    width: "100%",
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to right, rgba(0,0,0,0) , rgba(0,0,0,0.5), rgba(0,0,0,0.65), rgba(0,0,0,0.5), rgba(0,0,0,0))",
  },
  title: {
    fontFamily: "Poppins, sans",
    fontSize: "5rem",
    fontWeight: 500,
    color: "white",
    textShadow: "0px 0px 1px rgba(0, 0, 0, 1)",
  },
  subtitle: {
    fontFamily: "Poppins, sans",
    fontSize: "2rem",
    color: "white",
    textShadow: "0px 0px 1px rgba(0, 0, 0, 1)",
  },
  btn: {
    ...theme.typography.tab,
    borderRadius: "50px",
    color: "white",

    fontFamily: "Poppins, sans",
    fontSize: "1rem",
    border: "2px solid white",
    width: "150px",
    textTransform: "none",
    marginTop: "2rem",
    marginLeft: "0rem",
    marginRight: "0rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
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
      config={config.molasses}
    >
      {(props) => (
        <animated.div style={props} className={classes.hero}>
          <div className={classes.filter}>
            <div className={classes.title}>
              <span className={classes.blue}>C</span>limate
            </div>
            <div className={classes.subtitle}>in charts and json</div>
            <Button
              className={classes.btn}
              variant="outlined"
              component={Link}
              to="/news"
              onClick={() => setValue(1)}
            >
              Browse data
            </Button>
          </div>
        </animated.div>
      )}
    </Spring>
  );
};

export default Hero;
