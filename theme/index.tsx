import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        fontFamily: "DBHeaventMedv3_2",
        fontWeight: "normal",
      },
    },
    MuiFormHelperText: {
      contained: {
        fontSize: `18px`,
        lineHeight: `18px`,
      },
      root: {
        fontSize: `18px`,
        lineHeight: `18px`,
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          WebkitFontSmoothing: "auto",
          fontFamily: "DBHeaventv3_2",
          fontSize: "28px",
          maxWidth: "1920px",
          color: "#000000",
          backgroundImage: "url(/static/images/bg-green.png)",
          backgroundColor: "#fff",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "auto",
          "@media (max-width: 1024px)": {
            backgroundSize: "70vw auto",
          },
          "@media (max-width: 767px)": {
            backgroundSize: "40% auto",
          },
        },
        article: {
          overflow: "hidden",
        },
        ".MuiContainer-root": {
          padding: "0 15px !important",
        },
        ".MuiToolbar-gutters": {
          padding: "0 15px !important",
        },
        ".MuiLink-root": {
          textDecoration: "none",
          cursor: "pointer",
        },
        ".MuiToolbar-root .MuiContainer-root": {
          "@media (max-width: 767px)": {
            padding: "0 !important",
          },
        },
        ".MuiInputBase-root": {
          fontFamily: "DBHeaventv3_2 !important",
        },

        ".MuiTableCell-root": {
          fontFamily: "DBHeavent",
          fontWeight: "normal !important",
        },
        a: {
          textDecoration: "none",
          curser: "pointer",
          MozTransition: "all .2s ease-in",
          WebkitTransition: "all .2s ease-in",
          transition: "all .2s ease-in",
        },
        "&:focus, &:hover, &:visited, &:link, &:active": {
          textDecoration: "none",
        },
        MuiButton: {
          text: {
            color: "white",
          },
        },
        strong: {
          fontFamily: "DBHeaventMedv3_2",
          fontWeight: "normal",
        },

        button: {
          fontFamily: "DBHeaventMedv3_2",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#7A4F9F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFBA00",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      contrastText: "#fff",
    },
    info: {
      main: "#1778F2",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "DBHeaventv3_2",

    h1: {
      fontFamily: "DBHeaventMedv3_2",
      fontSize: 60,
      lineHeight: "60px",
      fontWeight: "normal",
    },
    h2: {
      fontFamily: "DBHeaventMedv3_2",
      fontSize: 30,
      lineHeight: "30px",
      fontWeight: "normal",
    },
    h3: {
      fontFamily: "DBHeaventMedv3_2",
      fontWeight: "normal",
    },
    h4: {
      fontFamily: "DBHeaventMedv3_2",
      fontWeight: "normal",
    },
    h5: {
      fontFamily: "DBHeaventMedv3_2",
      fontWeight: "normal",
    },
    h6: {
      fontFamily: "DBHeaventMedv3_2",
      fontWeight: "normal",
    },
    body1: {
      fontSize: "24px",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "21px",
      lineHeight: "21px",
    },
  },
  shape: {
    borderRadius: 12,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 991,
      lg: 1280,
      xl: 1920,
      // xs: 0,
      // sm: 767,
      // md: 1024,
      // lg: 1280,
      // xl: 1920,
    },
  },
});

export default theme;
