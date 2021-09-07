import React from "react";
import ReactDOM from "react-dom";
import App from "layouts/App/App.index";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider as StoreProvider } from "react-redux";
import configureStore from "redux/configureStore";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const store = configureStore();

ReactDOM.render(
  <StoreProvider store={store}>
    <Router>
      <CssBaseline />
      <SimpleBar style={{ maxHeight: "100vh" }}>
        <App />
      </SimpleBar>
    </Router>
  </StoreProvider>,
  document.getElementById("root"),
);
