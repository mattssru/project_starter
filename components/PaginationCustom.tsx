import { Box, makeStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React from "react";

const useStyles = makeStyles((theme: any) => ({
  root: {
    margin: (props: any) => props.margin,
    "& ul": {
      justifyContent: "center",
      marginBottom: 15,
    },
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: "#F1E5FD",
      color: "#4D207E",
      border: "none",
    },
    "& .MuiPaginationItem-root": {
      width: 40,
      height: 40,
      fontSize: "20px",
      borderRadius: "100%",
      border: "none",
      color: "#404040",
      fontFamily: "DBHeaventv3_2",
      "& svg": {
        fontSize: "30px",
        color: "#95989A",
        // fontFamily: "DBHeavent_BoldCond",
      },
      [theme.breakpoints.down("xs")]: {
        width: 30,
        height: 30,
        fontSize: 26,
      },
    },
    "& .MuiPaginationItem-ellipsis": {
      height: "auto",
      border: "none",
    },
    "& .MuiPaginationItem-page.Mui-disabled": {
      // backgroundColor: "#E1E8EB",
      barder: "none",
      border: "none",
      "& svg": {
        fontSize: "30px",
        color: "#95989A",
        // fontFamily: "DBHeavent_BoldCond",
      },
    },
  },
  textPagin: {
    fontSize: "24px",
    lineHeight: "24px",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 22,
    },
  },
}));

const PaginationCustom = (props: any) => {
  const classes = useStyles(props);
  const { root } = useStyles(props);
  const { count, boundaryCount, siblingCount, textpagin } = props;
  const handleChange = (_event: object, page: number) => {
    props.onChangePage(page);
  };
  return (
    <Box className={`${root}`}>
      <Pagination
        count={count}
        boundaryCount={boundaryCount}
        siblingCount={siblingCount}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
      <Box className={classes.textPagin}>{textpagin}</Box>
    </Box>
  );
};

export default PaginationCustom;
