import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { useInView } from "react-intersection-observer";
import { Spring, animated, config } from "react-spring/renderprops";

import amazon from "../../assests/amazon.jpg";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url(${amazon})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    minHeight: "500px",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "left",
    },
  },
  siteContainer: {
    maxWidth: 1200,
    margin: "auto",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "500px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "1rem",
    },
  },
  tabLeft: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "2rem",
    textAlign: "left",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "6rem",
      textAlign: "center",
      alignItems: "flex-end",
    },
  },
  tabRight: {
    display: "flex",
    flexDirection: "column",
    marginRight: "2rem",
    textAlign: "right",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginTop: "6rem",
      marginBottom: "6rem",
      textAlign: "center",
      alignItems: "flex-end",
    },
  },
  text: {
    fontFamily: "Poppins, sans",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "white",
    textShadow: "0px 0px 15px rgba(0, 0, 0, 1)",
    marginTop: "1rem",
  },
  title: {
    fontFamily: "Poppins, sans",
    fontSize: "2rem",
    color: "white",
    textShadow: "0px 0px 4px rgba(0, 0, 0, 1)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
    },
  },
  btn: {
    ...theme.typography.tab,
    borderRadius: "50px",
    color: "white",
    fontFamily: "Poppins, sans",
    fontSize: "0.95rem",
    border: "2px solid white",
    width: "150px",
    textTransform: "none",
    marginTop: "2rem",
    marginLeft: "0rem",
    marginRight: "0rem",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      fontSize: "0.8rem",
      fontWeight: 500,
    },
  },
}));

const Amazon = ({ setValue }) => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    trigger: 1,
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    trigger: 1,
  });

  return (
    <div className={classes.hero}>
      <div className={classes.siteContainer}>
        <div className={classes.flexContainer}>
          <div className={classes.tabLeft}>
            <Spring
              from={{ opacity: 0, marginTop: 30, marginBottom: -30 }}
              to={{
                opacity: inView ? 1 : 0,
                marginTop: inView ? 0 : 30,
                marginBottom: inView ? 0 : -30,
              }}
              config={config.gentle}
              delay={200}
            >
              {(props) => (
                <animated.div style={props} ref={ref}>
                  <div className={classes.title}>Climate News</div>
                  <div className={classes.text}>
                    Latest news on climate change,
                    <br />
                    actions and challanges we take on
                    <br />
                    in our effort to stabilize climate.
                  </div>
                  <Button
                    className={classes.btn}
                    variant="outlined"
                    component={Link}
                    to="/news"
                    onClick={() => setValue(2)}
                  >
                    Newsfeed
                  </Button>
                </animated.div>
              )}
            </Spring>
          </div>
          <div className={classes.tabRight}>
            <Spring
              from={{ opacity: 0, marginTop: 30, marginBottom: -30 }}
              to={{
                opacity: inView1 ? 1 : 0,
                marginTop: inView1 ? 0 : 30,
                marginBottom: inView1 ? 0 : -30,
              }}
              config={config.gentle}
              delay={200}
            >
              {(props) => (
                <animated.div style={props} ref={ref1}>
                  <div className={classes.title}>Public API</div>
                  <div className={classes.text}>
                    Your climate data just milliseconds away.
                    <br />
                    Free to use, rich public API <br />
                    with most crutial climate factors.
                  </div>
                  <Button
                    className={classes.btn}
                    variant="outlined"
                    component={Link}
                    to="/public_api"
                    onClick={() => setValue(5)}
                  >
                    Documentation
                  </Button>
                </animated.div>
              )}
            </Spring>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amazon;
