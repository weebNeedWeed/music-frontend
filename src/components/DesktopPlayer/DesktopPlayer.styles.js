import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  player: {
    position: "fixed",
    bottom: 0,
    left: 0,
    height: "70px",
    width: "100%",
    zIndex: "1000",
    "&__info": {
      backgroundColor: "#F51E38",
      width: "16%",
      height: "100%",
      display: "flex",
      float: "left",
    },
    "&__image": {
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "24px",
    },
    "&__text": {
      marginTop: "14px",
      marginLeft: "8px",
      fontSize: "14px",
      fontWeight: "400",
      color: "#F69DA8",
      textDecoration: "underline",
      cursor: "pointer",
    },
    "&__main": {
      backgroundColor: "#0F1E36",
      width: "84%",
      height: "100%",
      float: "right",
      display: "flex",
    },
    "&__icon": {
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "23px",
      color: "#FFF",
      cursor: "pointer",
    },
    "&__play": {
      marginBottom: "auto",
      marginTop: "auto",
      marginLeft: "23px",
      cursor: "pointer",
    },
    "&__duration": {
      color: "white",
      opacity: "0.5",
      fontSize: "12px",
      fontWeight: "300",
      marginTop: "auto",
      marginBottom: "auto",
    },
    "&__slider": {
      marginBottom: "auto",
      marginTop: "auto",
    },
  },
});

export default useStyles;
