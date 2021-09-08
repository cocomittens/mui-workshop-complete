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

const useStyles = makeStyles((theme) => ({}));

const Navigation = (props) => {
  const classes = useStyles();
  // const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  // const themeRef = React.useRef(null);
  const cartRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (cartRef.current && cartRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const prevOpen = React.useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      cartRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="dense">
        <Grid container justifyContent="space-between">
          <Grid item>
            <IconButton edge="start">
              <SettingsIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton ref={cartRef} onClick={handleToggle} edge="end">
              <ShopIcon />
            </IconButton>
            <PopupMenu
              handleClose={handleClose}
              open={open}
              anchorRef={cartRef}
              items={props.cart}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
