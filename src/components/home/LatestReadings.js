import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import LatestCard from "./LatestCard";
import LatestPrimaryCard from "./LatestPrimaryCard";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  siteContainer: {
    maxWidth: 1200,
    margin: "auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "4rem",
  },
  latestContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "4rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "6rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
  },
  btn: {
    ...theme.typography.tab,
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

const cardData = [
  { html: "1 year ago" },
  { html: "5 years ago" },
  { html: "10 years ago" },
];

const LatestReadings = ({ setValue }) => {
  const [loading, setLoading] = useState(false);
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    getLatestCO2();
  }, []);

  const getLatestCO2 = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://api.climatemonitor.info/api/v1/chartdata/latest_co2"
      );
      const data = await res.json();
      setLatest(data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.siteContainer}>
      <div className={classes.container}>
        {loading || !latest ? (
          <p>loading</p>
        ) : (
          <Fragment>
            <LatestPrimaryCard latest={latest} />
            <div className={classes.latestContainer}>
              {cardData.map((data, i) => (
                <LatestCard
                  key={i}
                  latest={latest}
                  labelText={data.html}
                  index={i}
                />
              ))}
            </div>
            <div className={classes.btnContainer}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.btn}
                component={Link}
                to="/data"
                onClick={() => setValue(1)}
              >
                More Data
              </Button>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default LatestReadings;
