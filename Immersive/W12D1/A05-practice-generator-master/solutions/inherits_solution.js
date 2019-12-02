// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// function Surrogate() acts as an object with it's own Surrogate.prototype
// which allows us to not have to call unecessary constructor initializations
// 
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**

/*
First we create a wrapping function and call it Function.prototype.inherits =
This is done setting it to a function that takes in a Parent parameter:
  function(Parent)

After we have our wrapper function, we create another placeholder function and
call it function Surrogate() {}. 

We now set the Surrogate.prototype to the Parent.prototype. Once we have done 
that we want to call the Child.prototype which Function.prototype represents. 
So, we want to use 'this' to accomplish that:
  this.prototype = new Surrogate().

Once we have set our Child.prototype to Parent.prototype using 'this,' we want
to set the child constructor to also be the child and NOT run the parent
constructor instead.  


Note: We create new instances of Surrogate each time, so none of the children 
will share the same instance of Surrogate which allows each Surrogate's methods,
variables, etc. to be separate. 

*/


Function.prototype.inherits = function(Parent) {
  function Surrogate() {};
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};
