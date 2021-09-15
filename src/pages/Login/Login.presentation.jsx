import Container from "@material-ui/core/Container";
import React from "react";
import useStyles from "./Login.styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import clsx from "clsx";

function LoginPresentation({ handleSubmit, email, password, handleChange }) {
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
              <Link
                className={clsx(`${classes.redirect}__button`, "button")}
                to="/register"
              >
                {"Register now!"}
              </Link>
              <Link className={`${classes.redirect}__home`} to="/">
                {"Back to home"}
              </Link>
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Typography className={`${classes.form}__title`}>
                {"Log In"}
              </Typography>
              <Typography variant="button" className={`${classes.form}__text`}>
                {"Email"}
              </Typography>
              <input
                type="text"
                name="email"
                className={`${classes.form}__input`}
                placeholder="Email"
                required
                value={email}
                onChange={handleChange}
              />
              <Typography variant="button" className={`${classes.form}__text`}>
                {"Password"}
              </Typography>
              <input
                type="password"
                name="password"
                className={`${classes.form}__input`}
                placeholder="Password"
                required
                value={password}
                onChange={handleChange}
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
