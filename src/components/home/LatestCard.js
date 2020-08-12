import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    textAlign: "center",
    fontFamily: "Poppins",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
  label: {
    fontSize: "0.9rem",
  },
  value: {
    fontSize: "1.8rem",
    fontWeight: 500,
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
  },
  date: {
    fontSize: "0.8rem",
  },
}));

const LatestCard = ({ latest, labelText, index }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.label}>
          Corresponding reading <br /> {labelText}
        </div>
        <div className={classes.value}>{latest.values[index + 1]}</div>
        <div className={classes.date}>
          Measurement date: {latest.labels[index + 1]}
        </div>
      </CardContent>
    </Card>
  );
};

export default LatestCard;
