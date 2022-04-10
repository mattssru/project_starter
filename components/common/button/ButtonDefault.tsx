import { Button, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontFamily: "DBHeaventMedv3_2",
    color: (props: any) => props.colorFont || "#fff",
    display: (props: any) => props.display || "flex",
    justifyContent: (props: any) => props.justifyContent,
    height: (props: any) => props.height || 50,
    fontSize: (props: any) => props.fontSize || 28,
    maxWidth: (props: any) => props.maxWidth,
    minWidth: (props: any) => props.minWidth || 55,
    border: (props: any) => props.border,
    borderRadius: (props: any) => props.borderRadius || 5,
    boxShadow: (props: any) => props.boxshadow || "none !important",
    margin: (props: any) => props.margin,
    background: (props: any) => props.background,
    backgroundColor: (props: any) => props.backgroundColor,
    position: (props: any) => props.position,
    top: (props: any) => props.top,
    bottom: (props: any) => props.bottom,
    left: (props: any) => props.left,
    right: (props: any) => props.right,
    zIndex: (props: any) => props.zindex,
    [theme.breakpoints.down("xs")]: {},
    "&:hover": {
      backgroundColor: (props: any) => props.backgroundColorHover || "#888",
      background: (props: any) =>
        props.backgroundHover || "linear-gradient(to top, #888, #888)",
      color: (props: any) => props.colorhover,
      "& svg path": {
        stroke: "#fff",
      },
      "& svg": {
        color: "#fff !important",
      },
    },
    "& .MuiButton-startIcon": {
      margin: (props: any) => props.marginIcon,
    },
    "& svg": {
      fontSize: (props: any) => props.fontSizeicon,
    },
  },
  disabled: {},
}));

const ButtonDefault = (props: any) => {
  const classes = useStyles(props);
  const { root } = useStyles(props);
  const {
    title,
    disabled,
    startIcon,
    endIcon,
    onClick,
    color,
    href,
    onClose,
    ...rest
  } = props;
  return (
    <Button
      className={`${root}`}
      variant="contained"
      color={color}
      href={href}
      classes={{
        disabled: classes.disabled,
      }}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      {...rest}
    >
      {title}
    </Button>
  );
};
export default ButtonDefault;
