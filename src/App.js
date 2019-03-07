import React, { Component } from "react";
import { Provider } from "./context/context";
import Paper from "@material-ui/core/Paper";

import "./css/App.css";

// components
import Search from "./component/layout/Search";
import Header from "./component/layout/Header";
import Tables from "./component/Tables";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App mt-3">
          <Search handleQuery={this.handleQuery} />
          <Paper className="mt-3">
            <Header />
            <Tables />
          </Paper>
        </div>
      </Provider>
    );
  }
}

export default App;
