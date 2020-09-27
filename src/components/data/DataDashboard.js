import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// import { datasets } from "./Datasets";
// import BackIcon from "@material-ui/icons/ArrowBack";

import DataTabs from "./DataTabs";

const drawerWidth = "360px";

const useStyles = makeStyles((theme) => ({
  titleBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    background: theme.palette.primary.main,
  },
  sectionHeader: {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: "white",
    fontSize: "1.4rem",
    marginLeft: 37,
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
    // paddingTop: "4rem",
  },
  list: {
    // marginTop: "2rem",
    marginBottom: "10rem",
    listStyle: "none",
  },
  listItem: {
    border: "1px solid transparent",
    borderRadius: 4,
    display: "flex",
    fontFamily: "Poppins",
    textDecoration: "none",
    fontWeight: 400,
    color: theme.palette.text.primary,
    fontSize: "1rem",
    margin: ".5rem 0 .5rem 2rem",
    padding: "0.8rem",
    paddingLeft: 21,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
      border: "1px solid rgba(0,0,0,.08)",
      borderRadius: 4,
    },
  },
  content: {
    fontSize: "2rem",
    padding: "3rem",
    // border: "1px solid blue",
  },
  link: {
    textDecoration: "none",
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

const DataDashboard = () => {
  // const activeDataset = datasets[dataset];
  // const [activeData, setActiveData] = useState(activeDataset.scopes[0]);
  // const [index, setIndex] = useState(0);
  // const [loading, setLoading] = useState(false);
  const classes = useStyles();

  // useEffect(() => {
  //   getData(activeDataset.scopes[0].endpoint);
  //   setIndex(0);
  //   // eslint-disable-next-line
  // }, [dataset]);

  // const getData = async (endpoint) => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch(
  //       `https://api.climatemonitor.info/api/v1/chartdata/${endpoint}`
  //     );
  //     const data = await res.json();
  //     setActiveData(data.data);
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const scrollUp = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <Fragment>
      <div className={classes.titleBar}>
        <div className={classes.sectionHeader}>All data</div>
      </div>
      {/* <Toolbar /> */}
      <div className={classes.container}>
        <Hidden mdDown>
          <div className={classes.drawer}>
            <ul className={classes.list}>
              <li>
                <Link to="/co2" className={classes.link}>
                  <div className={classes.listItem}>Carbon dioxide CO2</div>
                </Link>
              </li>

              <li>
                <Link to="/ch4" className={classes.link}>
                  <div className={classes.listItem}>Methane CH4</div>
                </Link>
              </li>

              <li>
                <Link to="/sf6" className={classes.link}>
                  <div className={classes.listItem}>
                    Sulfur hexafluoride SF6
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/n2o" className={classes.link}>
                  <div className={classes.listItem}>Dinitrogen oxide N2O</div>
                </Link>
              </li>
              <li>
                <Link to="/temperatures" className={classes.link}>
                  <div className={classes.listItem}>Temperatures</div>
                </Link>
              </li>
              <li>
                <Link to="/sealevels" className={classes.link}>
                  <div className={classes.listItem}>Sea Levels</div>
                </Link>
              </li>
              <li>
                <Link to="/glaciers" className={classes.link}>
                  <div className={classes.listItem}>Glaciers</div>
                </Link>
              </li>
            </ul>
          </div>
        </Hidden>
        <DataTabs />
      </div>
    </Fragment>
  );
};

export default DataDashboard;
