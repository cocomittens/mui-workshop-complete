import React from "react";
import Image from "material-ui-image";

import { makeStyles } from "@material-ui/core/styles";
import OptionList from "./OptionList";

// components
import Navigation from "./Navigation";

// mui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  subheader: {
    width: "70vw",
    margin: "0 auto",
  },
  content: {
    padding: theme.spacing(4),
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    borderRadius: "5vw",
    maxHeight: "60vh",
  },
}));

const Product = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" spacing={0}>
      <Grid item xs={12}>
        <Navigation />
      </Grid>
      <Grid item xs={12}>
        <AppBar position="static" color="transparent" elevation={1}>
          <Toolbar className={classes.subheader}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">Pet Name</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">$999</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid
        className={classes.content}
        container
        item
        xs={5}
        justifyContent="center"
      >
        <Grid item className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={process.env.PUBLIC_URL + "/images/cats/cat1.jpg"}
            color="transparent"
            cover
          />
        </Grid>
      </Grid>
      <Grid
        className={classes.content}
        container
        item
        xs={4}
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignContent="flex-start"
          width="100%"
        >
          <Typography variant="h2">Buy Pet</Typography>
          <Typography variant="subtitle1">Cool fun animal</Typography>
        </Box>
        <OptionList title="Species" options={["cat", "dog", "capybara"]} />
        <OptionList title="Color" options={["cat", "dog", "capybara"]} />
        <OptionList title="Personality" options={["cat", "dog", "capybara"]} />
        <Button variant="contained">
          <Typography variant="button">Add to Cart</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Product;
