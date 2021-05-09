import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Spring, animated } from "react-spring/renderprops"

import hero from "../../assets/hero.jpg"

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
    position: "relative",
    [theme.breakpoints.down("md")]: {
      minHeight: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "250px",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,.4)",
    },
  },
  title: {
    fontFamily: "Poppins, sans",
    fontSize: "5.5rem",
    fontWeight: 500,
    color: "white",
    marginBottom: "1rem",
    textShadow: "0px 0px 3px rgba(0, 0, 0, 1)",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      fontSize: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
      fontSize: "2.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.3rem",
    },
  },
  subtitle: {
    fontFamily: "Poppins, sans",
    fontSize: "2.8rem",
    fontWeight: "500",
    color: "white",
    zIndex: 1,
    textShadow: "0px 0px 3px rgba(0, 0, 0, 1)",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  blue: {
    color: theme.palette.primary.main,
  },
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      delay={1000}
      config={{ mass: 100, tension: 280, friction: 120, clamp: true }}
    >
      {(props) => (
        <animated.div style={props} className={classes.hero}>
          <h1 className={classes.title}>
            <span className={classes.blue}>c</span>limate monitor
          </h1>
          <h2 className={classes.subtitle}>json data on climate change</h2>
        </animated.div>
      )}
    </Spring>
  )
}

export default Hero
