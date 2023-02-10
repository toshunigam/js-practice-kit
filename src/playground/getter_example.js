/*
 * There are two kind of object properties 1) Data Properties 2) Accessor Properties
 *
*/
const person = {
	firstName:'Toshu',
	get getName(){
		return this.firstName
	}
}
// accessing data property
console.log(person.firstName)
// accessing getter methods
console.log(person.getName)
// changing name
person.firstName='Vandana'
// again accessing getter methods
console.log(person.getName)
// trying to access as a method
console.log(person.getName()) // This will give error
