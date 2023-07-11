const fs = require("fs")
fs.open('./text.txt', 'a', 666, function(e, id){
    fs.write(id, process.argv[2], null, 'utf8', function(){
        fs.close(id, function(){
            console.log('File is closed')
        })
    })
})