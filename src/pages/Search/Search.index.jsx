import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchPresentation from "./Search.presentation";
import { useDispatch } from "react-redux";
import * as musicAction from "redux/actions/music.action";

function Search() {
  const { keyword } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(musicAction.searchYoutubeStart(keyword));
  }, [dispatch, keyword]);

  return <SearchPresentation keyword={keyword} />;
}

export default Search;
