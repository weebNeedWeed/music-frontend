import React, { useState } from "react";
import DesktopSearchPresentation from "./DesktopSearch.presentation";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as musicAction from "redux/actions/music.action";

function DesktopSearch() {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const selectAuthState = useSelector((state) => state.auth);
  const history = useHistory();

  const handleChange = (event) => setKeyword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(musicAction.unloadMusic());
    if (keyword) {
      setTimeout(() => {
        history.push(`/search/${keyword}`);
      }, 500);
    }
  };

  return (
    <DesktopSearchPresentation
      handleSubmit={handleSubmit}
      keyword={keyword}
      handleChange={handleChange}
      loggedIn={selectAuthState.loggedIn}
      userData={selectAuthState.userData}
    />
  );
}

export default DesktopSearch;
