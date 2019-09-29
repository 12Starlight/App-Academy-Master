class Store {
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = {};
  }

  getState() {
    return Object.assign({}, this.state);
  }

}

function combineReducers(reducerResponsibilities) {
  return (prevState, action) => {
    const newState = {};
    Object.entries(prevState).forEach( ([stateProperty, oldVal]) => {               //Object.entries(obj) => [[key1, val1], [key2, val2], [key3, val3]]
      const correctReducer = reducerResponsibilities[stateProperty];
      newState[stateProperty] = correctReducer(oldVal, action);
    });
    return newState;
  }
}

const myNoiseReducer = (prevState = "peace and quiet", action) => {
  switch (action.type) {
    case "noisy action":
      return action.noise;
    default:
      return prevState;
  }
};

const myNoisyAction = {
  type: "noisy action",
  noise: "Car alarm"
};

const myInconsequentialAction = {
  type: "a type no one cares about",
  data: {
    thisThing: "will not get used anyway"
  }
};

const myInitialState = {
  noise: "peace and quiet"
};

const myRootReducer = combineReducers({
  noise: myNoiseReducer,
});

let newState = myRootReducer(myInitialState, myInconsequentialAction);
console.log(newState);
// => { noise: "peace and quiet" }

newState = myRootReducer(newState, myNoisyAction);
console.log(newState);
// => { noise: "Car alarm" }

myRootReducer(newState, myInconsequentialAction);
console.log(newState);
// => { noise: "Car alarm" }
