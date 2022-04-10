import React, { useState } from "react";
import { makeStyles, Box, Button } from "@material-ui/core";
import prefix from "utils/path";

const useStyles = makeStyles(() => ({
  root: {
    width: 200,
    height: 200,
    margin: "0 auto 40px",
    position: "relative",
  },
  controlImgProfile: {
    position: "relative",
    textAlign: "center",
    marginBottom: 15,
  },
  profileTotalPoint: {
    width: "100%",
    height: "100%",
  },
  userRating: {
    width: "100%",
    height: "100%",
    borderRadius: (props: any) => props.borderradius || "100%",
    backgroundColor: "#fff",
    marginBottom: `15px`,
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: (props: any) => props.borderradius || "100%",
      objectFit: "cover",
    },
  },

  input: {
    display: "none",
  },
  circleGray: {
    minWidth: `inherit`,
    width: 55,
    height: 55,
    borderRadius: `100%`,
    backgroundColor: `#F1E5FD`,
    backgroundImage: `url(${prefix}/images/ic_camera.svg)`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    position: `absolute`,
    right: "0%",
    bottom: 0,
    boxShadow: "none",
    // "&:hover": {
    //   backgroundColor: `#1688C4`,
    // },
  },
  title: {
    marginBottom: 15,
    fontSize: 24,
    lineHeight: "30px",
    fontFamily: "DBHeaventMedv3_2",
  },
  nameUser: {
    textAlign: "center",
  },
}));

const getBase64 = (image: any, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(image);
};

const ImageProfile = (props: any) => {
  const classes = useStyles(props);
  const [imageUrl, setImageUrl] = useState("");
  const {
    handleImageChange,
    urlImgCurrent,
    value,
    name,
    nameuser,
    disabled = false,
  } = props;
  const { userRating } = useStyles(props);

  // const handleChange = async (e: any) => {
  //   const selectedFile = e.target.files[0];
  //   getBase64(selectedFile, (imageUrl: any) => {
  //     setImageUrl(imageUrl);
  //     const keyName = name != undefined ? name : "thumbnail";
  //     handleImageChange({ [keyName]: selectedFile });
  //   });
  //   getBase64(e.target.files[0], (imageUrl: any) => {
  //     setImageUrl(imageUrl);
  //     handleImageChange && handleImageChange({ thumbnail: e.target.files[0] });
  //   });
  //   return false;
  // };

  const handleChange = async (e: any) => {
    const selectedFile = e.target.files[0];
    getBase64(selectedFile, (imageUrl: any) => {
      setImageUrl(imageUrl);
      handleImageChange && handleImageChange({ thumbnail: selectedFile });
    });
    return false;
  };

  return (
    <Box className={classes.root}>
      {imageUrl !== "" ? (
        <Box className={classes.profileTotalPoint}>
          <Box className={`${userRating}`}>
            <img src={imageUrl} alt="" />
          </Box>
        </Box>
      ) : (
        <Box className={classes.profileTotalPoint}>
          <Box className={classes.userRating}>
            <img src={urlImgCurrent} alt="" />
          </Box>
        </Box>
      )}
      {disabled ? null : (
        <>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleChange}
            value={value}
            name={name}
          />
          <label htmlFor="contained-button-file">
            <Button
              className={classes.circleGray}
              variant="contained"
              component="span"
            ></Button>
          </label>
        </>
      )}

      <Box className={classes.nameUser}>{nameuser}</Box>
    </Box>
  );
};

export default ImageProfile;
