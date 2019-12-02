import React from "react";

class Signup extends React.Component {
  // create a local state to keep track of all the feilds for our form
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }
    
    /* 
    answer to handle.submit not being bound to the current scope of the 
    of the instance of this signup component

    */
   this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // build actions form will use
  handleInput(type) {
    // want to take in our event object from our event handler
    return (e) => {
      // any keys that match our state, will get updated
      // need to wrap it in square brackets to make it the key value which
      /// means it will be evaluated, before it is assigned to the key
      this.setState({ [type]: e.target.value })
    }
  }

  // handle submitting the information of our state to the backend
  handleSubmit(e) {
    e.preventDefault();
    // this.state is an object we created above
    this.props.createNewUser(this.state)
      // create a promise using '.then', if we succussfully created a newUser 
      .then( () => this.props.history.push("/chirps"));
  }

  render() {
    return (
      // once we have our two methods to make our form work, we can build form
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form>
          <label>Username:
            <input
              type="text"
              value={ this.state.username } 
              onChange={ this.handleInput("username")}
            /> 
          </label>
          <label>Email:
            <input
              type="text"
              value={ this.state.email }
              onChange={ this.handleInput("email")}
            />
          </label>
          <label>Username:
            <input
              type="password"
              value={ this.state.password }
              onChange={ this.handleInput("password")}
            />
          </label>
          {/* 
            this.handleSubmit from a click, raises an issue that it is not 
            bound to the current scope of the instance of this signup component 
            
            look at constructor for answer
          */}
          <button onClick={ this.handleSubmit }>Sign Up</button>
        </form>
      </div>
    );
  }
};

export default Signup;