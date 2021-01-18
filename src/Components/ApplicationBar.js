import React from "react";
import { compose } from "redux";
import { withStyles } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  InputBase,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Styles } from "../styles";

function ApplicationBar({ classes, handleChange, searchTerm }) {
  return (
    <React.Fragment>
      <AppBar position="static" className={classes.tabsContainer}>
        <Toolbar>
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            className={classes.logo}
            alt="logo"
          />
          <Grid className={classes.searchAndIconsContainer}>
            <Grid className={classes.search}>
              <InputBase
                className={classes.input}
                value={searchTerm}
                onChange={handleChange}
              />
              <Button>
                <SearchIcon className={classes.tabSearchIconColor} />
              </Button>
            </Grid>
            <Grid>
              <IconButton>
                <AppsIcon />
              </IconButton>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default compose(withStyles(Styles))(ApplicationBar);
