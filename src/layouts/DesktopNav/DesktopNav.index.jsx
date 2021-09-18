import React from "react";
import DesktopNavPresentation from "./DesktopNav.presentation";
import { useSelector } from "react-redux";

function DesktopNav() {
  const { loggedIn } = useSelector((state) => state.auth);

  return <DesktopNavPresentation loggedIn={loggedIn} />;
}

export default DesktopNav;
