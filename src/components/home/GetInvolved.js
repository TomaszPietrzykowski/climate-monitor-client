import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useInView } from "react-intersection-observer";
import { Spring, animated, config } from "react-spring/renderprops";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  sloganContainer: {
    margin: "auto",
    marginTop: "6rem",
    maxWidth: 1200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3.5rem",
  },
  sloganText: {
    fontFamily: "Poppins, sans",
    fontSize: "2rem",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.5)",
  },
  about: {
    maxWidth: "780px",
    fontFamily: "Poppins, sans",
    fontSize: "1.2rem",
    textAlign: "center",
    lineHeight: "2rem",
    color: "rgba(0, 0, 0, 0.5)",
    padding: "3rem",
    marginTop: "1.5rem",
  },
  blue: {
    color: theme.palette.primary.main,
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    ...theme.typography.tab,
    textAlign: "center",
    borderRadius: "50px",
    fontFamily: "Poppins, sans",
    fontSize: "0.95rem",
    width: "150px",
    textTransform: "none",
    border: "3px solid",
    marginTop: "1.5rem",
    marginLeft: "0rem",
    marginRight: "0rem",
    "&:hover": {
      border: "3px solid",
    },
  },
}));

const GetInvolved = ({ setValue }) => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    trigger: 0.5,
  });

  return (
    <div className={classes.sloganContainer}>
      <Spring
        from={{ opacity: 0, marginTop: 50, marginBottom: -50 }}
        to={{
          opacity: inView ? 1 : 0,
          marginTop: inView ? 0 : 50,
          marginBottom: inView ? 0 : -50,
        }}
        config={config.gentle}
        delay={200}
      >
        {(props) => (
          <animated.div style={props} ref={ref} className={classes.flex}>
            <div className={classes.sloganText}>Data speaks volumes</div>
            <div className={classes.about}>
              The<span className={classes.blue}> climate monitor </span>
              project is a living initiative, aimed at providing you hard data
              on climate change in a most useful and accessible way. <br /> Get
              involved and share ideas for even better experience.
            </div>
            <Button
              variant="outlined"
              color="primary"
              className={classes.btn}
              component={Link}
              to="/contact"
              onClick={() => setValue(4)}
            >
              Contact
            </Button>
          </animated.div>
        )}
      </Spring>
    </div>
  );
};

export default GetInvolved;
