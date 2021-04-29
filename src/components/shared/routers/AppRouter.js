import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import { MenuGuard } from "../routeProtectors/MenuGuard";
import Login from "../../login/Login";
import Home from "../../home/Home";
import Register from "../../register/Register";
import Menu from "../../menu/Menu";
import Profile from "../../profile/Profile";
import Leaderboard from "../../leaderboard/Leaderboard"
import LobbyTransition from "../../lobby/LobbyTransition";
import SetTest from "../../Set/SetTest";
import LobbyCreate from "../../lobby/LobbyCreate";
import Lobby from "../../lobby/Lobby";
import LobbyJoin from "../../lobby/LobbyJoin";
import Game from "../../game/Game";
import Scoring from "../../game/Scoring";
import Recreate from "../../game/Recreate";

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
              path="/SetTest"
              exact
              render={() => (
                  <SetTest />
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
              <Route
                  path="/leaderboard"
                  exact
                  render = {() => (
                      <MenuGuard>
                          <Leaderboard />
                      </MenuGuard>
                  )}
              />
              <Route
                  path="/lobby/create"
                  exact
                  render = {() => (
                      <MenuGuard>
                          <LobbyCreate />
                      </MenuGuard>
                  )}
              />
              <Route
                  path="/lobbies/:lobbyId"
                  exact
                  render = {() => (
                      <MenuGuard>
                          <Lobby />
                      </MenuGuard>
                  )}
              />
              <Route
                path="/play"
                exact
                render = {() => (
                    <MenuGuard>
                        <LobbyTransition history={this.props.history}/>
                    </MenuGuard>
                )}
              />
            <Route
              path="/lobbies"
              exact
              render = {() => (
                <MenuGuard>
                  <LobbyJoin/>
                </MenuGuard>
              )}
            />
            <Route
              path="/game/:lobbyId"
              exact
              render = {() => (
                <MenuGuard>
                  <Game/>
                </MenuGuard>
              )}
            />
              <Route
                  path="/game/:lobbyId/scoresheet"
                  exact
                  render = {() => (
                      <MenuGuard>
                          <Scoring/>
                      </MenuGuard>
                  )}
              />
            <Route
              path="/game/:lobbyId/recreate"
              exact
              render = {() => (
                <MenuGuard>
                  <Recreate/>
                </MenuGuard>
              )}
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
