class Clock {
  constructor() {
    // 1. Create a Date object.
    const newDate = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = newDate.getHours();
    this.min = newDate.getMinutes();
    this.sec = newDate.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals. 1s === 1000ms
    // setInterval(function() {
    //   this._tick();
    // }.bind(this), 1000);
    setInterval(this._tick.bind(this), 1000)
  }

  printTime() {
    // Format the time in HH:MM:SS
    const time = [this.hours, this.min, this.sec].join(":");
    // Use console.log to print it.
    console.log(time);
  }

  _tick() {
    // 1. Increment the time by one second.
    this.sec += 1;

    if (this.sec === 60) {
      this.sec = 0;
      this.min += 1;
      if (this.min === 60) {
        this.min = 0;
        this.hours += 1;
        if (this.hours === 24) {
          this.hours = 0; 
        }
      }
    }

    // 2. Call printTime.
    this.printTime();
  }
}

const clock = new Clock();
console.log(clock);