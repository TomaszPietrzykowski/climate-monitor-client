import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Hidden from "@material-ui/core/Hidden";
import { datasets } from "./Datasets";
import BackIcon from "@material-ui/icons/ArrowBack";

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  //   container: {
  //     display: "flex",
  //     flexDirection: "column",
  //   },
  root: {
    display: "flex",
    maxWidth: 1200,
    margin: "auto",
  },
  titleBar: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    zIndex: theme.zIndex.drawer + 1,
    position: "fixed",
    background: theme.palette.primary.main,
  },
  sectionHeader: {
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "white",
    fontSize: "1.6rem",
    margin: "0.8rem 4rem",
  },
  drawer: {
    width: drawerWidth,
    zIndex: 1,
  },
  list: {
    marginTop: "10rem",
    marginBottom: "16rem",
    width: drawerWidth,
    // flexShrink: 0,
  },
  listItem: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: theme.palette.text.secondary,
    fontSize: "1rem",
    marginLeft: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.grey.A100,
    },
  },
  listItemActive: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: theme.palette.text.primary,
    fontSize: "1rem",
    borderLeft: "5px solid green",
    marginLeft: "1rem",
    "&:hover": {
      cursor: "default",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
    overflowX: "hidden",
  },
  content: {
    fontSize: "2rem",
    padding: "3rem",
  },
}));

const DataDisplay = ({ dataset }) => {
  const activeDataset = datasets[dataset];
  const [activeData, setActiveData] = useState(activeDataset.scopes[0]);
  const [index, setIndex] = useState(0);
  const classes = useStyles();

  const getData = async (endpoint) => {
    try {
      const res = await fetch(
        `https://api.climatemonitor.info/api/v1/chartdata/${endpoint}`
      );
      const data = await res.json();
      console.log(data.data.title);
      setActiveData(data.data);
      console.log(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleBar}>
        <div className={classes.sectionHeader}>{activeDataset.header}</div>
      </div>
      <div className={classes.root}>
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerContainer}>
              <List className={classes.list}>
                <ListItem
                  className={classes.listItem}
                  style={{ opacity: 0.7 }}
                  button
                  disableRipple
                  key={"backbutton"}
                  component={Link}
                  to="/data"
                >
                  <BackIcon />
                  Back to all data
                </ListItem>
                {activeDataset.scopes.map((scope, i) => (
                  <ListItem
                    className={
                      i === index ? classes.listItemActive : classes.listItem
                    }
                    button
                    key={scope.title}
                    onClick={() => {
                      getData(scope.endpoint);
                      setIndex(i);
                    }}
                  >
                    {scope.title}
                  </ListItem>
                ))}
                <Divider />
              </List>
            </div>
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <Toolbar />

          <h2>{activeData.title}</h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h5>{activeData.description}</h5>
          <br />
          <br />
          <h5>{activeData.lastUpdate}</h5>
          <br />
          <br />
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu sc elerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu sc elerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu sc elerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </p>
        </main>
      </div>
    </div>
  );
};

export default DataDisplay;
