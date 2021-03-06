import React, { Component } from "react";
import AppRouter from "./components/shared/routers/AppRouter";
import Soundtrack from "./components/home/Soundtrack";

/**
 * Happy coding!
 * React Template by Lucas Pelloni
 */
class App extends Component {
  render() {
    return (
      <div>
        <Soundtrack/>
        <AppRouter />
      </div>
    );
  }
}

export default App;
