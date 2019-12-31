import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import Weather from "./components/Weather/Weather";
import Favorites from "./components/Favorites/Favorites";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/" exact component={Weather} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
