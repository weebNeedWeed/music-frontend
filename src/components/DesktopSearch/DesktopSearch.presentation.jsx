import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "./DesktopSearch.styles";
import { Link } from "react-router-dom";

function DesktopSearchPresentation(props) {
  const classes = useStyles();
  const { keyword, handleChange, handleSubmit, loggedIn, userData } = props;

  return (
    <div className={classes.topBar}>
      <div className={classes.search}>
        <span className={`${classes.search}__icon`}>
          <SearchIcon />
        </span>

        <form className={`${classes.search}__form`} onSubmit={handleSubmit}>
          <input
            className={`${classes.search}__input`}
            placeholder="search"
            name="keyword"
            value={keyword}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className={classes.avatar}>
        <Avatar className={`${classes.avatar}__icon`} />

        {loggedIn ? (
          <span
            className={`${classes.avatar}__text`}
          >{`Hello ${userData.username}!`}</span>
        ) : (
          <Link to="/login" className={`${classes.avatar}__text`}>
            {"Click to login"}
          </Link>
        )}
      </div>
    </div>
  );
}

export default DesktopSearchPresentation;
