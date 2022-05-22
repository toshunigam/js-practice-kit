// calculate your age by giving your DOB
const d = new Date

let dob = '1989-01-14'
let curdate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
// console.log(d.getMonth(), curdate,dob)

let date1 = new Date(dob)
let date2 = new Date()
let dateDiff = Math.floor(date2.getTime() - date1.getTime())
let dateDiff2 = Math.ceil((dateDiff)/(1000*24*60*60))
// console.log(Math.ceil(dateDiff2/365), 'year')
let day = 1000*60*60*24
let days = Math.floor(dateDiff/day)
let month = Math.floor(days/31)
let year = Math.floor(month/12)

console.log('AGE: Year ',year,' Month ',month,' days ',days)
// convert timestamp into date

const dd = new Date(dateDiff)
// console.log(dd.getDate()+'/'+(dd.getMonth()+1)+'/'+dd.getFullYear())


today = new Date()
past = new Date(1987,05,23)
//dates in js are counted from 0, so 05 is june


