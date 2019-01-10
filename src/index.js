import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const Root =() => (
<Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route  exact path="/register" component={Register} />
    </Switch>
</Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
