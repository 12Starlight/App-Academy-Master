import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  // componentDidMount // show // fetchEvent(eventId)
  componentDidMount() {
    this.props.fetchEvent(this.props.event.eventId);
  }

  // HDL onClick=
  render(){

    return(
      <div>
        {this.props.discription}
        {this.props.date}
        <Link to="/"></Link>
      </div>
    );
  }
}

export default EventShow;
