import React from "react";
import { useSelector } from "react-redux";
import AppPresentaion from "./App.presentation";
import DesktopNav from "layouts/DesktopNav/DesktopNav.index";

function App() {
  const selectDisplayLayout = useSelector((state) => state.ui.displayLayout);

  const renderNav = () => {
    if (selectDisplayLayout) {
      return <DesktopNav />;
    } else {
      return null;
    }
  };

  return (
    <AppPresentaion
      isDisplayLayout={selectDisplayLayout}
      renderNav={renderNav}
    />
  );
}

export default App;
