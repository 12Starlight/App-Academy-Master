import React from 'react';

class Clock extends React.Component {
    constructor(){
      super();
      this.tick = this.tick.bind(this);
      this.state = { time: new Date() };
    }

    tick () {
      this.setState(new Date());
    }
    
    componentDidMount () {
        this.myInterval = setInterval(this.tick, 1000);
    }

    componentWillUnmount () {
        clearInterval(this.myInterval);
    }

    render () {
        return (
          <h1>Our Clock</h1>
            <span>{this.state.time.getHours()}</span>
        )
    }
}

export default Clock;