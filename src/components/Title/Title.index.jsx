import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Title.styles";
import clsx from "clsx";

function Title({ className, ...props }) {
  const classes = useStyles();

  return (
    <Typography
      component="h2"
      className={clsx(classes.title, className)}
      {...props}
    >
      {props.children}
    </Typography>
  );
}

export default Title;
