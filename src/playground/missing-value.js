let arr = [4,3,1,3,5,7]
var output = []

for(let i=0; i<arr.length;i++){
    for(let j=0; j<=arr.length;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}

let missing = []
for(let i=0;i<arr.length;i++){
    if(arr[i]!==i+1){
        missing.push(i+1)
    }
}

let multipleVal = []
for(let t=0;t<arr.length;t++){
    let count=0
    let duplicate = ''
    for(let i=0;i<arr.length;i++){
        if(arr[t]===arr[i]){
            count++
            duplicate=arr[i]
        }
    }
    multipleVal.find(res=> res===duplicate)
    if(count>1 && !multipleVal.find(res=> res===duplicate)){
        multipleVal.push(arr[t])
    }
}
console.log(arr)
console.log(missing)
console.log(multipleVal)
