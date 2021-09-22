function sum(a,){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}
// const curringExample = curry(adding)

console.log(sum(1)(2)(4))