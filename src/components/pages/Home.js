import React, { Fragment } from "react"

import Hero from "../home/Hero"
import LatestReadings from "../home/LatestReadings"
import Description from "../home/Description"
import Amazon from "../home/Amazon"
import GetInvolved from "../home/GetInvolved"

const Home = ({ setValue }) => {
  return (
    <Fragment>
      <Hero setValue={setValue} />
      <LatestReadings setValue={setValue} />
      <Description />
      <Amazon setValue={setValue} />
      <GetInvolved setValue={setValue} />
    </Fragment>
  )
}

export default Home
