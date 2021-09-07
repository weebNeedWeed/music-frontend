import Container from "@material-ui/core/Container";
import React from "react";
import useStyles from "./App.styles";
import DesktopNav from "layouts/DesktopNav/DesktopNav.index";
import { RenderRoutes } from "helpers/routes";
import clsx from "clsx";

function App() {
  const classes = useStyles();
  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      className={classes.container}
    >
      <DesktopNav />
      <div className={clsx(`${classes.page}--desktop`)}>{RenderRoutes()}</div>
    </Container>
  );
}

export default App;
