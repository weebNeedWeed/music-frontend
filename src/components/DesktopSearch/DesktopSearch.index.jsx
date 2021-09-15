import React, { useState } from "react";
import DesktopSearchPresentation from "./DesktopSearch.presentation";
import { useHistory } from "react-router-dom";

function DesktopSearch() {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const handleChange = (event) => setKeyword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (keyword) {
      history.push(`/search/${keyword}`);
    }
  };

  return (
    <DesktopSearchPresentation
      handleSubmit={handleSubmit}
      keyword={keyword}
      handleChange={handleChange}
    />
  );
}

export default DesktopSearch;
