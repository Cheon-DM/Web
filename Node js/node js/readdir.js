// file 리스트를 배열로 읽어옴 (ex. CSS, HTML, JS)
var testFolder = './data';
var fs = require('fs');
 
fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})