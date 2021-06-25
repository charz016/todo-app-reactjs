import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/home/home'
import ListTodo from './screens/todo/list-todo'

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
