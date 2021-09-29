
/**
 * Problem 1
 * let data = [1,2,3,5,6,3,5,2]; 
 * Find all numbers divisible by 2 and push to data using .map in JavaScript 
 */
console.log('Problem 1')
let data = [1,2,3,5,6,3,5,2];
const result = []
for(let i=0; i<=data.length;i++){
    if(i%2===0) {
        result.push(i)
    }
}
console.log(result)
/**
 * Problem 2
 * const clothes = ['jacket', 't-shirt']; 
 * clothes.length = 0; 
 * What will be the output of clothes[0]; 

 */
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;  
console.log('Problem 2')
console.log('Print Undefined ',clothes[0]) //undefined

/**
 * Problem 3
 * let lunchslot = ['09:30-10:00', '10:30-11:00', '13:00-13:30', '15:30-16:00']; 
	
allSlots = ['07:00-07:30', '08:30-09:00', '10:30-11:00', '12:00-12:30', '15:30-16:00']; 
	
Find all slots from allSlots which are not in lunchslots, remove all slots of lunchslots from allSlots and return the remaining slots. 

 */
const allSlots = ['07:00-07:30', '08:30-09:00', '10:30-11:00', '12:00-12:30', '15:30-16:00']; 
let lunchslot = ['09:30-10:00', '10:30-11:00', '13:00-13:30', '15:30-16:00']; 
	
	
const allSlot = []
for(let i=0;i<allSlots.length;i++){
    var match = false
    for(let j=0;j<lunchslot.length;j++){
        if(allSlots[i]===lunchslot[j]){
            match=true
        }
    }
    if(!match){
        allSlot.push(allSlots[i])
    }
}

/* allSlots.map(item=>{
    let data = lunchslot.filter(ele=>{
        return ele!=item
        
    })
    console.log('DATA',data)
    allSlot.push(data)

}) */
console.log('Problem 3')
console.log(allSlot)

/**
 * Problem 4
 * Function to find prime numbers. 
 */
function isPrime(n){
    let prime = true
    for(let i=2;i<n;i++){
        if(n%i==0){
            prime = false
        }
    }
    return prime
}
console.log('Problem 4')
console.log(isPrime(7))
console.log(isPrime(8))
/**
 * Problem 5
 * Function which returns sum of all numbers in an array where function takes one argument which the array. 
 */
 console.log('Problem 5')
 let dataset = [1,2,3,5,6,3,5,2];
 console.log(dataset.reduce((acc, curr)=> acc+curr))
/**
 * Problem 6
 */
 let student1 = [{ 
    name: 'Ankush', 
    age: 21, 
    gender: 'Male', 
    address: { 
      city: 'New Delhi', 
      pincode: 110062, 
      state: 'Delhi' 
    } 
  }]; 

  let student2 = [{ 
    name: 'Rahul', 
    age: 21, 
    gender: 'Male', 
    address: { 
      city: 'New Delhi', 
      pincode: 110042, 
      state: 'Delhi' 
    } 
  }]; 

  let student3 = [{ 
    name: 'Rahul', 
    age: 21, 
    gender: 'Male' 
  }]; 
   
  let student4 = [{ 
    name: 'Tina', 
    age: 25, 
    gender: 'Female', 
    address: { 
      city: 'Ghaziabad', 
      pincode: 201007, 
      state: 'UP' 
    } 
  }]; 
   
//   Push these students data into an array and find those students whose state is Delhi 
//   Find all data with gender as Female
  
console.log('Problem 6')
const students = student1.concat(student2,student3,student4)
console.log(students)
const delhiStudent = students.filter(item=> {
    if(item.address!==undefined) return item.address.state==='Delhi'
})
console.log('delhi students', delhiStudent)
const femaleStudent = students.filter(item=> item.gender=='Female')
console.log('Female student', femaleStudent)

/**
 * Problem 7
 */
 slots = {
    '11:00-11:30': 3,
    '11:30-12:00': 4,
    '14:30-15:00': 6,
    '10:30-11:00': 14,
   };
// Iterate over the above JSON data and print the response in below format:
// ['11:00-11:30 (3)', '11:30-12:00 (4)', '14:30-15:00 (6)', '10:30-11:00 (14)']
console.log('Problem 7')
const formetedData = []
for(var attributes in slots){
    let format = `${attributes} (${slots[attributes]})`
    formetedData.push(format)
}
console.log(formetedData)
