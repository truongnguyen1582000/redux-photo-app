import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import MainPage from "./pages/Main"
import AddEditPage from "./pages/AddEdit"
import NotFound from 'components/NotFound';

function Photo(props) {
    const match = useRouteMatch();// use father path
    return (
      <Switch>
          <Route exact path={match.url} component={MainPage}/> 

          <Route path={`${match.url}/add`} component={AddEditPage}/>
          <Route path={`${match.url}/:photoId`} component={AddEditPage}/>

           <Route component={NotFound} />
      </Switch>
    );
}

export default Photo;