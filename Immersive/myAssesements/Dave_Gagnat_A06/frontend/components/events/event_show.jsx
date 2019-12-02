import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  // componentDidMount //

  // HDL onClick=
  render(){

    return(
      <div>
        {this.props.discription}
        {this.props.date}
      </div>
    );
  }
}

export default EventShow;
