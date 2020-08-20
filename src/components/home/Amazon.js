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
  },
  tabLeft: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "2rem",
    textAlign: "left",
    alignItems: "flex-start",
  },
  tabRight: {
    display: "flex",
    flexDirection: "column",
    marginRight: "2rem",
    textAlign: "right",
    alignItems: "flex-end",
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
  },
}));

const Amazon = ({ setValue }) => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    trigger: 1,
  });

  return (
    <div className={classes.hero}>
      <div className={classes.siteContainer}>
        <div className={classes.flexContainer}>
          <div className={classes.tabLeft}>
            <Spring
              from={{ opacity: 0, marginTop: 50, marginBottom: -50 }}
              to={{
                opacity: inView ? 1 : 0,
                marginTop: inView ? 0 : 50,
                marginBottom: inView ? 0 : -50,
              }}
              config={config.gentle}
              delay={300}
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
              from={{ opacity: 0, marginTop: 50, marginBottom: -50 }}
              to={{
                opacity: inView ? 1 : 0,
                marginTop: inView ? 0 : 50,
                marginBottom: inView ? 0 : -50,
              }}
              config={config.gentle}
              delay={300}
            >
              {(props) => (
                <animated.div style={props} ref={ref}>
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
