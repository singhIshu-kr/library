import { Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../containers/HomeContainer";
import Book from "../components/book";
import Login from "../components/login";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/book' component={Book} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
      </div>
    </BrowserRouter>
  );
}
