import { Breadcrumbs, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import prefix from "utils/path";
// import prefix from "utils/path";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 20,
    "& a, & li": {
      fontSize: 16,
      lineHeight: "19px",
      color: "#9F9F9F",
      fontFamily: "DBHeaventv3_2",
      display: "flex",
      alignItems: "center",
      "& a:hover": {
        color: "#4D207E",
      },
      "& p": {
        fontSize: 16,
        lineHeight: "19px",
        color: "#4D207E",
        fontFamily: "DBHeaventv3_2",
      },
      "& img": {
        marginRight: 10,
        position: "relative",
        top: -1,
      },
    },
  },
}));

const BreadcrumpDefault = (props: any) => {
  const classes = useStyles();
  const { items } = props;

  const listBreadcrumb = (items: any[]) => {
    return items.map((item: any, index: number) => {
      if (index === items.length - 1) {
        return <Typography component="p">{item.title}</Typography>;
      } else if (index === 0) {
        return (
          <Link key={index} href={item.path}>
            <img
              src={`${prefix}/images/ic_breadcrump.svg`}
              alt=""
              className="iconNavi"
            />
            {item.title}
          </Link>
        );
      } else {
        return (
          <Link key={index} href={item.path}>
            {item.title}
          </Link>
        );
      }
    });
  };
  return (
    <Breadcrumbs className={classes.root} separator=">" aria-label="breadcrumb">
      {/* <Link href="/">
        <img src={`${prefix}/images/ic_breadcrump.svg`} alt="" />
        หน้าหลัก
      </Link> */}
      {listBreadcrumb(items)}
    </Breadcrumbs>
  );
};

export default BreadcrumpDefault;
