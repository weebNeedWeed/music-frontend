import Container from "@material-ui/core/Container";
import React from "react";
import useStyles from "./Register.styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import clsx from "clsx";

function RegisterPresentation(props) {
  const classes = useStyles();
  const {
    username,
    password,
    email,
    confirmPassword,
    handleSubmit,
    handleChange,
  } = props;

  return (
    <Container maxWidth="xl" disableGutters className={classes.container}>
      <Container maxWidth="md" className={classes.wrapper}>
        <Grid container className={classes.grid}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <div className={classes.redirect}>
              <Typography
                variant="h4"
                className={`${classes.redirect}__title`}
                gutterBottom
              >
                {"Welcome to Register"}
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${classes.redirect}__subtitle`}
              >
                {"Have an account ?"}
              </Typography>
              <Link
                className={clsx(`${classes.redirect}__button`, "button")}
                to="/login"
              >
                {"Login now!"}
              </Link>
              <Link className={`${classes.redirect}__home`} to="/">
                {"Back to home"}
              </Link>
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Typography className={`${classes.form}__title`}>
                {"Register"}
              </Typography>

              <Typography variant="button" className={`${classes.form}__text`}>
                {"Email"}
              </Typography>
              <input
                type="email"
                name="email"
                className={`${classes.form}__input`}
                placeholder="Email"
                required
                value={email}
                onChange={handleChange}
              />

              <Typography variant="button" className={`${classes.form}__text`}>
                {"Username"}
              </Typography>
              <input
                type="text"
                name="username"
                className={`${classes.form}__input`}
                placeholder="Username"
                required
                value={username}
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

              <Typography variant="button" className={`${classes.form}__text`}>
                {"Confirm password"}
              </Typography>
              <input
                type="password"
                name="confirmPassword"
                className={`${classes.form}__input`}
                placeholder="Confirm password"
                required
                value={confirmPassword}
                onChange={handleChange}
              />

              <button type="submit" className={`${classes.form}__button`}>
                {"Register"}
              </button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default RegisterPresentation;
