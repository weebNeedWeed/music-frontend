import Container from "@material-ui/core/Container";
import React from "react";
import useStyles from "./Login.styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

function LoginPresentation() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" disableGutters className={classes.container}>
      <Container maxWidth="md" className={classes.wrapper}>
        <Grid container direction="row-reverse" className={classes.grid}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <div className={classes.redirect}>
              <Typography
                variant="h4"
                className={`${classes.redirect}__title`}
                gutterBottom
              >
                {"Welcome to login"}
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${classes.redirect}__subtitle`}
              >
                {"Don't have an account"}
              </Typography>
              <Link className={`${classes.redirect}__button`} to="/">
                {"Register now!"}
              </Link>
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <form className={classes.form}>
              <Typography className={`${classes.form}__title`}>
                {"Log In"}
              </Typography>
              <Typography variant="button" className={`${classes.form}__text`}>
                {"Username"}
              </Typography>
              <input
                type="text"
                name="username"
                className={`${classes.form}__input`}
                placeholder="Username"
              />
              <Typography variant="button" className={`${classes.form}__text`}>
                {"Password"}
              </Typography>
              <input
                type="password"
                name="password"
                className={`${classes.form}__input`}
                placeholder="Password"
              />

              <button type="submit" className={`${classes.form}__button`}>
                {"Log In"}
              </button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default LoginPresentation;
