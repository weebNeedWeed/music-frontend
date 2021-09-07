import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loading: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "#F51E38",
    zIndex: "1001",
    "&__gif": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "220px",
      height: "220px",
    },
    "&__text": {
      backgroundColor: "transparent",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      fontWeight: "bold",
      fontSize: "120%",
    },
  },
});

export default useStyles;
