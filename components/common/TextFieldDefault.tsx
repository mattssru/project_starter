import { makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    margin: (props: any) => props.margin || 0,
    "& label , & .MuiFormLabel-root.Mui-disabled": {
      fontSize: 22,
      lineHeight: "26px",
      fontFamily: "DBHeaventMedv3_2",
      color: "#4D207E",
      transform: "none !important",
      position: "relative",
      marginBottom: 8,
    },
    "& .MuiInputBase-root": {
      "& input": {
        height: (props: any) => props.height || 50,
        fontSize: (props: any) => props.fontSize || 24,
        borderRadius: (props: any) => props.borderRadius || 5,
        boxShadow: (props: any) =>
          props.boxShadow || "0 0 5px rgba(0,0,0,0.10)",
        border: (props: any) => props.border || "none",
        padding: (props: any) => props.padding || "0 20px",
        marginTop: 0,
        backgroundColor: "#fff",
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
    "& textarea": {
      fontSize: 24,
      borderRadius: 5,
      boxShadow: "0 0 5px rgba(0,0,0,0.10)",
      border: "none",
      padding: "20px 20px !important",
      marginTop: 0,
    },
    "& .MuiOutlinedInput-multiline": {
      padding: 0,
    },
    "& fieldset": {
      top: 0,
      padding: 0,
      border: "none",
      backgroundImage: (props: any) => props.startIcon,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left 20px center",
    },
  },
}));

const TextFieldDefault = (props: any) => {
  const { root } = useStyles(props);
  const {
    label,
    placeholder,
    maskInput,
    maxLength,
    rows, // ขนาดของ TextArea
    onChange,
    value,
    defaultValue,
    type,
    required = false,
    disabled = false,
    multiline = false, // ใช้คู่กับ rows
  } = props;
  return (
    <TextField
      className={`${root}`}
      id="standard-full-width"
      label={label}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      rows={rows}
      type={type}
      onChange={onChange}
      multiline={multiline}
      value={value}
      defaultValue={defaultValue}
      fullWidth
      margin="normal"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        inputComponent: maskInput,
      }}
      inputProps={{
        maxLength: maxLength,
      }}
    />
  );
};

export default TextFieldDefault;
