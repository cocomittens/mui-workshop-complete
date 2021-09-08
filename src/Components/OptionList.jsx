import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

// mui components
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  list: { marginBottom: theme.spacing(1) },
  selected: { borderColor: theme.palette.secondary.main },
}));

const OptionList = (props) => {
  const { options, clickHandler } = props;
  const classes = useStyles();

  return (
    <Grid
      className={classes.list}
      container
      item
      justifyContent="space-between"
      alignContent="flex-start"
      spacing={1}
    >
      <Grid item xs={12}>
        <Divider />
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
      </Grid>
      {options.map((option, i) => (
        <Grid
          item
          xs={props.columns > 1 ? 6 : 12}
          className={classes.optionButton}
          key={i}
        >
          <Button
            variant="outlined"
            onClick={() => {
              props.optionValues
                ? clickHandler(props.optionValues[i])
                : clickHandler(option);
            }}
            className={
              (props.selected === option ||
                (props.optionValues &&
                  props.selected === props.optionValues[i])) &&
              classes.selected
            }
            disabled={props.disabled}
          >
            <Box
              display="flex"
              flexDirection={props.direction}
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              p={1}
            >
              <Typography variant="h5">{option}</Typography>
              {props.secondaryOptions && (
                <Typography variant="h6">
                  {props.secondaryOptions[i]}
                </Typography>
              )}
            </Box>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default OptionList;
