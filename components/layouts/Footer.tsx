import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Footer = () => {
  const classes = useStyles();
  return <Box className={classes.root}>Footer</Box>;
};

export default Footer;
