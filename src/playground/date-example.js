// calculate your age by giving your DOB
const d = new Date

let dob = '1989-01-14'
let curdate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
// console.log(d.getMonth(), curdate,dob)

let date1 = new Date(dob)
let date2 = new Date(curdate)
let dateDiff = date2 - date1
dateDiff = Math.ceil((dateDiff)/(1000*24*60*60))
console.log(Math.ceil(dateDiff/365), 'year')

// convert timestamp into date