import About from "pages/About/About.index";
import Home from "pages/Home/Home.index";
import { Switch, Route } from "react-router-dom";

export const ROUTES = [
  { path: "/", key: "HOME", exact: true, component: Home },
  { path: "/about", key: "ABOUT", exact: true, component: About },
];

export function RenderRoutes() {
  return (
    <Switch>
      {ROUTES.map((elm) => (
        <Route
          key={elm.key}
          path={elm.path}
          exact={elm.exact}
          component={(props) => <elm.component {...props} />}
        />
      ))}
      <Route component={() => "404 error"} />
    </Switch>
  );
}
