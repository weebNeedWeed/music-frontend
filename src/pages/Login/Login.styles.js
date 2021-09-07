import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#f8f9fa",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  form: {
    backgroundColor: "#fff",
    paddingTop: "35px",
    paddingBottom: "60px",
    paddingRight: "30px",
    paddingLeft: "30px",
    "&__title": {
      fontSize: "25px",
      fontWeight: "300",
      marginBottom: "25px",
    },
    "&__text": {
      fontSize: "13px",
    },
    "&__input": {
      width: "100%",
      borderRadius: "50px",
      outline: "none",
      padding: "13px",
      fontSize: "14px",
      marginTop: "5px",
      border: "0px",
      backgroundColor: "#f2f4f5",
      marginBottom: "22px",
    },
    "&__button": {
      backgroundImage: "linear-gradient(to right, #373B44,#4286f4)",
      border: "none",
      outline: "none",
      width: "100%",
      borderRadius: "50px",
      padding: "13px",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
      transition: theme.transitions.create(),
    },
    "& > button:hover": {
      fontWeight: "bold",
    },
  },
  redirect: {
    backgroundImage: "linear-gradient(to right, #373B44,#4286f4)",
    minHeight: "100%",
    textAlign: "center",
    paddingTop: "25%",
    paddingBottom: "25%",
    "&__title": {
      color: "#FFF",
      fontWeight: "bold",
    },
    "&__subtitle": {
      color: "#FFF",
      fontWeight: "300",
      marginBottom: "25px",
    },
    "&__button": {
      backgroundColor: "transparent",
      outline: "none",
      width: "100%",
      borderRadius: "50px",
      padding: "13px",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
      transition: theme.transitions.create(),
      textDecoration: "none",
      border: "1px solid #FFF",
    },
    "& > a:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
  },
  grid: {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderRadius: "5px",
  },
}));

export default useStyles;
