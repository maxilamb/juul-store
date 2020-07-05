import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import Root from './root';
import './style.sass';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
