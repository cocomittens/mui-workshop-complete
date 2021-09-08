import React from "react";
import Image from "material-ui-image";

import { makeStyles } from "@material-ui/core/styles";

// components
import Navigation from "./Navigation";

// mui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  optionButton: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const OptionList = (props) => {
  const { title, options } = props;
  const classes = useStyles();

  return (
    <Grid container item>
      <Grid item xs={12}>
        <Typography variant="h5" display="block">
          {title}
        </Typography>
      </Grid>
      {options.map((option) => (
        <Grid item xs={12} className={classes.optionButton}>
          <Button variant="outlined">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              p={1}
            >
              <Typography variant="h5">{option}</Typography>
              <Typography variant="h6">$999</Typography>
            </Box>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default OptionList;
