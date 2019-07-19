import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SildBar from './SideBar';
import SildBar2 from './SlideBar2';
import CollapseTest from './CollapseTest';


import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<SildBar />, document.getElementById('root'));
ReactDOM.render(<CollapseTest />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
