let obj = new Object()
console.log(obj) // {}

let obj2 = new Object(undefined)
console.log(obj2) // {}

let obj3 = new Object(null)
console.log(obj3) // {}

let obj4 = new Object(true)
console.log(obj4) // [Boolean: true]

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
console.log(user)

const jsonObj = {'a':1,'b':2,'c':3,'d':4,'e':5}
for(const [key,value] of Object.entries(jsonObj)){
    console.log(`${key} : ${value}`)
}