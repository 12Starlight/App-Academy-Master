import React from 'react';
import EventIndexItem from './event_index_item';
import { Link } from 'react-router-dom';

class EventIndex extends React.Component {
  // componentDidMount // index // requestEvents()
  componentDidMount() {
    this.props.requestEvents();
  }

  // render
  render() {
    let events = this.props.events.map( event => {
      
      // return(
      //   <IndexItem
      //     key={`${event.title}`}
      //     event={event}
      //   />
      // )
    })
    

    // ul, EventIndexItem
    return (
      <div>
        <ul>
          { events }
        </ul>

        <EventIndexItem />
      </div>
    );
  }
}

export default EventIndex;
