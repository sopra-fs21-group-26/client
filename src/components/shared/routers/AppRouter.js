import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import { MenuGuard } from "../routeProtectors/MenuGuard";
import { LobbyGuard } from "../routeProtectors/LobbyGuard";
import { InGameGuard } from "../routeProtectors/InGameGuard";
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
import GuessScreen from "../../game/GuessScreen";
import End from "../../game/End";
import Set2Test from "../../Set/Set2Test";
import Set3Test from "../../Set/Set3Test";
import Set4Test from "../../Set/Set4Tes";

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
              path="/game/:lobbyId/recreate/1"
              exact
              render={() => (
                  <SetTest />
              )}
            />
            <Route
              path="/game/:lobbyId/recreate/2"
              exact
              render={() => (
                <Set2Test />
              )}
            />
            <Route
              path="/game/:lobbyId/recreate/3"
              exact
              render={() => (
                <Set3Test />
              )}
            />
            <Route
              path="/game/:lobbyId/recreate/4"
              exact
              render={() => (
                <Set4Test />
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
                        <LobbyGuard>
                            <Menu/>
                        </LobbyGuard>
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
                          <LobbyGuard>
                              <Leaderboard />
                          </LobbyGuard>
                      </MenuGuard>
                  )}
              />
              <Route
                  path="/lobby/create"
                  exact
                  render = {() => (
                      <MenuGuard>
                          <LobbyGuard>
                              <LobbyCreate />
                          </LobbyGuard>
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

                        <LobbyGuard>
                            <LobbyTransition history={this.props.history}/>
                        </LobbyGuard>

                    </MenuGuard>
                )}
              />
            <Route
              path="/lobbies"
              exact
              render = {() => (
                <MenuGuard>

                    <LobbyGuard>
                        <LobbyJoin/>
                    </LobbyGuard>

                </MenuGuard>
              )}
            />
            <Route
              path="/game/:lobbyId"
              exact
              render = {() => (
                <MenuGuard>
                    <LobbyGuard>
                        <Game/>
                    </LobbyGuard>
                </MenuGuard>
              )}
            />
              <Route
                  path="/game/:lobbyId/scoresheet"
                  exact
                  render = {() => (
                      <MenuGuard>

                          <LobbyGuard>
                              <Scoring/>
                          </LobbyGuard>

                      </MenuGuard>
                  )}
              />
              <Route
                  path="/game/:lobbyId/end"
                  exact
                  render = {() => (
                      <MenuGuard>

                          <LobbyGuard>
                              <End/>
                          </LobbyGuard>

                      </MenuGuard>
                  )}
              />
            <Route
              path="/game/:lobbyId/recreate/0"
              exact
              render = {() => (
                <MenuGuard>

                    <LobbyGuard>
                        <Recreate/>
                    </LobbyGuard>


                </MenuGuard>
              )}
            />
            <Route
              path="/game/:lobbyId/guess"
              exact
              render = {() => (
                <MenuGuard>

                    <LobbyGuard>
                        <GuessScreen/>
                    </LobbyGuard>

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
