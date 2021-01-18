import React from "react";
import { compose } from "redux";
import { withStyles } from "@material-ui/styles";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Styles } from "../styles";

function ApplicationAccordion({ classes }) {
  return (
    <React.Fragment>
      <Grid className={classes.accordionContainer}>
        <Accordion disabled>
          <AccordionSummary>
            <Typography className={classes.heading}>People also ask</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Accordion 1</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 4</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Typography
          className={classes.accordionFeedback}
          variant="caption"
          color="textSecondary"
          gutterBottom
        >
          Feedback
        </Typography>
      </Grid>
    </React.Fragment>
  );
}

export default compose(withStyles(Styles))(ApplicationAccordion);
