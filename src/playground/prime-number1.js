function isPrime(n){
    if(n<1) return 'invalid number'
    if(n==1) return '1 is not a prime number'
    for(let i=2;i<n;i++){
        var prime=true
        if(n%i===0){
            prime=false
            break
        }
    }
    return prime
}

console.log(isPrime(7))
console.log(isPrime(45))
console.log(isPrime(0))
console.log(isPrime(1))