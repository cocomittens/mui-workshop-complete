import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";

// icons
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ShopIcon from "@material-ui/icons/Shop";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  navigation: {
    width: "70vw",
    margin: "0 auto",
  },
  icon: {
    color: "#fff",
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar variant="dense" className={classes.navigation}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <IconButton edge="start">
              <SettingsIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton edge="end">
              <ShopIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
