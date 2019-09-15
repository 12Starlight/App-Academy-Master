// Simple Timeout
window.setTimeout(function() {
  alert('HAMMER TIME');
}, 5000);
/* Note: while we're waiting for our timeout, we can still 
scroll around the website and interact with it normally. 
Is setTimeout synchronous or asynchronous? 

Anwer: Asynchronous

*/


// TIMEOUT: With Closure 
function hammerTime(time) {
  window.setTimeout(function () {
    alert('${time} is HAMMER TIME!');
  });
}


// Some Tea? Some biscuits?
const readline = require('readline');

const reader = readline.createInterface({
  // It is okay, if this part is magic; it just says that we want to 
  // 1.) Output the prompt to the standard output (console)
  // 2.) Read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout 
});

function teaAndBiscuits() {
  reader.question('Would like some tea?', function (res) {
    console.log('You replied ${res}.');
    reader.question('Would you like some biscuits?', function (res2) {
      console.log('You replied ${res2}.');

      const first = (res === 'yes') ? 'do' : 'don\'t';
      const second = (res2 === 'yes') ? 'do' : 'don\'t';

      console.log('So you ${first} want tea and you ${second} want biscuits.');
      reader.close();
    });
  });
}


// Cats and dogs
function Cat() {
  this.name = 'Markov';
  this.age = 3;
}

function Dog() {
  this.name = 'Noodles'
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log('My name is ${this.name} and I am chasing ${cat.name}! Woof!')
};

const Markov = new Cat();
const Noodles = new Dog();


// Method style
Noodles.chase(Markov)
Noodles.chase.call(Markov, Noodles);
Noodles.chase.apply(Markov, [Noodles])