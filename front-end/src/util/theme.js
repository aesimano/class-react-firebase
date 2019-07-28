import orange from "@material-ui/core/colors/orange";
import blueGrey from "@material-ui/core/colors/blueGrey";

export default {
  palette: {
    primary: {
      light: orange[200],
      main: orange[500],
      dark: orange[700],
      contrastText: blueGrey[800]
    },
    secondary: {
      light: blueGrey[200],
      main: blueGrey[400],
      dark: blueGrey[700]
    }
    // primary: {
    //   light: "#33c9dc",
    //   main: "#00bcd4",
    //   dark: "#008394",
    //   contrastText: "#fff"
    // },
    // secondary: {
    //   light: "#ff6333",
    //   main: "#ff3d00",
    //   dark: "#b22a00",
    //   contrastText: "#fff"
    // }
  },
  typography: {
    useNextVariants: true
  },
  form: {
    textAlign: "center"
  },
  image: {
    margin: "20px auto 20px auto",
    height: 60
  },
  pageTitle: {
    margin: "10px auto 10px auto"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  button: {
    marginTop: 20,
    position: "relative"
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10
  },
  progress: {
    position: "absolute"
  },
  invisibleSeparator: {
    border: "none",
    margin: 4
  },
  visibleSeparator: {
    width: "100%",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    marginBottom: 20
  },
  paper: {
    padding: 20
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%"
      }
    },
    "& .profile-image": {
      width: 200,
      height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%"
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle"
      },
      "& a": {
        color: "#00bcd4"
      }
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0"
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px"
    }
  }
};

// export default {
//   palette: {
//     primary: {
//       light: orange[200],
//       main: orange[500],
//       dark: orange[700]
//     },
//     secondary: {
//       light: blueGrey[200],
//       main: blueGrey[400],
//       dark: blueGrey[700]
//     }
//     // primary: {
//     //   light: "#ffc947",
//     //   main: "#ff9800",
//     //   dark: "#c66900"
//     //   // main: orange[500]
//     // },
//     // secondary: {
//     //   light: "#c1d5e0",
//     //   main: "#90a4ae",
//     //   dark: "#62757f"
//     //   // main: grey[500]
//     // }
//     // secondary: blueGrey,
//     // primary: purple
//     // secondary: lightGreen
//   },
//   typography: {
//     useNextVariants: true
//   },
//   form: {
//     textAlign: "center"
//   },
//   image: {
//     margin: "20px auto 20px auto",
//     height: 60
//   },
//   pageTitle: {
//     margin: "10px auto 10px auto"
//   },
//   textField: {
//     margin: "10px auto 10px auto"
//   },
//   button: {
//     marginTop: 20,
//     position: "relative"
//   },
//   customError: {
//     color: "red",
//     fontSize: "0.8rem",
//     marginTop: 10
//   },
//   progress: {
//     // margin: theme.spacing(2),
//     position: "absolute"
//   }
// };
