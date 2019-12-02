import React from 'react';
import { withRouter } from 'react-router-dom';

class EventForm extends React.Component {
  // constructor(props) // super(props)
  constructor(props) {
    super(props);
    this.state = this.props.event;
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  // update(field)
  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  };

  // handleSubmit(e)
  handleSubmit(e) {
    e.preventDefault();
    this.props.requestEvent(this.state);
  };

  // FITI onSubmit= onChange=
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.description} onChange={ this.update("description") } />
          <textarea type="date" value={this.state.date} onChange={  this.update("date") } />
          <input type="submit" value="Change" />
        </form>
      </div>
    );
  }
}

export default withRouter(EventForm);
