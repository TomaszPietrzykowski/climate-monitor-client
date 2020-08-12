import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: "center",
  },
  label: {
    fontSize: "0.9rem",
  },
  value: {
    fontSize: "1.5rem",
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
  },
});

const LatestCard = ({ latest, label1, label2, index }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.label}
          variant="body2"
          component="p"
          color="textSecondary"
        >
          {label1} <br /> {label2}
        </Typography>
        <Typography className={classes.value}>
          {latest.values[index]} ppm
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          reading: {latest.labels[index]}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LatestCard;
