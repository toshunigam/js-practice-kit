// Recursive function example
function factorial(n){
    if(n<1) return 1;

    return n*factorial(n-1);
}
console.log(factorial(-12))
console.log(factorial(8))
console.log(factorial(1))

