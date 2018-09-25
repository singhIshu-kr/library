import { Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../containers/HomeContainer";
import Book from "../containers/BookContainer";
import Reader from "../containers/ReaderContainer";
import Login from "../components/login";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/book' component={Book} />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/reader' component={Reader}/>
      </div>
    </BrowserRouter>
  );
}
