import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "16%",
    border: "1px solid #EEEEEE",
    boxSizing: "border-box",
    backgroundColor: "#FFFFFF",
    minHeight: "100vh",
  },
  navList: {
    position: "fixed",
    marginTop: "100px",
    marginLeft: "24px",
  },
  navItem: {
    transition: theme.transitions.create(),
    display: "flex",
    justifyContent: "left",
    textDecoration: "none",
    color: "#0F1E36",
    fontSize: "16px",
    lineHeight: "16px",
    "&:not(:last-child)": {
      marginBottom: "24px",
    },
    "&__icon": {
      marginTop: "auto",
      marginBottom: "auto",
    },
    "&__text": {
      marginLeft: "10px",
      marginTop: "auto",
      marginBottom: "auto",
      fontWeight: "bold",
    },
    "&--active": {
      color: "#3E2AD1",
    },
    "&:hover": {
      color: "#3E2AD1",
    },
  },
  credit: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "16%",
    height: "70px",
    backgroundColor: "#F51E38",
    display: "flex",
    justifyContent: "center",
    paddingTop: "18px",
    textDecoration: "underline",
  },
  cIcon: {
    color: "white",
  },
}));

export default useStyles;
