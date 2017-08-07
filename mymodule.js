// MAKE IT MODULAR
module.exports = function(){
    var filteredItems = []
    var fs = require('fs')
    var path = process.argv[2]
    fs.readdir(path, function(err, list){
        for (var i=0; i<list.length; i++){
            var fileExt = list[i].split('.')[1]
            if (fileExt === process.argv[3]){
                console.log(list[i])
            }
        }
    })
}