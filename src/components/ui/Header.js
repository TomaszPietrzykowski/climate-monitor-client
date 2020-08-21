import React, { Fragment, useEffect, useState } from "react";
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
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
  logoContainer: {
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1rem",
    },
  },
  logo: {
    height: "2rem",
    margin: "0.8rem 0rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0rem",
      height: "1.7rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "1.5rem",
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
  iconButtonContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "0.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "0.2rem",
    },
  },
  drawerIcon: {
    height: "30px",
    width: "30px",
  },
  drawer: {
    backgroundColor: "white",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.primary.main,
    letterSpacing: 1.3,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  drawerBackground: {
    paddingRight: "3rem",
    "&:hover": {
      backgroundColor: theme.palette.action.selected,
    },
  },
  backgroundAPI: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  drawerItemAPI: {
    ...theme.typography.tab,
    letterSpacing: 1.3,
    backgroundColor: "transparent",
    color: "white",
  },
}));

const Header = ({ value, setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(false);

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

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItem
            disableRipple
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            className={classes.drawerBackground}
            selected={value === 0 ? true : false}
          >
            <ListItemText disableTypography className={classes.drawerItem}>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/data"
            className={classes.drawerBackground}
            selected={value === 1 ? true : false}
          >
            <ListItemText disableTypography className={classes.drawerItem}>
              Data
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/news"
            className={classes.drawerBackground}
            selected={value === 2 ? true : false}
          >
            <ListItemText disableTypography className={classes.drawerItem}>
              News
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/about"
            className={classes.drawerBackground}
            selected={value === 3 ? true : false}
          >
            <ListItemText disableTypography className={classes.drawerItem}>
              About
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to="/contact"
            className={classes.drawerBackground}
            selected={value === 4 ? true : false}
          >
            <ListItemText disableTypography className={classes.drawerItem}>
              Contact
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to="/public_api"
            className={classes.backgroundAPI}
          >
            <ListItemText disableTypography className={classes.drawerItemAPI}>
              Public API
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar disableGutters={matches ? true : false}>
            <Button
              disableRipple
              className={classes.logoContainer}
              component={Link}
              to="/"
              onClick={() => setValue(0)}
            >
              <img
                src={logo}
                alt="climate monitor logo"
                className={classes.logo}
              />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
