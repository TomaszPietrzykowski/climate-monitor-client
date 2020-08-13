import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import LatestCard from "./LatestCard";
import LatestPrimaryCard from "./LatestPrimaryCard";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "4rem",
  },
  latestContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "4rem",
  },
}));

const cardData = [
  { html: "1 year ago (ppm)" },
  { html: "5 years ago (ppm)" },
  { html: "10 years ago (ppm)" },
];

const LatestReadings = () => {
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
        </Fragment>
      )}
    </div>
  );
};

export default LatestReadings;
