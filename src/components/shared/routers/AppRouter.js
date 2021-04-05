import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import { MenuGuard } from "../routeProtectors/MenuGuard";
import Login from "../../login/Login";
import Home from "../../home/Home";
import Register from "../../register/Register";
import Menu from "../../menu/Menu";
import Profile from "../../profile/Profile";

/**
 * Main router of your application.
 * In the following class, different routes are rendered. In our case, there is a Login Route with matches the path "/login"
 * and another Router that matches the route "/game".
 * The main difference between these two routes is the following:
 * /login renders another component without any sub-route
 * /game renders a Router that contains other sub-routes that render in turn other react components
 * Documentation about routing in React: https://reacttraining.com/react-router/web/guides/quick-start
 */
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route
              path="/login"
              exact
              render={() => (
                <LoginGuard>
                  <Login />
                </LoginGuard>
              )}
            />
            <Route
                path="/register"
                exact
                render={() => (
                    <LoginGuard>
                        <Register />
                    </LoginGuard>
                )}
            />
            <Route
                path="/menu"
                exact
                render = {() => (
                    <MenuGuard>
                        <Menu/>
                    </MenuGuard>
                )}
                />
            <Route path="/" exact render={() => (
                <LoginGuard>
                    <Home />
                </LoginGuard>
            )}
            />
            <Route
                path="/players/:id"
                exact
                component = {Profile}
            />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
/*
* Don't forget to export your component!
 */
export default AppRouter;
