import React, { Fragment } from "react";

import Hero from "../home/Hero";
import Slogan from "../home/Slogan";
import LatestReadings from "../home/LatestReadings";
import Description from "../home/Description";
import Separator from "../ui/Separator";

const Home = () => {
  return (
    <Fragment>
      <Slogan />
      <Hero />
      <LatestReadings />
      <Separator />
      <Description />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Fragment>
  );
};

export default Home;
