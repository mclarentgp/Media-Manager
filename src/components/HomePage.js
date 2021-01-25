import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const HomePage = () => (
  <div className={useStyles().content}>
    <h1>Media Manager</h1>
    <p>
      This app is used to compile a collection of movies based on media format
      and director.
    </p>
  </div>
);

export default HomePage;
