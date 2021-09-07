import React from "react";
import Container from "@material-ui/core/Container";
import useStyles from "./Loading.styles";
import Typography from "@material-ui/core/Typography";

function LoadingPresentation() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" disableGutters className={classes.loading}>
      <img
        src={process.env.PUBLIC_URL + "/images/loading.gif"}
        alt="loading"
        className={`${classes.loading}__gif`}
      />
      <Typography className={`${classes.loading}__text`}>
        {"Loading..."}
      </Typography>
    </Container>
  );
}

export default LoadingPresentation;
