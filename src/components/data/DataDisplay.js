import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { datasets } from "./Datasets";
import BackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";

import Content from "./Content";

const drawerWidth = "360px";

const useStyles = makeStyles((theme) => ({
  titleBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    background: theme.palette.primary.main,
  },
  sectionHeader: {
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "white",
    fontSize: "1.6rem",
    marginLeft: `${drawerWidth}`,
    padding: "1rem",
  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
    maxWidth: 1600,

    // border: "1px solid green",
  },
  drawer: {
    minWidth: drawerWidth,
    // border: "1px solid red",
    height: "100%",
    overflow: "auto",
  },
  list: {
    marginTop: "2rem",
    marginBottom: "10rem",
    listStyle: "none",
  },
  listItem: {
    display: "flex",
    fontFamily: "Poppins",
    fontWeight: 400,
    color: theme.palette.text.primary,
    fontSize: "1rem",
    margin: ".5rem 0 .5rem 2rem",
    padding: "0.8rem",
    paddingLeft: 21,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.text.secondary,
    },
  },
  listItemActive: {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: theme.palette.common.green,
    fontSize: "1rem",
    borderLeft: `5px solid ${theme.palette.common.green}`,
    margin: ".5rem 0 .5rem 2rem",
    padding: "0.8rem",
    paddingLeft: 16,
    "&:hover": {
      cursor: "default",
    },
  },
  content: {
    fontSize: "2rem",
    padding: "3rem",
    // border: "1px solid blue",
  },
  icon: {
    marginRight: "0.8rem",
  },
  btn: {
    display: "flex",
    textTransform: "none",
  },
  btnText: {
    fontFamily: "Poppins",
    fontWeight: 500,
    color: theme.palette.text.primary,
    fontSize: "1rem",
  },
}));

const DataDisplay = ({ dataset }) => {
  const activeDataset = datasets[dataset];
  const [activeData, setActiveData] = useState(activeDataset.scopes[0]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    getData(activeDataset.scopes[0].endpoint);
    setIndex(0);
    // eslint-disable-next-line
  }, [dataset]);

  const getData = async (endpoint) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.climatemonitor.info/api/v1/chartdata/${endpoint}`
      );
      const data = await res.json();
      setActiveData(data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fragment>
      <div className={classes.titleBar}>
        <div className={classes.sectionHeader}>{activeDataset.header}</div>
      </div>
      {/* <Toolbar /> */}
      <div className={classes.container}>
        <Hidden mdDown>
          <div className={classes.drawer}>
            <div className={classes.list}>
              <div className={classes.listItem} style={{ opacity: 0.7 }}>
                <Button component={Link} to="/data" className={classes.btn}>
                  <BackIcon className={classes.icon} />
                  <div className={classes.btnText}>Back to all data</div>
                </Button>
              </div>
              {activeDataset.scopes.map((scope, i) => (
                <div
                  className={
                    i === index ? classes.listItemActive : classes.listItem
                  }
                  key={scope.title}
                  onClick={() => {
                    getData(scope.endpoint);
                    setIndex(i);
                    scrollUp();
                  }}
                >
                  {scope.title}
                </div>
              ))}
            </div>
          </div>
        </Hidden>
        {loading ? <h1>fetching data</h1> : <Content activeData={activeData} />}
      </div>
    </Fragment>
  );
};

export default DataDisplay;
