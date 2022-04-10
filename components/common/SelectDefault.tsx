import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  Select,
} from "@material-ui/core";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    position: "relative",
    margin: (props: any) => props.margin || 0,
    maxWidth: (props:any) => props.maxWidth,
    "& label": {
      fontSize: 22,
      lineHeight: "26px",
      fontFamily: "DBHeaventMedv3_2",
      color: "#4D207E",
      transform: "none !important",
      position: "relative",
      marginBottom: 8,
    },
    "& .MuiInputBase-root": {
      "& select": {
        height: (props: any) => props.height || 50,
        fontSize: (props: any) => props.fontSize || 24,
        borderRadius: (props: any) => props.borderRadius || 5,
        boxShadow: (props: any) =>
          props.boxShadow || "0 0 5px rgba(0,0,0,0.10)",
        border: (props: any) => props.border || "none",
        padding: "0 20px",
        marginTop: 0,
        backgroundImage: `url(${prefix}/images/arrow_select.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 20px center",
        backgroundColor: '#fff',
      },
    },
    "& .MuiInputBase-input.Mui-disabled": {
      color: "#000",
      backgroundColor: "#F2F2F2",
    },
    "& .MuiOutlinedInput-input": {
      padding: 0,
    },
    "& .MuiInput-underline:before, .MuiInput-underline:after, legend": {
      display: "none",
    },
    "& fieldset": {
      top: 0,
      padding: 0,
      border: "none",
    },
    "& svg": {
      display: "none",
    },
  },
}));

const SelectDefault = (props: any) => {
  const { root } = useStyles(props);
  const {
    label,
    value,
    onChange,
    id,
    disabled,
    defaultValue,
    children,
    error = null,
  } = props;
  return (
    <FormControl className={`${root}`}>
      <InputLabel>{label}</InputLabel>
      <Select
        native
        value={value}
        onChange={onChange}
        id={id}
        disabled={disabled}
        defaultValue={defaultValue}
        variant="outlined"
        fullWidth
      >
        {children}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectDefault;
