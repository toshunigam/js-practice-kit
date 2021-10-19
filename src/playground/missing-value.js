let arr = [4,3,1,3,5]
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
console.log(missing)
