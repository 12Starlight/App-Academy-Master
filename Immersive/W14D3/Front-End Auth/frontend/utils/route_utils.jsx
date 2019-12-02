/* 
We want to create a couple of custom components that make it, so that we can 
automate the process of allowing people to see certain components when they 
have the right privledges. 

*/ 

import React from "react";
import { connect } from "react-redux";

// withRouter gives different components to match, location, history, props
import { Redirect, Route, withRouter } from "react-router-dom";


// we are going to user msp for each of our different components, both for our
// auth route and our protected route 
const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

/* 
Auth Route
  * The purpose of the auth route is to protect the auth routes which would be 
    our login or sign_up and redirect our users, if they are already logged in,
    to the homepage. 

  * we want to take in the component, path, and loggedIn
    .. logged in comes from msp
    .. path we are going to pass down, similar to how a route is set up
      // <AuthRoute path="" component={} />
        -> if the user is logged in, they will not be able to see this component
        -> we want component to be capitalized in order to render this component
           later, this is done using JS6 destructuring 
        -> <Component { ...props } /> renders the component and passes the props
    
*/
const Auth = ({ loggedIn, path, component: Component }) => (
  <Route 
    path={ path }
    render={ props => (
      loggedIn ? <Redirect to="/" /> : <Component { ...props } /> // "/" root directory
    )}
  />
);

/*
  <AuthRoute path="" component={} />
    -> if the user is logged in, they will not be able to see this component
    -> if they user is logged in, they will

*/

// Users not logged in route
const Protected = ({ loggedIn, path, component: Component}) => (
  <Route
    path={ path }
    render={ props => (
      loggedIn ? <Component { ...props } /> : <Redirect to="/signup" />
    )}
  />
);


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));