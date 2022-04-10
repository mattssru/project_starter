import { Dialog, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiBackdrop-root": {
      backgroundColor: "#000",
      opacity: "0.7 !important",
    },
    "& .MuiDialog-paperScrollPaper": {
      backgroundColor: "#fff",
      borderRadius: 10,
      width: "100%",
      padding: 45,
      maxWidth: (props: any) => props.maxWidth || 500,
    },
  },
}));

const DialogCommon = (props: any) => {
  const { open, onClose, children } = props;
  const { root } = useStyles(props);
  return (
    <Dialog
      className={`${root}`}
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {children}
    </Dialog>
  );
};

export default DialogCommon;
