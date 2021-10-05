// find the prime number from the given array
var arr = [23,45,35,34,67,78,43,54,76,87,98,17]
const primeNum = []
for(let i=0;i<arr.length;i++){
    var is_prime = true
    for(let j=2;j<arr[i];j++){
        if(arr[i]%j===0){
            is_prime = false
            break
        }
    }
    if(is_prime){
        primeNum.push(arr[i])
    }
}
console.log(primeNum)