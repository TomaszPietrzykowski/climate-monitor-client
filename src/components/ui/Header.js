import React, { Fragment, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import logo from "../../assests/logotype.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
    },
  },
  logo: {
    height: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2rem",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 30,
  },
  button: {
    ...theme.typography.tab,
    borderRadius: "50px",
    color: "white",
    paddingBottom: "0.2rem",
  },
}));

const Header = ({ value, setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/data" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/news" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/public_api" && value !== 5) {
      setValue(5);
    }
    // eslint-disable-next-line
  }, [value]);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab className={classes.tab} label="Home" component={Link} to="/" />
        <Tab className={classes.tab} label="Data" component={Link} to="/data" />
        <Tab className={classes.tab} label="News" component={Link} to="/news" />
        <Tab
          className={classes.tab}
          label="About"
          component={Link}
          to="/about"
        />
        <Tab
          className={classes.tab}
          label="Contact"
          component={Link}
          to="/contact"
        />
      </Tabs>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        component={Link}
        to="/public_api"
        onClick={() => setValue(5)}
      >
        Public API
      </Button>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar disableGutters>
            <Button component={Link} to="/" onClick={() => setValue(0)}>
              <img
                src={logo}
                alt="climate monitor logo"
                className={classes.logo}
              />
            </Button>
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
