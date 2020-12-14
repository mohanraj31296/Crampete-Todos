import React from 'react';
import Counter from './Counter.js'
import Todo from "./Todo/TodoIndex"
import TodoCreate from "./Todo/TodoCreate"
import Cal from './Calculator.js'
import TodoHooks from './TodoHooks'
import TodoRedux from './Todo/TodoRedux'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {store} from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/first">Counter</Link>
              </li>
              <li>
                <Link to="/second">Todo</Link>
              </li>
              <li>
                <Link to="/third">Calculator</Link>
              </li>
              <li>
                <Link to="/fourth">Hooks</Link>
              </li>
              <li>
                <Link to="/fifth">Redux</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/first">
              <Counter />
            </Route>

            <Route path="/second">
              <Todo />
            </Route>

            <Route path="/third">
              <Cal />
            </Route>

            <Route path="/fourth">
              <TodoHooks />
            </Route>

            <Route path="/fifth">
              <TodoRedux />
            </Route>

            <Route path="/">
              <Counter />
            </Route>
          </Switch>
        </div>
      </Router>
    </div> 
    </Provider>  
  );
}

export default App;
