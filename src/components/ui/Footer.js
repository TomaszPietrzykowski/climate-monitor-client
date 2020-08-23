import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";

import bear from "../../assests/bear.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.footer,
    width: "100%",
    minHeight: "14rem",
    marginLeft: 0,
    zIndex: 1302,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      minHeight: "4rem",
    },
  },
  footerImg: {
    height: "14rem",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      height: "13rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "4rem",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  gridItem: {
    margin: "2rem",
    [theme.breakpoints.down("md")]: {
      margin: "1rem",
    },
  },
  link: {
    ...theme.typography.tab,
    color: theme.palette.text.secondary,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
}));

const Footer = ({ setValue }) => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Hidden smDown>
        <Grid container className={classes.mainContainer} justify="center">
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={1}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/"
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={1}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/data"
                onClick={() => setValue(1)}
              >
                All data
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/co2"
                onClick={() => setValue(1)}
              >
                Carbon dioxide CO2
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/ch4"
                onClick={() => setValue(1)}
              >
                Methane CH4
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/sf6"
                onClick={() => setValue(1)}
              >
                Sulfur hexafluoride SF6
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/n2o"
                onClick={() => setValue(1)}
              >
                Dinitrogen oxide N2O
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={1}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/temperatures"
                onClick={() => setValue(1)}
              >
                Temperatures
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/sealevels"
                onClick={() => setValue(1)}
              >
                Sea levels
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/glaciers"
                onClick={() => setValue(1)}
              >
                Glaciers
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={1}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/news"
                onClick={() => setValue(2)}
              >
                Newsfeed
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
              >
                About
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/public_api"
                onClick={() => setValue(5)}
              >
                Public API
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={1}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/contact"
                onClick={() => setValue(4)}
              >
                Contact
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img src={bear} alt="polar bear" className={classes.footerImg} />
    </div>
  );
};

export default Footer;
