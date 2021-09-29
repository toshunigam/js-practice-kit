/**
 * https://www.codecademy.com/learn/game-dev-learn-javascript-higher-order-functions-and-iterators/modules/game-dev-learn-javascript-iterators/cheatsheet
 * 
 * The .reduce() method iterates through an array and returns a single value.
    It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element. Optionally, a second argument can be passed which acts as the initial value of the accumulator.

    Here, the .reduce() method will sum all the elements of the array.
 */

const arrvar = [2,3,4,5,6,7,22,33,44,55,66,77]

const val = arrvar.reduce((acc, currval)=>acc+currval)

console.log(val)