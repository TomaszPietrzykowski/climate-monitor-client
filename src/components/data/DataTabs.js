import React from "react";
import { makeStyles } from "@material-ui/styles";
import thumb1 from "../../assets/amazon.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 1600,
    display: "flex",
    flexDirection: "column",
    marginBottom: "10rem",
  },
  container: {
    width: "100%",
    maxWidth: 1600,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "2rem",
  },
  tab: {
    height: 278,
    width: 266,
    border: "1px solid rgba(0,0,0,.12)",
    borderRadius: 4,
    margin: "2rem",
    display: "flex",
    flexDirection: "column",
  },
  tabImg: {
    flex: 1,
    width: "100%",
    backgroundSize: "cover",
    borderRadius: "4px 4px 0 0",
  },
  tabContent: {
    flex: 1,
    width: "100%",
    fontFamily: "Poppins",
    overflow: "hidden",
  },
  tabTitle: {
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.palette.text.primary,
    padding: "1.1rem 1rem .8rem 1rem",
    textAlign: "center",
  },
  tabText: {
    fontSize: "0.8rem",
    fontWeight: 400,
    color: theme.palette.text.secondary,
    padding: "0rem 1rem .6rem 1rem",
    textAlign: "justify",
  },
  header: {
    width: "100%",
    textAlign: "center",
    padding: "2rem 0 1rem 0",
    marginTop: "4rem",
    fontFamily: "Poppins",
    fontSize: "1.4rem",
    color: theme.palette.text.primary,
  },
  subHeader: {
    width: "100%",
    textAlign: "center",
    paddingBottom: "2rem",
    fontFamily: "Poppins",
    fontSize: "1rem",
    color: theme.palette.text.secondary,
  },
}));

const DataTabs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        All categories contain multiple sets of data
      </div>
      <div className={classes.subHeader}>
        availaible as a chart with adjustable scope or json API
      </div>
      <div className={classes.container}>
        <div className={classes.tab}>
          <div
            className={classes.tabImg}
            style={{ backgroundImage: `url(${thumb1})` }}
          ></div>
          <div className={classes.tabContent}>
            <div className={classes.tabTitle}>Carbon dioxide</div>
            <div className={classes.tabText}>
              Atmospheric CO2 is the most known and the most human dependant
              greenhouse gas.
            </div>
          </div>
        </div>
        <div className={classes.tab}>
          <div
            className={classes.tabImg}
            style={{ backgroundImage: `url(${thumb1})` }}
          ></div>
          <div className={classes.tabContent}>
            <div className={classes.tabTitle}>Methane</div>
            <div className={classes.tabText}>
              Carbon dioxide is the most known and the most human dependant
              greenhouse gas.
            </div>
          </div>
        </div>
        <div className={classes.tab}>
          <div
            className={classes.tabImg}
            style={{ backgroundImage: `url(${thumb1})` }}
          ></div>
          <div className={classes.tabContent}>
            <div className={classes.tabTitle}>Sulfur hexafluoride</div>
            <div className={classes.tabText}>
              Carbon dioxide is the most known and the most human dependant
              greenhouse gas.
            </div>
          </div>
        </div>
        <div className={classes.tab}>
          <div
            className={classes.tabImg}
            style={{ backgroundImage: `url(${thumb1})` }}
          ></div>
          <div className={classes.tabContent}>
            <div className={classes.tabTitle}>Dinitrous oxide</div>
            <div className={classes.tabText}>
              Carbon dioxide is the most known and the most human dependant
              greenhouse gas.
            </div>
          </div>
        </div>
        <div className={classes.tab}>
          <div
            className={classes.tabImg}
            style={{ backgroundImage: `url(${thumb1})` }}
          ></div>
          <div className={classes.tabContent}>
            <div className={classes.tabTitle}>Temperatures</div>
            <div className={classes.tabText}>
              Carbon dioxide is the most known and the most human dependant
              greenhouse gas.
            </div>
          </div>
        </div>
        <div className={classes.tab}>
          <div
            className={classes.tabImg}
            style={{ backgroundImage: `url(${thumb1})` }}
          ></div>
          <div className={classes.tabContent}>
            <div className={classes.tabTitle}>Sea levels</div>
            <div className={classes.tabText}>
              Carbon dioxide is the most known and the most human dependant
              greenhouse gas.
            </div>
          </div>
        </div>
        <div className={classes.tab}>
          <div
            className={classes.tabImg}
            style={{ backgroundImage: `url(${thumb1})` }}
          ></div>
          <div className={classes.tabContent}>
            <div className={classes.tabTitle}>Glaciers</div>
            <div className={classes.tabText}>
              Carbon dioxide is the most known and the most human dependant
              greenhouse gas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTabs;
