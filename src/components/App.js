import React, { useState } from "react";
import Header from "./common/Header";
import Drawer from "./common/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./Routes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header onClick={handleDrawerOpen} open={open} />
      <Drawer onClick={handleDrawerClose} open={open} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes />
      </main>
    </div>
  );
}

export default App;
