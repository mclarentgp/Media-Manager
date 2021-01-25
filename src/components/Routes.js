import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import PageNotFound from "./common/PageNotFound";
import MediaItemsPage from "./mediaItems/MediaItemsPage";
import ManageMediaItemPage from "./mediaItems/ManageMediaItemPage";
import CreateDirectorPage from "./directors/CreateDirectorPage";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/mediaItems" component={MediaItemsPage} />
        <Route path="/mediaItem/:slug" component={ManageMediaItemPage} />
        <Route path="/mediaItem" component={ManageMediaItemPage} />
        <Route path="/director/:slug" component={CreateDirectorPage} />
        <Route path="/director" component={CreateDirectorPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Fragment>
  );
};
export default Routes;
