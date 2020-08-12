import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import LatestCard from "./LatestCard";

const useStyles = makeStyles((theme) => ({
  latestContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "2rem",
  },
}));

const cardData = [
  { html1: "Latest atmospheric", html2: "Carbon Dioxide (CO2)" },
  { html1: "Corresponding reading", html2: "1 year ago" },
  { html1: "Corresponding reading", html2: "5 years ago" },
  { html1: "Corresponding reading", html2: "10 years ago" },
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
        "http://localhost:5000/api/v1/chartdata/latest_co2"
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
    <div className={classes.latestContainer}>
      {loading || !latest ? (
        <p>loading</p>
      ) : (
        cardData.map((data, i) => (
          <LatestCard
            key={i}
            latest={latest}
            label1={data.html1}
            label2={data.html2}
            index={i}
          />
        ))
      )}
    </div>
  );
};

export default LatestReadings;
