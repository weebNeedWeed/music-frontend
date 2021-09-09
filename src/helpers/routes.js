import React, { useEffect } from "react";
import About from "pages/About/About.index";
import Home from "pages/Home/Home.index";
import Login from "pages/Login/Login.index";
import { Switch, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as uiAction from "redux/actions/ui.action";
import Register from "pages/Register/Register.index";

export const ROUTES = [
  { path: "/", key: "HOME", exact: true, component: Home, withLayout: true },
  {
    path: "/about",
    key: "ABOUT",
    exact: true,
    component: About,
    withLayout: true,
  },
  {
    path: "/login",
    key: "LOGIN",
    exact: true,
    component: Login,
    withLayout: false,
  },
  {
    path: "/register",
    key: "REGISTER",
    exact: true,
    component: Register,
    withLayout: false,
  },
];

export function RenderRoutes() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const currentRoute = ROUTES.find((elm) => elm.path === location.pathname);
    dispatch(uiAction.changeLayoutStatus(Boolean(currentRoute?.withLayout)));
  }, [location, dispatch]);

  return (
    <Switch>
      {ROUTES.map((elm) => (
        <Route key={elm.key} path={elm.path} exact={elm.exact}>
          <elm.component />
        </Route>
      ))}
      <Route component={() => "404 error"} />
    </Switch>
  );
}
