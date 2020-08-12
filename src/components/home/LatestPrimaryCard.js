import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-emd",
  },
  root: {
    minWidth: 275,
    textAlign: "center",
    margin: "auto",
    marginTop: "4rem",
    fontFamily: "Poppins",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
  label: {
    fontSize: "1.3rem",
    fontWeight: 500,
  },
  labelSecondary: {
    fontSize: "1rem",
    fontWeight: 500,
  },
  value: {
    fontSize: "3rem",
    fontWeight: 500,
    marginTop: "1.3rem",
    marginBottom: "1.3rem",
    color: theme.palette.primary.main,
  },
  valueSecondary: {
    fontSize: "1.5rem",
    fontWeight: 500,
    marginTop: "0.5rem",
    marginBottom: "1rem",
    color: theme.palette.primary.main,
  },
  ppm: {
    fontSize: "1rem",
    fontWeight: 300,
  },
  date: {
    fontSize: "1rem",
    fontWeight: 500,
  },
}));

const LatestPrimaryCard = ({ latest }) => {
  const classes = useStyles();

  return (
    <div className={classes.flexContainer}>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.label}>Current atmospheric CO2:</div>
          <div className={classes.value}>
            {latest.values[0]} <span className={classes.ppm}>ppm</span>
          </div>
          <div className={classes.date}>
            measurement date: {latest.labels[0]}
          </div>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.labelSecondary}>Trend for the date:</div>
          <div className={classes.valueSecondary}>
            {latest.trend[0]} <span className={classes.ppm}>ppm</span>
          </div>
          <div className={classes.labelSecondary}>Increase since 1800:</div>
          <div className={classes.valueSecondary}>
            {parseFloat(latest.values[0] - 318).toFixed(2)}{" "}
            <span className={classes.ppm}>ppm</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LatestPrimaryCard;
