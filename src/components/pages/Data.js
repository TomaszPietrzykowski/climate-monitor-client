import React from "react";
import DataDisplay from "../data/DataDisplay";
import DataDashboard from "../data/DataDashboard";

const Data = ({ dataset, setValue }) => {
  return dataset ? (
    <DataDisplay dataset={dataset} />
  ) : (
    <DataDashboard setValue={setValue} />
  );
};

export default Data;
