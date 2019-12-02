/* globals jest */

import * as EventActions from '../actions/event_actions';
import React from 'react';
import MockRouter from 'react-mock-router';
import { Route } from 'react-router-dom';
import CreateEventFormContainer from '../components/events/create_event_form_container';
import EditEventFormContainer from '../components/events/edit_event_form_container';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';

const testEvent = {
  id: 1,
  description: "apply to app academy",
  date: "2016-01-17"
};
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({ events: { 1: testEvent } });

describe('event form container', () => {
  let eventFormWrapper,
      descriptionInput,
      newEvent,
      dateInput,
      push;

  beforeEach(() => {
    EventActions.updateEvent = jest.fn((updatedEvent) => dispatch => {
      return Promise.resolve(updatedEvent);
    });
    EventActions.createEvent = jest.fn(event => dispatch => {
      return Promise.resolve(event);
    })
    EventActions.requestEvent = jest.fn(id => dispatch => {});
    push = jest.fn();
  });

  describe('creating a new event', () => {
    beforeEach(() => {
      eventFormWrapper = mount(
          <MockRouter>
            <Route render={(props) => (
              <CreateEventFormContainer {...props} store={testStore} />
            )}/>
          </MockRouter>
      ).find('EventForm');

      descriptionInput = eventFormWrapper.find('input').filterWhere(input => (
        input.props().type === 'text'
      ));
      dateInput = eventFormWrapper.find('input').filterWhere(input => (
        input.props().type === 'date'
      ));
      newEvent = { description: "Walk cat", date: "2017-01-15" };
    });

    it('correctly maps state to props', () => {
      expect(eventFormWrapper.props().event).toBeDefined();
      expect(eventFormWrapper.props().formType).toBeDefined();
    });

    it('correctly maps dispatch to props', () => {
      expect(eventFormWrapper.props().submitEvent).toBeDefined();
    });

    it('updates the description field', () => {
      descriptionInput.simulate('change', { target: { value: 'Call doctor' } });
      expect(descriptionInput.props().value).toEqual('Call doctor');
    });

    it('triggers the correct action when submitted', () => {
      descriptionInput.simulate('change', { target: { value: "Walk cat" } });
      dateInput.simulate('change', { target: { value: "2017-01-15" } });
      eventFormWrapper.find('form').simulate('submit');

      expect(EventActions.createEvent).toBeCalledWith(newEvent);
    });
  });

  describe('updating an existing event', () => {
    beforeEach(() => {
      eventFormWrapper = mount(
          <MockRouter params={{eventId: 1}} >
            <Route render={(props) => (
              <EditEventFormContainer {...props} store={testStore} />
            )}/>
          </MockRouter>
      ).find('EventForm');

      descriptionInput = eventFormWrapper.find('input').filterWhere(input => (
        input.props().type === 'text'
      ));
      dateInput = eventFormWrapper.find('input').filterWhere(input => (
        input.props().type === 'date'
      ));
      newEvent = { description: "Walk cat", date: "2017-01-15", id: 1 };
    });

    it('correctly maps state to props', () => {
      expect(eventFormWrapper.props().event).toEqual(testEvent);
      expect(eventFormWrapper.props().formType).toBeDefined();
    });

    it('correctly maps dispatch to props', () => {
      expect(eventFormWrapper.props().submitEvent).toBeDefined();
      expect(eventFormWrapper.props().requestEvent).toBeUndefined();
      // Hint: fetch in EditEventForm!
    });

    it('pre-fills decription and date input fields with event data from the store', () => {
      expect(EventActions.requestEvent).toBeCalledWith(testEvent.id);
      expect(dateInput.props().value).toEqual(testEvent.date);
      expect(descriptionInput.props().value).toEqual(testEvent.description);
    });

    it('triggers the correct action when submitted', () => {
      descriptionInput.simulate('change', { target: { value: "Walk cat" } });
      dateInput.simulate('change', { target: { value: "2017-01-15" } });
      eventFormWrapper.find('form').simulate('submit');
      expect(EventActions.updateEvent).toBeCalledWith(newEvent);
    });
  });
});
