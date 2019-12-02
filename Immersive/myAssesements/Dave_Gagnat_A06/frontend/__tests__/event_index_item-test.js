/* globals jest */

import React from 'react';
import MockRouter from 'react-mock-router';
import EventIndexItem from '../components/events/event_index_item';
import { mount } from 'enzyme';

describe('event index item', () => {
  let event,
      eventIndexWrapper,
      deleteEvent,
      push;

  beforeEach(() => {
    event = {
      id: 1,
      description: "Description",
      date: "2017-01-11"
    };

    deleteEvent = jest.fn();
    push = jest.fn();

    const props = {
      deleteEvent,
      event
    };

    eventIndexWrapper = mount(
      <MockRouter push={push}>
        <EventIndexItem {...props} />
      </MockRouter>
    );
  });

  it('should be a function', () => {
    expect(typeof EventIndexItem).toEqual('function');
  });

  it('shows the event\'s description as a Link to the event\'s show page', () => {
    const showLink = eventIndexWrapper.find('Link').filterWhere(link => 
     /events(?!.*edit)/i.test(link.props().to)
    );

    expect(showLink.props().children).toContain(`${event.description}`);
  });

  it('has a link that links to the event edit page', () => {
    const editLink = eventIndexWrapper.find('Link').filterWhere(link =>
      /edit/i.test(link.props().to)
    );

    expect(editLink.props().children).toEqual("Edit");
  });

  it('has a button to delete event', () => {
    const deleteButton = eventIndexWrapper.find('button').filterWhere(button =>
      /delete/i.test(button.props().children)
    );
    expect(deleteButton).toBeDefined();

    // click on Delete button with mock event object
    deleteButton.simulate('click');
    expect(deleteEvent).toBeCalledWith(event.id);
  });
});
