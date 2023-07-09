const fs = require('fs')
fs.openSync('./text.txt','w')
fs.writeFile("./text.txt", "Hi Toshu", function(err){
    if(err) return console.log(err)

    console.log("The file was written and save")
})
console.log(fs.openSync('text.txt'))