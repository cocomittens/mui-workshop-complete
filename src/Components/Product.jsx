import React from "react";

import "../Styles/App.css";

// components
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

const Product = () => {
  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item xs={12}>
        <Toolbar>
          <Typography variant="h6">Navigation</Typography>
        </Toolbar>
      </Grid>
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Product Name</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={5}>
        Image
      </Grid>
      <Grid item xs={4}>
        Description
      </Grid>
    </Grid>
  );
};

export default Product;
