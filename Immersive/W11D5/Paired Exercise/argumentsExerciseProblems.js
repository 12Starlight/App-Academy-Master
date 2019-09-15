// Build function sum(args)
function sum1(args) {
  let total = 0;
  // let args = Array.prototype.slice.call(arguments);

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]; 
  }
  return total;
}
// console.log(sum1(1,2,3,4));

function sum2(...args) {
  let total = 0;
 
  args.forEach(function (num) {
    total += num;
  });
  return total;
}
// console.log(sum2(1,2,3,4));


// Build function myBind()
Function.prototype.myBind = function(ctx, ...bindArgs) {
  
  return (...callArgs) => { this.apply(ctx, callArgs.concat(bindArgs)) }

  /*
  let that = this;
  return function(...callArgs) {
    that.apply(ctx, callArgs.concat(bindArgs));
  }
  
  */
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true



// curriedSum
function curriedSum(numArgs) {
  const nums = [];

  const _curriedSum = (num) => {
    nums.push(num);
    if (nums.length === numArgs) {
      let total = 0;
      nums.forEach(num => total += num)
      return total;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56


// Function.prototype.curry
Function.prototype.curry = function (numArgs) {
  const args = [];

  const _curried = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      // this.apply(this, args);
      this(...args);
    } else {
      return _curried;
    }
  };
  return _curried;
};

// const sum = function (...n) {
//   let total = 0
//   n.forEach(function(ele) {total += ele});
//   return total;
// };
// console.log(sum.curry(3));