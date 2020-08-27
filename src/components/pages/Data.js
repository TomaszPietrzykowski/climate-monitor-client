import React from "react";
import DataDisplay from "../data/DataDisplay";
import DataDashboard from "../data/DataDashboard";

const Data = ({ dataset }) => {
  return dataset ? <DataDisplay dataset={dataset} /> : <DataDashboard />;
};

export default Data;
