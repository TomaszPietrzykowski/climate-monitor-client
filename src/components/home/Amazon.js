import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

import amazon from "../../assests/amazon.jpg";

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    backgroundImage: `url(${amazon})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    minHeight: "500px",
    alignItems: "center",
  },
  tabLeft: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "4rem",
    textAlign: "left",
    alignItems: "flex-start",
  },
  tabRight: {
    display: "flex",
    flexDirection: "column",
    marginRight: "4rem",
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
    fontSize: "0.9rem",
    border: "2px solid white",
    width: "150px",
    textTransform: "none",
    marginTop: "2rem",
    marginLeft: "0rem",
    marginRight: "0rem",
  },
}));

const Amazon = () => {
  const classes = useStyles();

  return (
    <div className={classes.flexContainer}>
      <div className={classes.tabLeft}>
        <div className={classes.title}>Climate News</div>
        <div className={classes.text}>
          Latest news concerining climate change,
          <br />
          actions and challanges we take on
          <br />
          in our effort to stabilize climate.
        </div>
        <Button className={classes.btn} variant="outlined">
          Newsfeed
        </Button>
      </div>
      <div className={classes.tabRight}>
        <div className={classes.title}>Public API</div>
        <div className={classes.text}>
          Your climate data just 3 ms away.
          <br />
          Free to use, rich public API <br />
          with most crutial climate factors.
        </div>
        <Button className={classes.btn} variant="outlined">
          Documentation
        </Button>
      </div>
    </div>
  );
};

export default Amazon;
