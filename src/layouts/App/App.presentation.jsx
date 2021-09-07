import Container from "@material-ui/core/Container";
import React from "react";
import useStyles from "./App.styles";
import { RenderRoutes } from "helpers/routes";
import Loading from "layouts/Loading/Loading.index";

function AppPresentaion(props) {
  const classes = useStyles();
  const { renderNav, isDisplayLayout } = props;
  const layoutClass = isDisplayLayout
    ? `${classes.page}--desktop`
    : `${classes.page}--nolayout`;

  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      className={classes.container}
    >
      {renderNav()}

      <div className={layoutClass}>{RenderRoutes()}</div>

      <Loading />
    </Container>
  );
}

export default AppPresentaion;
