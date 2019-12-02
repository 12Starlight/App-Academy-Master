import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

// Comment this back in after you have built the login functionality

// allows us to create a button, allowing currentUser to logout
import { logout } from '../../actions/session';

/* 
passing down currentUser from our state to our component, our navbar component 

*/
const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

/*
making sure we are passing down the logout action, grabbing from our session
actions to our component as well

*/
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
