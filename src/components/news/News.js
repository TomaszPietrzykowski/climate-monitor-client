import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const News = ({ setValue }) => {
  return (
    <div>
      <div style={{ marginTop: "100rem" }}></div>
      <Button component={Link} to="/" onClick={() => setValue(0)}>
        Go home
      </Button>
    </div>
  );
};

export default News;
