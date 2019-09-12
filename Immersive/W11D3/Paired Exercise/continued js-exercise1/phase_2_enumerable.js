// arrays to work with
const ARR = [1, 2, 3];


// Build Method myEach
Array.prototype.myEach = function(myFunc) {
    for (let i = 0; i < this.length; i += 1) {
        // myFunc(this[i], i, this);
        myFunc(this[i]);
    }
}


// Build Method myMap
Array.prototype.myMap = function(myMapFunc) {
    const mapped = [];

    const myEachFunc = function(ele) {
        mapped.push(myMapFunc(ele))
    }
    this.myEach(myEachFunc);

    // for (let i = 0; i < this.length; i += 1) {
    //     let elm = this[i];
    //     let newElm = myFunc(elm, i, this);
    //     mapped.push(newElm);
    // }

    return mapped
}

let fun2 = function (x) {
    return x + 1;
}
console.log(ARR.myMap(fun2));


// I do not understand this problem
Array.prototype.myReduce = function (cb, acc = undefined) {
    let arr = this; 

    if (acc === undefined) {
        acc = arr[0];
        arr = arr.slice(1);
    }

    // for (let i = 0; i < arr.length; i += 1) {
    //     accumulator = cb(accumulator, arr[i])
    // }

    let result = acc; 

    arr.myEach(el => result = cb(result, el));

    // return accumulator;
    return result;  
}
// console.log(ARR.myReduce(fun2));
console.log(ARR.myReduce( (total, item) => total + item));
