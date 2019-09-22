describe("String.prototype.mySlice", () => {
  beforeEach(() => {
    spyOn(String.prototype, 'slice').and.callThrough();
    spyOn(String.prototype, 'substring').and.callThrough();
    spyOn(String.prototype, 'substr').and.callThrough();
  });

  afterEach(() => {
    expect(String.prototype.slice).not.toHaveBeenCalled();
    expect(String.prototype.substring).not.toHaveBeenCalled();
    expect(String.prototype.substr).not.toHaveBeenCalled();
  });

  it("slices the string from the start index to the end index", () => {
    expect("abcd".mySlice(0, 2)).toEqual("ab");
  });

  it("slices to the end of the string when no second argument is passed", () => {
    expect("foobar".mySlice(3)).toEqual("bar");
  });

  it("returns an empty string when the first argument is higher", () => {
    expect("empty!".mySlice(1, 0)).toEqual("");
  });

  it("slices to the end of the string when the end index is greater than the string's length", () => {
    expect("super long string".mySlice(0, 200)).toEqual("super long string");
  });
});

describe("Array.prototype.myEach", () => {
  let originalArray;
  let testArray;
  let result;
  const spy = {
    callback: (el) => { return el + 1; }
  };

  beforeEach(() => {
    spyOn(Array.prototype, 'forEach').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.forEach).not.toHaveBeenCalled();
  });

  it("calls the callback passed to it", () => {
    spyOn(spy, "callback");
    [1, 2, 3].myEach(spy.callback);
    expect(spy.callback).toHaveBeenCalled();
  });

  it("yields each element to the callback and has no return value", () => {
    spyOn(spy, "callback");
    result = [1, 2].myEach(spy.callback);
    expect(spy.callback).toHaveBeenCalledWith(1);
    expect(spy.callback).toHaveBeenCalledWith(2);
    expect(result).toBeUndefined();
  });

  it("does not modify the original array", () => {
    originalArray = ["original array"];
    testArray = ["original array"];
    testArray.myEach(spy.callback);
    expect(testArray).toEqual(originalArray);
  });
});

describe('Array.prototype.myReduce', () => {
  let myArray;
  const noOp = (accum, el) => accum;

  const spy = {
    sum: (accum, el) => accum + el
  };

  beforeEach(() => {
    spyOn(Array.prototype, 'forEach').and.callThrough();
    spyOn(Array.prototype, 'reduce').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.forEach).not.toHaveBeenCalled();
    expect(Array.prototype.reduce).not.toHaveBeenCalled();
  });

  it("calls the callback, passing in the accumulator and each element", () => {
    myArray = [1, 2, 3];
    spyOn(spy, "sum").and.callThrough();

    myArray.myReduce(spy.sum);

    expect(spy.sum).toHaveBeenCalledWith(1, 2);
    expect(spy.sum).toHaveBeenCalledWith(3, 3);
  });

  it("works with a sum callback", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(spy.sum)).toEqual(10);
  });

  it("works with a multiplier callback", () => {
    myArray = [4, 4, 4];
    const times = (accum, el) => accum * el;

    expect(myArray.myReduce(times)).toEqual(64);
  });

  it("uses the given argument as the initial accumulator", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(noOp, 5)).toEqual(5);
  });

  it("uses the first item as the accumulator if none is given", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(noOp)).toEqual(1);
  });

  it("calls the Array.prototype.myEach method", () => {
    myArray = [1, 2, 3];
    spyOn(Array.prototype, "myEach");
    myArray.myReduce(spy.sum);
    expect(Array.prototype.myEach).toHaveBeenCalled();
  });
});

describe("Array.prototype.quickSort", () => {
  beforeEach(() => {
    spyOn(Array.prototype, 'sort').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.sort).not.toHaveBeenCalled();
  });

  it("works with an empty array", () => {
    expect([].quickSort()).toEqual([]);
  });

  it("works with an array of 1 number", () => {
    expect([5].quickSort()).toEqual([5]);
  });

  it("sorts an array of numbers with no duplicates", () => {
    const a = [2, 1, 3, 5, 0, 8, 4, 7, 6];
    const sorted = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    expect(a.quickSort()).toEqual(sorted);
  });

  it("sorts an array of numbers with duplicates", () => {
    const a = [3, 1, 2, 3, 9, 17, 10, 432, 10];
    const sorted = [1, 2, 3, 3, 9, 10, 10, 17, 432];
    expect(a.quickSort()).toEqual(sorted);
  });

  it("sorts according to the callback passed in", () => {
    const a = [2, 1, 3, 5, 0, 8, 4, 7, 6];
    const sorted = [8, 7, 6, 5, 4, 3, 2, 1, 0];
    const callback = (x, y) => {
      if (y < x) return - 1;
      return 1;
    };

    expect(a.quickSort(callback)).toEqual(sorted);
  });

  it("calls itself recursively", () => {
    spyOn(Array.prototype, "quickSort").and.callThrough();
  
    const array = [1, 5, 2, 4, 3]
    array.quickSort();
  
    const count = Array.prototype.quickSort.calls.count();
    expect(count).toBeGreaterThan(4);
    expect(count).toBeLessThan(10);
  });

  it("does not modify original", () =>{
    const array = [1, 5, 2, 4, 3];
    const dupedArray = [1, 5, 2, 4, 3];
    dupedArray.quickSort();
    expect(dupedArray).toEqual(array);
  });
});

describe("sumNPrimes", () => {
  it("returns 0 for 0", () => {
    expect(sumNPrimes(0)).toEqual(0);
  });

  it("returns 2 for 1", () => {
    expect(sumNPrimes(1)).toEqual(2);
  });

  it("sums the first 4 primes", () => {
    expect(sumNPrimes(4)).toEqual(17);
  });

  it("sums the first 20 primes", () => {
    expect(sumNPrimes(20)).toEqual(639);
  });
});

describe("Function.prototype.myBind", () => {
  let Cat;
  let sally, markov, curie;

  beforeEach(() => {
    Cat = function Cat(name) {
      this.name = name;
    };

    Cat.prototype.sayHello = function () {
      return this.name + " says hello!";
    };

    Cat.prototype.greetOne = function (otherCat) {
      return this.name + " says hello to " + otherCat.name;
    };

    Cat.prototype.greetTwo = function (otherCat1, otherCat2) {
      return this.name + " says hello to " + otherCat1.name + " and " +
        otherCat2.name;
    };

    sally = new Cat("Sally");
    markov = new Cat("Markov");
    curie = new Cat("Curie");
  });

  afterEach(() => {
    expect(Function.prototype.myBind.toString().includes("=>"))
      .toBeFalsy('Fat arrow function not allowed (this spec will fail even if it is commented out)');
  });

  it("sets the context and returns a function which can be called function style", () => {
    spyOn(Cat.prototype.sayHello, 'bind');
    expect(sally.sayHello.myBind(sally)()).toEqual("Sally says hello!");
    expect(Cat.prototype.sayHello.bind).not.toHaveBeenCalled();
  });

  it("should pass in bind-time argument to the method", () => {
    spyOn(Cat.prototype.greetOne, 'bind');
    expect(sally.greetOne.myBind(sally, markov)())
      .toEqual("Sally says hello to Markov");
    expect(Cat.prototype.greetOne.bind).not.toHaveBeenCalled();
  });

  it("should pass in two bind-time arguments to the method", () => {
    spyOn(Cat.prototype.greetTwo, 'bind');
    expect(sally.greetTwo.myBind(sally, markov, curie)())
      .toEqual("Sally says hello to Markov and Curie");
    expect(Cat.prototype.greetTwo.bind).not.toHaveBeenCalled();
  });

  it("takes multiple call-time arguments", () => {
    spyOn(Cat.prototype.greetTwo, 'bind');
    expect(sally.greetTwo.myBind(sally)(markov, curie))
      .toEqual("Sally says hello to Markov and Curie");
    expect(Cat.prototype.greetTwo.bind).not.toHaveBeenCalled();
  });

  it("should combine bind-time and call-time arguments", () => {
    spyOn(Cat.prototype.greetTwo, 'bind');
    expect(sally.greetTwo.myBind(sally, markov)(curie))
      .toEqual("Sally says hello to Markov and Curie");
    expect(Cat.prototype.greetTwo.bind).not.toHaveBeenCalled();
  });

  it("doesn't pass the call-time arguments to future calls", () => {
    spyOn(Cat.prototype.greetOne, 'bind');
    const boundFn = sally.greetOne.myBind(sally);
    expect(boundFn(markov)).toEqual("Sally says hello to Markov");
    expect(boundFn(curie)).toEqual("Sally says hello to Curie");
    expect(Cat.prototype.greetOne.bind).not.toHaveBeenCalled();
  });
});

describe("Function.prototype.inherits", () => {
  let Animal;
  let Dog;
  let dog;

  beforeEach(() => {
    spyOn(Object, 'create').and.callThrough();
    spyOn(Object, 'assign').and.callThrough();
    spyOn(Object, 'setPrototypeOf').and.callThrough();

    Animal = function () {
      this.name = "Yogi";
    };

    Animal.prototype.makeNoise = function () { return "Hi!"; };

    Dog = function () {
      this.age = 7;
    };

    Dog.inherits(Animal);
    Dog.prototype.bark = function () { return "Woof!"; };
    dog = new Dog();

  });

  afterEach(() => {
    expect(Object.create).not.toHaveBeenCalled();
    expect(Object.assign).not.toHaveBeenCalled();
    expect(Object.setPrototypeOf).not.toHaveBeenCalled();
  });

  it("should properly set up the prototype chain between a child and parent", () => {
    expect(dog.bark()).toBe("Woof!");
    expect(dog.makeNoise()).toBe("Hi!");
  });

  it("should not call the parent's constructor function", () => {
    expect(dog.name).toBeUndefined();
  });

  it("should maintain separation of parent and child prototypes", () => {
    Dog.prototype.someProperty = 42;
    const animal = new Animal();
    expect(animal.someProperty).toBeUndefined();
    expect(animal.makeNoise()).toBe("Hi!");
  });

  it("should properly work for longer inheritance chains", () => {
    const Poodle = function () { this.name = "Bill"; };
    Poodle.inherits(Dog);
    Poodle.prototype.shave = function () { return "Brrr."; };

    const poodle = new Poodle();
    expect(poodle.name).toBe("Bill");
    expect(poodle.shave()).toBe("Brrr.");
    expect(poodle.makeNoise()).toBe("Hi!");
    expect(poodle.bark()).toBe("Woof!");
  });
});

describe("Function.prototype.myCurry", () => {
  it("if numArgs is 1, should call function first time the curried function is invoked with an argument", () => {
    const echo = function (arg) {
      return arg;
    };

    const first = echo.myCurry(1);
    expect(first("one")).toMatch(/one/);
  });

  it("curries arguments and calls function after called with total num args", () => {
    const dubs = function (a, b, c) {
      return (a + b + c) * 2;
    };

    const curriedSum = dubs.myCurry(3);
    const result = curriedSum(1)(2)(3);
    expect(result).toEqual(12);
  });

  it("should return itself if there are too few arguments", () => {
    const threeSum = function (x, y, z) {
      return x + y + z;
    };

    const myCurryResult = threeSum.myCurry(3)(1)(2);
    expect(myCurryResult).not.toEqual(6);
    expect(typeof (myCurryResult)).toEqual("function");
  });
});
