import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import { Provider } from 'react-redux'
import store from './store'
import NavBar from "./NavBar";

const Details = lazy(() => import('./Details'))
const SearchParams = lazy(() => import('./SearchParams'))

const App = () => {

  return (
    <Provider store={store}>

      <div>
        <NavBar />
        <Suspense fallback={<h1>Loading Rounte...</h1>}>

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </Provider >

  );
};

ReactDOM.render(<App />, document.getElementById("root"));