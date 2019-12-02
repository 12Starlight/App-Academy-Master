import React from 'react';
import { connect } from 'react-redux';
import { requestEvent, updateEvent } from '../../actions/event_actions';
import EventForm from './event_form';


// mapStateToProps // edit // ownProps // eventId
const mapStateToProps = (state, ownProps) => {
  let eventId = ownProps.match.params.eventId;
  let event = state.events[eventId];

  return({
    event: event,
    formType: "Update Event"
  })
}

// mapDispatchToProps 
const mapDispatchToProps = (dispatch) => {
  return({
    submitEvent: (id) => dispatch(requestEvent(id)),
    submitEvent: (event) => dispatch(updateEvent(event))
  });
};


class EditEventForm extends React.Component {
  // componentDidMOunt // edit // props // requestEvent(eventId)
  componentDidMount() {
    let eventId = this.props.match.params.eventId;
    this.props.requestEvent(eventId);
  };

  render () {
    const { event, formType, submitEvent } = this.props;
    return (
      <EventForm
        event={event}
        formType={formType}
        submitEvent={submitEvent} />
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);