import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Spring } from "react-spring/renderprops";

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
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    fontSize: "1.8rem",
    fontWeight: 500,
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
  },
  ppm: {
    fontSize: "0.9rem",
    fontWeight: 300,
    marginLeft: "0.6rem",
    paddingBottom: "0.5rem",
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
        <div className={classes.value}>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 500 + index * 1000, duration: 1500 }}
          >
            {(props) => (
              <div style={props}>
                {latest.values[index + 1].toFixed(2)}{" "}
                <span className={classes.ppm}> ppm</span>
              </div>
            )}
          </Spring>
        </div>
        <div className={classes.date}>
          Measurement date: {latest.labels[index + 1]}
        </div>
      </CardContent>
    </Card>
  );
};

export default LatestCard;
