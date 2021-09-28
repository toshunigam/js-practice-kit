var arr = [21,1,23,4,56,53,323,4,0]
var sortAr=[]
var temp = null
for(let i=0;i<=arr.length;i++){
    
    for(let j=0;j<=arr.length-1;j++){
        temp = arr[i]
        if(arr[j]>temp){
            temp=arr[j]
        }
    }
    sortAr.push(temp)
}
console.log(sortAr)