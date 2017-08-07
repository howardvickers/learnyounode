// HELLO WORLD
// console.log("HELLO WORLD")

// BABY STEPS
// inputArr = process.argv
// lstNums = [] 
// lstTotal = 0
// for (var i=2; i<inputArr.length; i++)
//     lstNums.push(+process.argv[i])
//     for (var k=0; k<lstNums.length; k++)
//         lstTotal += lstNums[k]
//         console.log(lstTotal)

// MY FIRST I/O!
// var fs = require('fs')
// var contentText = fs.readFileSync(process.argv[2]).toString()
// var fileArr = contentText.split('\n')
// var numLineBreaks = fileArr.length-1
// console.log(numLineBreaks)

// MY FIRST ASYNC I/O!
// var fs = require('fs')
// fs.readFile(process.argv[2], function(err, data){
//     var contentText = data.toString()
//     var fileArr = contentText.split('\n')
//     var numLineBreaks = fileArr.length-1
//     console.log(numLineBreaks)
// })

// FILTERED LS
// var filteredItems = []
// var fs = require('fs')
// var path = process.argv[2]
// fs.readdir(path, function(err, list){
//     for (var i=0; i<list.length; i++){
//         var fileExt = list[i].split('.')[1]
//         if (fileExt === process.argv[3]){
//             console.log(list[i])
//         }
//     }
// })

// MAKE IT MODULAR
var mymodule = require('./mymodule.js')
mymodule()

