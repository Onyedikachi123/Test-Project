import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Dashboard  from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage"


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
         </Switch>
    </Router>
  );
}

export default App;

