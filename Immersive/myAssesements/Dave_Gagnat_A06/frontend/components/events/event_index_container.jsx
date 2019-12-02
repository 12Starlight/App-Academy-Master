import { connect } from 'react-redux';
import { requestEvents, deleteEvent } from '../../actions/event_actions';
import EventIndex from './event_index';


// mapStateToProps // index // Object.values(state.events)
const mapStateToProps = (state) => {
  let events = Object.values(state.events);

  return({
    events: events
  });
};

// mapDispatchToProps 
const mapDispatchToProps = (dispatch) => {
  return({
    requestEvents: () => dispatch(requestEvents()),
    deleteEvent: (id) => dispatch(deleteEvent(id))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(EventIndex)