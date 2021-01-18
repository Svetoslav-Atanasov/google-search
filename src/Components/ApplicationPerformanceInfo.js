import React from "react";
import { compose } from "redux";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { Styles } from "../styles";

function ApplicationPerformanceInfo({ classes, resultsNumber, searchTime }) {
  return (
    <Typography
      className={classes.performanceInfo}
      key={`${resultsNumber}`}
      color="textSecondary"
      variant="body2"
    >
      {`About  ${resultsNumber} results in (${searchTime} seconds)`}
    </Typography>
  );
}

export default compose(withStyles(Styles))(ApplicationPerformanceInfo);
