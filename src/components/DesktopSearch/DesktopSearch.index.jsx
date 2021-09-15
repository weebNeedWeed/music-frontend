import React, { useState } from "react";
import DesktopSearchPresentation from "./DesktopSearch.presentation";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function DesktopSearch() {
  const [keyword, setKeyword] = useState("");
  const selectAuthState = useSelector((state) => state.auth);
  const history = useHistory();

  const handleChange = (event) => setKeyword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      if (keyword) {
        history.push(`/search/${keyword}`);
      }
    }, 500);
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
