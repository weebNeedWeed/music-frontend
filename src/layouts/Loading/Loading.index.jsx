import React from "react";
import LoadingPresentation from "./Loading.presentation";
import { useSelector } from "react-redux";

function Loading() {
  const selectDisplayLoading = useSelector((state) => state.ui.displayLoading);

  return selectDisplayLoading ? <LoadingPresentation /> : null;
}

export default Loading;
