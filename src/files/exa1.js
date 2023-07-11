const fs = require('fs')
fs.openSync('./text.txt','w')
let runTimeArgument = process.argv[2];
fs.writeFile("./text.txt", runTimeArgument+"\n", function(err){
    if(err) return console.log(err)

    console.log("The file was written and save")
})
console.log(fs.openSync('text.txt'))
console.log(process.argv[2])