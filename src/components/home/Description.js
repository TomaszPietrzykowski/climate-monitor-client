import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
  },
  tab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Poppins",
    padding: "2rem",
    margin: "3rem",
    color: theme.palette.text.secondary,
    height: "100%",
  },
  title: {
    fontSize: "1.6rem",
    fontWeight: "bold",
    marginBottom: "3rem",
  },
  text: {
    fontSize: "1rem",
  },
}));

const Description = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.tab}>
        <div className={classes.title}>Up to date</div>
        <div className={classes.text}>
          Climate Monitor data base is being updated with recently published
          data of multiple origins, mainly NOAA and NASA public data servers.
          All datasets are updated relatively to the data scope. Narrow scope
          data, like daily and weekly mediana are not more then hours old.
        </div>
      </div>
      <div className={classes.tab}>
        <div className={classes.title}>Comprehensive</div>
        <div className={classes.text}>
          Well over 50 different datasets, stored in custom reliable data base.
          Collection of data on the most important climate factors: levels of
          multiple atmospheric greenhouse gases, temperatures, trends in ocean
          levels and condition of Arctica's and Antarctica's ice.
        </div>
      </div>
      <div className={classes.tab}>
        <div className={classes.title}>Accessible</div>
        <div className={classes.text}>
          Data gathered over multiple sources, delivered to you in one place,
          served as an easy to read chart, as well as tabular or json data.
          Analize scope of your choice and compare factors. Use our Public API
          if you are up to something...
        </div>
      </div>
    </div>
  );
};

export default Description;
