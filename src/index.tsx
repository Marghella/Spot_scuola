import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import Home from './components/home';

export default function App():JSX.Element {
  return <>
    <React.StrictMode>
      <BrowserRouter>
          <Switch>
            <Route path='/'>
              <Home />
            </Route> 
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </>;
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);