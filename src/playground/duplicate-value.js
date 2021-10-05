// find the duplicate value from given array
var arr = [23,45,35,34,67,78,43,54,76,87,98,17,45,67,78,34]
var resultArr = []
for(let i=0; i<arr.length;i++){
    for(let j=i+1;j<=arr.length;j++){
        if(arr[i]===arr[j]){
            resultArr.push(arr[j])
        }
    }
}
console.log(resultArr)