import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import { connect } from 'react-redux'
import Home from './view/pages/Home'

import AdminRouter from './view/admin/AdminRouter'
import './App.scss';
import './custom.scss';
import { setMenus } from './services/redux/actions';

function App({setMenus}) {
  
  return (
    <div className="App">
      <Switch>
          <Route
            path="/"
            exact
            component={_props => <Home />}
          />
          <Route 
            path="/category/:id"
            exact
            component={props => <Home {...props} />}
          />
         
          <Route
            path="/sky9-admin/"
            exact
            component={_props => <AdminRouter {..._props} />}
          />
          
          
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});
const mapDispatchToProps = {
  setMenus
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
