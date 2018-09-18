var fs = require('fs');
//경로 지정 잘해주기
fs.readFile('sample.txt', 'utf8', function(err,data){
    console.log(data);
});