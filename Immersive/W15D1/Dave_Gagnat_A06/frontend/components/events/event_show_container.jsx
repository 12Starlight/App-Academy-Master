import React from 'react';
import { connect } from 'react-redux';
import { requestEvent } from '../../actions/event_actions';
import EventShow from './event_show';


// mapStateToProps // show // ownProps
const mapStateToProps = (state, ownProps) => {
  let eventId = ownProps.match.params.eventId;
  let event = state.events[eventId];
  
  return({
    event: event
  });
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return({
    requestEvent: (event) => dispatch(requestEvent(event.id))
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(EventShow)