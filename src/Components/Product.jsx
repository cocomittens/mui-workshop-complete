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
import Link from "@material-ui/core/Link";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import ImageList from "@material-ui/core/ImageList";

// icons

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
                <Typography variant="h6">Product Name</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">$999</Typography>
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
          ></Image>
        </Grid>
      </Grid>
      <Grid
        className={classes.content}
        container
        item
        xs={4}
        justifyContent="center"
      >
        <Grid item>
          <Typography variant="h1">Description</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Product;
