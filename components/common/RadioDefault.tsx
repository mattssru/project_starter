import {
  FormControlLabel,
  makeStyles,
  Radio,
  RadioProps,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles({
  root: {
    "& .MuiTypography-body1": {
      color: "#4D207E",
      fontSize: 22,
    },
  },
  checkBox: {
    color: "#4D207E",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    backgroundColor: "#f5f8fa",
    border: "1px solid #C7C8C9",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },

    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#B21F29",
    border: "none",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
  },
});

function StyledRadio(props: RadioProps) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.checkBox}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const RadioDefault = (props: any) => {
  const classes = useStyles();
  const { value, label, checked } = props;
  return (
    <FormControlLabel
      className={classes.root}
      value={value}
      control={<StyledRadio />}
      label={label}
      checked={checked}
    />
  );
};

export default RadioDefault;
