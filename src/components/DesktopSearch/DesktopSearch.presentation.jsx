import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "./DesktopSearch.styles";

function DesktopSearchPresentation({ keyword, handleChange, handleSubmit }) {
  const classes = useStyles();

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

        <span className={`${classes.avatar}__text`}>{"text"}</span>
      </div>
    </div>
  );
}

export default DesktopSearchPresentation;
