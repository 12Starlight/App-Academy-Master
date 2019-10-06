import React from 'react';

class PostForm extends React.Component {
  /* 
    whenever we have a form with input tags or text areas, we want to make sure
    that our internal component state is completely in charge of what these 
    input fields are telling me, so we definitely need a constructor

    we want to make sure that everytime we are typing something into an input
    that it actually updates it for us. This means we have a local state to 
    influence with that update function
  */
  constructor(props) {
    super(props);

    // no matter which container is rendering this component, the appropriate
    // information is going to get captured, which is perfect '23:25'
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    // we can pass in whatever we want to change in our state as long as we 
    // provide a handy feild argument 
    return e => this.setState({
      // now we can say for whatever field this function was called on, we want
      // to update that with the actual value from the event that was fired  
      [field]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // we can ensure that our state is going to reflect an updated version, of
    // whatever the user has input as a result of our update function 
    // whenever you want to see what your props are, go to your container
    this.props.action(this.state)
  }
 

  // actually making all this stuff happen
  render () {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input 
            type="text" 
            value={ this.state.title } 
            /* 
              we are passing in this field argument, so that later on when 
              update(field) happens, it has access to that title and it knows 
              exactly what to change inside of our state
            */  
            onChange={ this.update("title")}  
          />
          {/* go to __tests__ post_form-test to find why it is not input */}
          <textarea type="text" value={ this.state.body } onChange={ this.update("body" )} />
          {/* make sure to read the specs to see, if it requires a button */}
          {/* <button></button> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PostForm;
