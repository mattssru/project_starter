import React from "react";
import {
  makeStyles,
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#4D207E",
    color: theme.palette.common.white,
    textAlign: `center`,
  },
  body: {
    fontSize: 25,
    textAlign: `center`,
    lineHeight: "25px",
  },
}))(TableCell);

const StyledTableCell_02 = withStyles((theme) => ({
  head: {
    backgroundColor: "#e96089",
    color: theme.palette.common.white,
    textAlign: `center`,
  },
  body: {
    fontSize: 25,
    textAlign: `center`,
    lineHeight: "25px",
  },
}))(TableCell);

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 15,
    "& p": {
      marginTop: 10,
    },
    "& .MuiTableContainer-root": {
      boxShadow: "none",
      borderRadius: 10,
      backgroundColor: "transparent",
      maxHeight: (props: any) => props.maxHeight,
    },
    "& table": {
      border: "none",
      marginBottom: "0",
      fontSize: "21px",
      // [theme.breakpoints.down("md")]: {
      //   width: "1400px",
      // },
      "& thead": {
        "& tr": {
          "& th": {
            height: 70,
            borderBottom: "0",
            padding: "0 5px 0 5px",
            fontFamily: "DBHeaventMedv3_2",
            fontWeight: "normal !important",
            fontSize: 20,
            color: "#fff",
            position: "sticky !important",
            top: 0,
            left: 0,
            zIndex: 2,
            "&:after": {
              content: '""',
              position: "absolute",
              width: "1px",
              height: "calc(100% - 30px)",
              backgroundColor: "#C7C8C9",
              right: 0,
              top: 15,
            },
            "&:first-child": {
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            },
            "&:last-child": {
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            },
          },
          "& th:last-child:after": {
            display: "none",
          },
        },
      },
      "& tbody": {
        "& tr": {
          borderBottom: "none",
          "& td": {
            position: "relative",
            borderBottom: "0",
            fontSize: "22px",
            height: 70,
            fontFamily: "DBHeaventv3_2",
            color: "#000",
            padding: "0 40px",
            verticalAlign: (props: any) => props.verticalalign,
            "&:after": {
              content: '""',
              position: "absolute",
              width: "1px",
              height: "calc(100% - 30px)",
              backgroundColor: "#C7C8C9",
              right: 0,
              top: 15,
            },
          },
          "& td:first-child": {
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
            paddingLeft: "30px",
          },
          "& td:last-child": {
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
          },
          "& td:last-child:after": {
            display: "none",
          },
        },
      },
      "& tr:nth-child(odd)": {
        backgroundColor: "transparent",
      },
      "& tr:nth-child(even)": {
        backgroundColor: "#F5F5F5",
      },
    },
  },
  headfont: {
    fontFamily: "DBHeaventMedv3_2",
    fontSize: "24px",
    lineHeight: "29px",
  },
  controltablehead: {
    "& tr": {
      "& th": {
        backgroundColor: (props: any) => props.backgroundcolor,
      },
    },
  },
  controltablebody: {
    "& tr": {
      height: (props: any) => props.heightbody,
      "& td:last-child": {
        color: (props: any) => props.color,
        fontSize: (props: any) => props.fontsize,
        fontFamily: (props: any) => props.fontfamily,
      },
    },
  },
  topicTable: {
    color: "#000",
    // marginBottom: "10px",
    height: "auto",
  },
}));

const TableDefault = (props: any) => {
  const classes = useStyles(props);
  const { tablehead, colspan, tablebody, topictable, remark, type = 1 } = props;
  const renderHeader = () => {
    if (type === 1) {
      return (
        <TableRow>
          {tablehead.map((row: any, index: any) => (
            <StyledTableCell colSpan={colspan} key={index}>
              <Box className={classes.headfont}>{row}</Box>
            </StyledTableCell>
          ))}
        </TableRow>
      );
    } else {
      return (
        <TableRow>
          {tablehead.map((row: any, index: any) => (
            <StyledTableCell_02 colSpan={colspan} key={index}>
              <Box className={classes.headfont}>{row}</Box>
            </StyledTableCell_02>
          ))}
        </TableRow>
      );
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.topicTable}>
        {topictable}
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.root} aria-label="customized table">
          <TableHead className={classes.controltablehead}>
            {renderHeader()}
          </TableHead>
          <TableBody className={classes.controltablebody}>
            {tablebody}
          </TableBody>
        </Table>
      </TableContainer>
      <p>{remark}</p>
    </Box>
  );
};

export default TableDefault;
