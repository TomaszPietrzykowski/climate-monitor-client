import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";
import { Spring } from "react-spring/renderprops";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    textAlign: "center",
    fontFamily: "Poppins",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
      minWidth: "auto",
    },
  },
  content: {
    padding: "0.3rem",
  },
  label: {
    fontSize: "0.9rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  value: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    fontSize: "1.8rem",
    fontWeight: 500,
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
      marginTop: "0.2rem",
      marginBottom: "0.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  smallFlex: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  ppm: {
    fontSize: "0.9rem",
    fontWeight: 300,
    marginLeft: "0.2rem",
    paddingBottom: "0.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.7rem",
      paddingBottom: "0.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.65rem",
      paddingBottom: "0.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
    },
  },
  date: {
    fontSize: "0.8rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
    },
  },
}));

const LatestCard = ({ latest, labelText, index }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.label}>
          <Hidden mdDown>
            Corresponding reading <br />{" "}
          </Hidden>
          {labelText}
        </div>
        <div className={classes.value}>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 500 + index * 1000, duration: 1500 }}
          >
            {(props) => (
              <div style={props} className={classes.smallFlex}>
                <span>{latest.values[index + 1].toFixed(2)} </span>
                <span className={classes.ppm}>ppm</span>
              </div>
            )}
          </Spring>
        </div>
        <div className={classes.date}>
          <Hidden mdDown>Measurement: </Hidden>
          {latest.labels[index + 1]}
        </div>
      </CardContent>
    </Card>
  );
};

export default LatestCard;
