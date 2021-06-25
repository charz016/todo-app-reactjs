import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/home'
import ListTodo from './screens/list-todo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/list-todo" >
              <ListTodo />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
