import React from "react"
import DataDisplay from "../data/DataDisplay"
import DataDashboard from "../data/DataDashboard"

const Data = ({ match, setValue }) => {
  const dataset = match.params.dataset
  return match.params.dataset ? (
    <DataDisplay dataset={dataset} />
  ) : (
    <DataDashboard setValue={setValue} />
  )
}

export default Data
