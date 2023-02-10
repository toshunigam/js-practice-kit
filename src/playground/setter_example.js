/*
 * There are two kind of object properties 1) Data Properties 2) Accessor Properties
 *
*/
const person = {
    firstName:'Vandana',
    set changeName(changeName){
        return this.firstName = changeName
    }
}
// accessing data property
console.log(person.firstName)
person.changeName='Toshu'
// again accessing getter methods
console.log(person.firstName)
// trying to access as a method
console.log(person.changeName()) // This will give error
