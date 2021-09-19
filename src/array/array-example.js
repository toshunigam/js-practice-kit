const _ = require('lodash')
// chunk example
var arr = [1,23,1,34,44,32,10,56,9,03,68,23,98]

const chunking = _.chunk(arr,4)
// [ [ 1, 23, 1 ], [ 34, 44, 32 ], [ 10, 56, 9 ], [ 3, 68, 23 ], [ 98 ] ]
// console.log(chunking)

/* 
* compact example
*/

const compact = _.compact([false,true,"",null,3,undefined,6])
// [true,3,6]
// console.log(compact)

/*
* findIndex example
*/

const index = _.findIndex(arr,function(item){return item==32})
// console.log(index)