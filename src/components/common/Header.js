import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Typography, IconButton, Toolbar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const drawerWidth = 240;
const Theme = {
  palette: {
    primary: {
      main: "#115293",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
}));

const Header = ({ onClick, open }) => {
  const classes = useStyles();
  const theme = createMuiTheme(Theme);

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onClick}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Media Manager
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Header;
