import React from 'react';
import './App.css';
import CreatePaper from "./Components/CreatePaper";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
function App() {
  return (
     <>
       <NavBar/>
       <BrowserRouter>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/create" component={CreatePaper}/>
         <Redirect to='./'/>
         </Switch>
       </BrowserRouter>
     </>
  );
}

export default App;
