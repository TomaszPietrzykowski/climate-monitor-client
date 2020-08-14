import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Spring } from "react-spring/renderprops";

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
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    fontSize: "3rem",
    fontWeight: 500,
    marginTop: "1.3rem",
    marginBottom: "1.3rem",
    color: theme.palette.primary.main,
  },
  valueSecondary: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: 500,
    marginTop: "0.5rem",
    marginBottom: "1rem",
    color: theme.palette.primary.main,
  },
  ppm: {
    fontSize: "1rem",
    fontWeight: 300,
    paddingBottom: "0.65rem",
    marginLeft: "1rem",
  },
  ppmSecondary: {
    fontSize: "0.9rem",
    fontWeight: 300,
    marginLeft: "0.6rem",
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
            <Spring
              from={{ number: 0 }}
              to={{ number: latest.values[0] }}
              config={{ tension: 300, friction: 100 }}
            >
              {(props) => <div style={props}>{props.number.toFixed(2)} </div>}
            </Spring>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{
                delay: 3000,
                duration: 1200,
              }}
            >
              {(props) => (
                <div style={props} className={classes.ppm}>
                  {" "}
                  ppm
                </div>
              )}
            </Spring>
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
            <Spring
              from={{ number: 0 }}
              to={{ number: latest.trend[0] }}
              config={{ tension: 200, friction: 100 }}
            >
              {(props) => <div style={props}>{props.number.toFixed(2)} </div>}
            </Spring>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{
                delay: 3500,
                duration: 1200,
              }}
            >
              {(props) => (
                <div style={props} className={classes.ppmSecondary}>
                  {" "}
                  ppm
                </div>
              )}
            </Spring>
          </div>
          <div className={classes.labelSecondary}>Increase since 1800:</div>
          <div className={classes.valueSecondary}>
            <Spring
              from={{ number: 0 }}
              to={{ number: parseFloat(latest.values[0] - 318).toFixed(2) }}
              config={{ delay: 3500, tension: 450, friction: 100 }}
            >
              {(props) => <div style={props}>{props.number.toFixed(2)} </div>}
            </Spring>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{
                delay: 5000,
                duration: 1000,
              }}
            >
              {(props) => (
                <div style={props} className={classes.ppmSecondary}>
                  {" "}
                  ppm
                </div>
              )}
            </Spring>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LatestPrimaryCard;
