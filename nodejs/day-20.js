//local module

// const math=require("./Math");

// console.log(math.add(3,2));
// console.log(math.check(4));
// console.log(math.mul(2,3));

const fs=require('fs');

//writing inside a file.

// fs.writeFileSync('test.txt','replace the text');

// fs.writeFile('test.txt',"I am writing inside the file",err=>{
//     if(err) throw err;
//     console.log("File written");
// })

//appending into a file
// fs.appendFile('test.txt',"\n Append the new text",err=>{
//     if(err) throw err;
//     console.log("Text has been appended");
// })

//reading the file

const data=fs.readFileSync('test.txt','utf-8');
console.log(data);