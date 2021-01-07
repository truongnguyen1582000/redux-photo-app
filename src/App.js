import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Images from "./constant/images";
import "bootstrap/dist/css/bootstrap.min.css";

const Photo = React.lazy(() => import("./features/Photo")); // wait for loading

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        {" "}
        {/* loading asynchronous */}
        <Router>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />{" "}
            {/* redirect to photos when at homedir */}
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;

// check
