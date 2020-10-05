import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import RegisterItem from './Components/RegisterItem/RegisterItem';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/about/:Id">
            <Register></Register>
          </PrivateRoute>
          <PrivateRoute path="/add">
            <RegisterItem></RegisterItem>
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
      
      
      
    </UserContext.Provider>
  );
}

export default App;
