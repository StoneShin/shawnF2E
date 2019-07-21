import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SildBar from './SideBar';
import SildBar2 from './SlideBar2';
import CollapseTest from './CollapseTest';
import MMRouteApp from './MMRouteApp';
import MMHome from './MMHome';

import { BrowserRouter, Switch } from 'react-router-dom';




import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<SildBar />, document.getElementById('root'));
// ReactDOM.render(<MMRouteApp />, document.getElementById('root'));

ReactDOM.render(
    <BrowserRouter basename = { process.env.PUBLIC_URL }>
      <Switch>
        <MMHome />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
  );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
