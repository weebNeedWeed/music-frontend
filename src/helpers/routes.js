import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as uiAction from "redux/actions/ui.action";
import { matchPath } from "react-router";
import Loading from "layouts/Loading/Loading.index";

//Lazy import
const Home = lazy(() => import("pages/Home/Home.index"));
const About = lazy(() => import("pages/About/About.index"));
const Login = lazy(() => import("pages/Login/Login.index"));
const Register = lazy(() => import("pages/Register/Register.index"));
const Search = lazy(() => import("pages/Search/Search.index"));
const Logout = lazy(() => import("pages/Logout/Logout.index"));
const Playlist = lazy(() => import("pages/Playlist/Playlist.index"));

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
  {
    path: "/search/:keyword",
    key: "SEARCH",
    exact: true,
    component: Search,
    withLayout: true,
  },
  {
    path: "/logout",
    key: "LOGOUT",
    exact: true,
    component: Logout,
    withLayout: true,
  },
  {
    path: "/playlist",
    key: "PLAYLIST",
    exact: true,
    component: Playlist,
    withLayout: true,
  },
];

export function RenderRoutes() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const currentRoute = ROUTES.find((elm) => {
      const match = matchPath(location.pathname, {
        path: elm.path,
        exact: true,
        strict: false,
      });

      return Boolean(match);
    });
    dispatch(uiAction.changeLayoutStatus(Boolean(currentRoute?.withLayout)));
  }, [location, dispatch]);

  return (
    <Switch>
      {ROUTES.map((elm) => (
        <Route key={elm.key} path={elm.path} exact={elm.exact}>
          <Suspense fallback={<Loading />}>
            <elm.component />
          </Suspense>
        </Route>
      ))}
      <Route component={() => "404 error"} />
    </Switch>
  );
}
