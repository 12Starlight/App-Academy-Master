import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';


// mapStateToProps // event:
const mapStateToProps = (state) => {
  return({
    event: { descrition: "", date: "" },
    formType: "Create Event"
  })
};

// mapDispatchToProps // action:
const mapDispatchToProps = (dispatch) => {
  return({
    submitEvent: (event) => dispatch(createEvent(event))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(EventForm)