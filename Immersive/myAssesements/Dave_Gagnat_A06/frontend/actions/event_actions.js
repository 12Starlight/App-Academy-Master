import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";


// regular actons
const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events: events
});

const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event: event 
});

const removeEvent = (event) => ({
  type: REMOVE_EVENT,
  eventId: event.id 
});

// thunk actions
export const requestEvents = () => (dispatch) => {
  EventAPIUtil.fetchEvents().then( events => dispatch(receiveEvents(events)))
};

export const requestEvent = (id) => (dispatch) => (
  EventAPIUtil.fetchEvent(id).then( event => dispatch(receiveEvent(event)))
);

export const createEvent = (eventSend) => (dispatch) => (
  EventAPIUtil.createEvent(eventSend).then( eventReceive => dispatch(receiveEvent(eventReceive)))
);

export const updateEvent = (eventSend) => (dispatch) => (
  EventAPIUtil.updateEvent(eventSend).then( eventReceive => dispatch(receiveEvent(eventReceive)))
);

export const deleteEvent = (id) => (dispatch) => (
  EventAPIUtil.deleteEvent(id).then( event => dispatch(removeEvent(event)))
);