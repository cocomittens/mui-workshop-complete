import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

// components
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({}));

const PopupMenu = (props) => {
  const classes = useStyles();
  return (
    <Popper
      open={props.open}
      anchorEl={props.anchorRef.current}
      role={undefined}
      transition
      disablePortal
      style={{ zIndex: 9999 }}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={props.handleClose}>
              <MenuList autoFocusItem={props.open} id="menu-list-grow">
                {props.items.map((item) => (
                  <MenuItem onClick={props.handleClose}>{item}</MenuItem>
                ))}
                {!props.items.length && (
                  <MenuItem onClick={props.handleClose}>
                    <Typography variant="body1">Your cart is empty.</Typography>
                  </MenuItem>
                )}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default PopupMenu;
