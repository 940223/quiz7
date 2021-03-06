import './App.css';
import LockIcon from './LockIcon';
import Enput from './Enput';
import { BrowserRouter, Route } from "react-router-dom";
import Todo from "./index2";
import Login from "./index1";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" conponent={Login} />
      <Route path="/index2" component={Todo} />
      <div className="App">
        <div>
          {LockIcon()}
        </div>
        <div>
          {Enput()}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App