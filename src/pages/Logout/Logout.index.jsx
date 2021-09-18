import React, { useEffect } from "react";
import useStyles from "./Logout.styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Logout() {
  const classes = useStyles();
  const history = useHistory();

  const { loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loggedIn) {
      history.push("/");
    }
  }, [loggedIn, history]);

  const handleLogout = () => {
    localStorage.clear();
    location.href = "/";
  };

  const handleBack = () => {
    history.push("/");
  };

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Typography variant="h5" component="h2" className={classes.text}>
        {"Xác nhận đăng xuất ?"}
      </Typography>

      <Button
        onClick={handleLogout}
        size="small"
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        {"Logout"}
      </Button>

      <Button
        onClick={handleBack}
        size="small"
        variant="contained"
        color="default"
        className={classes.button}
      >
        {"Back to home"}
      </Button>
    </Container>
  );
}

export default Logout;
