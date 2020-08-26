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
    marginBottom: "10rem",
    maxWidth: 1200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3.5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4rem",
      padding: "1rem",
    },
  },
  sloganText: {
    fontFamily: "Poppins, sans",
    fontSize: "2rem",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
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
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      padding: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: "1rem",
      fontSize: "0.8rem",
      marginTop: "1rem",
    },
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
    [theme.breakpoints.down("md")]: {
      width: "130px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      width: "120px",
      border: "2px solid",
      "&:hover": {
        border: "2px solid",
      },
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
  },
}));

const GetInvolved = ({ setValue }) => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: false,
    trigger: 1,
  });

  return (
    <div className={classes.sloganContainer}>
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
