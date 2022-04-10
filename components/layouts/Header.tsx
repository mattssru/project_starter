import { AppBar, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    [theme.breakpoints.down(991)]: {
      marginBottom: 15,
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent" className={classes.root}>
      Header
    </AppBar>
  );
};

export default Header;
