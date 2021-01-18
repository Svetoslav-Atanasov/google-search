import React from "react";
import { compose } from "redux";
import { withStyles } from "@material-ui/styles";
import { Tabs, Tab } from "@material-ui/core";
import classnames from "classnames";
import { Styles } from "../styles";

function ApplicationTabs({ classes }) {
  const value = 0;

  return (
    <React.Fragment>
      <Tabs
        value={value}
        inkbarstyle={{ background: "green" }}
        indicatorColor="primary"
        className={classes.tabsContainer}
      >
        <Tab
          label="All"
          className={classnames(
            classes.allTabs,
            classes.tabSearchIconColor,
            classes.allTab
          )}
        />
        <Tab label="Images" className={classes.allTabs} disabled />
        <Tab label="News" className={classes.allTabs} disabled />
        <Tab label="Videos" className={classes.allTabs} disabled />
        <Tab
          label="More"
          className={classnames(classes.allTabs, classes.moreTab)}
          disabled
        />
        <Tab label="Settings" className={classes.allTabs} disabled />
        <Tab label="Tools" className={classes.allTabs} disabled />
      </Tabs>
    </React.Fragment>
  );
}

export default compose(withStyles(Styles))(ApplicationTabs);
