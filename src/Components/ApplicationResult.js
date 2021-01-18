import React from "react";
import { compose } from "redux";
import { withStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import { Styles } from "../styles";

function ApplicationResult({ classes, title, link, date, description }) {
  return (
    <React.Fragment>
      <Grid key={`${title} - ${date}`} className={classes.resultContainer}>
        <Typography key={`${title}`} color="primary" variant="h6" noWrap>
          {title}
        </Typography>
        <Typography
          key={`${link}`}
          variant="body2"
          className={classes.resultLink}
        >
          {link}
        </Typography>
        <Typography
          key={`${date}`}
          variant="body2"
          display="inline"
          color="textSecondary"
        >
          {date}
        </Typography>
        <Typography key={`${description}`} variant="body2" display="inline">
          {description}
        </Typography>
      </Grid>
    </React.Fragment>
  );
}

export default compose(withStyles(Styles))(ApplicationResult);
