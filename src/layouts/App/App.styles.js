import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "100%",
  },
  page: {
    "&--desktop": {
      width: "84%",
      marginTop: "68px",
      paddingTop: "24px",
      paddingLeft: "22px",
      paddingRight: "22px",
      paddingBottom: "75px",
    },
    "&--nolayout": {
      width: "100%",
    },
  },
});

export default useStyles;
