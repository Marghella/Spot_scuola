import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';

export default function App():JSX.Element {
  return <>
    <React.StrictMode>
      <BrowserRouter>
          <Switch>
            <Route path='/'>
                <p>Questo sito avrà solo una route</p>
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