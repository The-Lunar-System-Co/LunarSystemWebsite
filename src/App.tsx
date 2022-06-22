import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// header
import Header from "./components/header";

// main pages
import LSD from "./pages/lsd";

// 404 page
import NotFound from "./pages/not-found";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* routes start */}
          <Route exact path="/">
            <LSD />
          </Route>
          <Route exact path="/not-found">
            <NotFound />
          </Route>
          {/* routes end */}

          {/* redirect to 404 */}
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
