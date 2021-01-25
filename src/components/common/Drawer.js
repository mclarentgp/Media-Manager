import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Home,
  Movie,
  Theaters,
  Info,
  ChevronRight,
  ChevronLeft,
  GitHub,
} from "@material-ui/icons";
import { withRouter } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const Drawer = ({ history, onClick, open }) => {
  const classes = useStyles();
  const theme = useTheme();
  const itemsList = [
    {
      text: "Home",
      icon: <Home />,
      onListItemClick: () => history.push("/"),
    },
    {
      text: "Add Director",
      icon: <Movie />,
      onListItemClick: () => history.push("/director"),
    },
    {
      text: "Manage Media",
      icon: <Theaters />,
      onListItemClick: () => history.push("/mediaItems"),
    },
    {
      text: "About",
      icon: <Info />,
      onListItemClick: () => history.push("/about"),
    },
    {
      text: "GitHub Repository",
      icon: <GitHub />,
      onListItemClick: () =>
        (window.location.href = "https://github.com/mclarentgp/Media-Manager"),
    },
  ];
  return (
    <MUIDrawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={onClick}>
          {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onListItemClick } = item;
          return (
            <ListItem button key={text} onClick={onListItemClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

Drawer.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Drawer);
