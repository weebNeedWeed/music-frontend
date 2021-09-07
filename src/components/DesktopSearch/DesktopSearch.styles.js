import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  topBar: {
    position: "fixed",
    width: "84%",
    top: 0,
    right: 0,
    height: "67px",
    borderBottom: "1px solid rgba(15, 30, 54,0.1)",
    backgroundColor: "#FFF",
    display: "flex",
    zIndex: "9999",
  },
  search: {
    width: "75%",
    height: "100%",
    display: "flex",
    borderRight: "1px solid rgba(15, 30, 54,0.1)",
    "&__icon": {
      paddingTop: "22px",
      marginLeft: "30px",
      color: "rgba(0,0,0,0.5)",
    },
    "&__form": {
      width: "100%",
      marginTop: "auto",
      marginBottom: "auto",
      height: "100%",
      marginLeft: "9px",
    },
    "&__input": {
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      fontSize: "18px",
      color: "rgba(0,0,0,0.5)",
      paddingRight: "10px",
    },
  },
  avatar: {
    width: "15%",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    "&__icon": {
      marginLeft: "24px",
    },
    "&__text": {
      marginLeft: "11px",
      marginTop: "auto",
      marginBottom: "auto",
      color: "#000",
      fontWeight: "500",
      lineHeight: "16px",
      fontSize: "16px",
    },
  },
});

export default useStyles;
