import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

// mui components
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({}));

const OptionList = (props) => {
  const classes = useStyles();

  return (
    <Grid
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
      {props.options.map((option, i) => (
        <Grid item xs={props.columns > 1 ? 6 : 12} key={i}>
          <Button
            variant="outlined"
            onClick={() => {
              props.optionValues
                ? props.clickHandler(props.optionValues[i])
                : props.clickHandler(option);
            }}
            disabled={props.disabled}
          >
            <Typography variant="h5">{option}</Typography>
            {props.secondaryOptions && (
              <Typography variant="h6">{props.secondaryOptions[i]}</Typography>
            )}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default OptionList;
