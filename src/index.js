import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import firebase from "./firebase"
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composewithDevTools} from 'redux-devtools-extension';
import rootReducer from "./reducers";
import { setUser } from "./actions";

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.props.history.push("/");
        }
      });
    }
  
    render() {
      return (
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      );
    }
  }
  
  const RootWithAuth = withRouter(Root);
  
  ReactDOM.render(
      <Provider store ={store}>
        <Router>
      <RootWithAuth />
    </Router>
      </Provider>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
