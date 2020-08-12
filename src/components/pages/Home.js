import React, { Fragment } from "react";

import Hero from "../home/Hero";
import Slogan from "../home/Slogan";
import LatestReadings from "../home/LatestReadings";

const Home = () => {
  return (
    <Fragment>
      <Slogan />
      <Hero />
      <LatestReadings />
    </Fragment>
  );
};

export default Home;
