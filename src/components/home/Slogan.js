import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  sloganContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3.5rem",
  },
  sloganText: {
    fontFamily: "Poppins, sans",
    fontSize: "1.6rem",
    color: "rgba(0, 0, 0, 0.5)",
  },
}));

const Slogan = () => {
  const classes = useStyles();

  return (
    <div className={classes.sloganContainer}>
      <div className={classes.sloganText}>It starts with awareness</div>
    </div>
  );
};

export default Slogan;
