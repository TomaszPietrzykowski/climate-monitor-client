import React, { Fragment } from "react";

import Hero from "../home/Hero";
import Slogan from "../home/Slogan";
import LatestReadings from "../home/LatestReadings";
import Description from "../home/Description";
// import Separator from "../ui/Separator";
import Amazon from "../home/Amazon";
import GetInvolved from "../home/GetInvolved";

const Home = ({ setValue }) => {
  return (
    <Fragment>
      <Slogan />
      <Hero setValue={setValue} />
      <LatestReadings setValue={setValue} />
      {/* <Separator /> */}
      <Description />
      <Amazon setValue={setValue} />
      <GetInvolved setValue={setValue} />
    </Fragment>
  );
};

export default Home;
