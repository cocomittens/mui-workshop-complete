import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

import PopupMenu from "./PopupMenu";

// icons
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
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="dense" className={classes.navigation}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <IconButton edge="start" ref={anchorRef} onClick={handleToggle}>
              <SettingsIcon />
            </IconButton>
            <PopupMenu
              handleClose={handleClose}
              open={open}
              anchorRef={anchorRef}
            />
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
