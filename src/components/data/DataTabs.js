import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Link } from "react-router-dom"
import thumb01 from "../../assets/co2tab.jpg"
import thumb02 from "../../assets/ch4tab.jpg"
import thumb03 from "../../assets/sf6tab.jpg"
import thumb04 from "../../assets/n2otab.jpg"
import thumb05 from "../../assets/temperaturestab.jpg"
import thumb06 from "../../assets/sealevelstab.jpg"
import thumb07 from "../../assets/glacierstab.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 1600,
    display: "flex",
    flexDirection: "column",
    marginBottom: "10rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "4rem",
    },
  },
  container: {
    width: "100%",
    maxWidth: 1600,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "2rem 0",
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
      paddingTop: 0,
    },
  },
  link: {
    textDecoration: "none",
  },
  tab: {
    height: 278,
    maxWidth: 266,
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover $tabImg": {
      opacity: 1,
    },
    "&:hover $tabText": {
      color: theme.palette.primary.dark,
    },
    "&:hover $tabTitle": {
      color: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
      marginTop: "3rem",
    },
  },
  tabImg: {
    flex: 1,
    width: "100%",
    backgroundSize: "cover",
    borderRadius: "4px 4px 0 0",
    opacity: 0.7,
    [theme.breakpoints.down("md")]: {
      opacity: 1,
    },
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
    padding: "1.1rem 1rem .8rem 0rem",
    textAlign: "left",
  },
  tabText: {
    fontSize: "0.85rem",
    fontWeight: 400,
    color: theme.palette.text.secondary,
    padding: "0rem 1rem .6rem 0rem",
    textAlign: "left",
  },
  header: {
    width: "100%",
    textAlign: "center",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    marginTop: "4rem",
    fontFamily: "Poppins",
    fontSize: "1.4rem",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
      marginTop: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}))

const DataTabs = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        Categories contain multiple sets of data
      </div>
      <div className={classes.container}>
        <Link to="/data/co2" className={classes.link}>
          <div className={classes.tab}>
            <div
              className={classes.tabImg}
              style={{ backgroundImage: `url(${thumb01})` }}
            ></div>
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Carbon dioxide</div>
              <div className={classes.tabText}>
                Atmospheric CO2 is the most known and the most human dependant
                greenhouse gas.
              </div>
            </div>
          </div>
        </Link>
        <Link to="/data/ch4" className={classes.link}>
          <div className={classes.tab}>
            <div
              className={classes.tabImg}
              style={{ backgroundImage: `url(${thumb02})` }}
            ></div>
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Methane</div>
              <div className={classes.tabText}>
                Greenhouse gas 30 to 70 times more potent then carbon dioxide.
                Assiciated e.g. with agriculture.
              </div>
            </div>
          </div>
        </Link>
        <Link to="/data/sf6" className={classes.link}>
          <div className={classes.tab}>
            <div
              className={classes.tabImg}
              style={{ backgroundImage: `url(${thumb03})` }}
            ></div>
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Sulfur hexafluoride</div>
              <div className={classes.tabText}>
                Carbon dioxide is the most known and the most human dependant
                greenhouse gas.
              </div>
            </div>
          </div>
        </Link>
        <Link to="/data/n2o" className={classes.link}>
          <div className={classes.tab}>
            <div
              className={classes.tabImg}
              style={{ backgroundImage: `url(${thumb04})` }}
            ></div>
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Dinitrogen oxide</div>
              <div className={classes.tabText}>
                Carbon dioxide is the most known and the most human dependant
                greenhouse gas.
              </div>
            </div>
          </div>
        </Link>
        <Link to="/data/temperatures" className={classes.link}>
          <div className={classes.tab}>
            <div
              className={classes.tabImg}
              style={{ backgroundImage: `url(${thumb05})` }}
            ></div>
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Temperatures</div>
              <div className={classes.tabText}>
                Carbon dioxide is the most known and the most human dependant
                greenhouse gas.
              </div>
            </div>
          </div>
        </Link>
        <Link to="/data/sealevels" className={classes.link}>
          <div className={classes.tab}>
            <div
              className={classes.tabImg}
              style={{ backgroundImage: `url(${thumb06})` }}
            ></div>
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Sea levels</div>
              <div className={classes.tabText}>
                Carbon dioxide is the most known and the most human dependant
                greenhouse gas.
              </div>
            </div>
          </div>
        </Link>
        <Link to="/data/glaciers" className={classes.link}>
          <div className={classes.tab}>
            <div
              className={classes.tabImg}
              style={{ backgroundImage: `url(${thumb07})` }}
            ></div>
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Glaciers</div>
              <div className={classes.tabText}>
                Carbon dioxide is the most known and the most human dependant
                greenhouse gas.
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DataTabs
