// let s="Anshul9793493@#$,.,.,";

// console.log(s);

//String="test";
// t e s t
// 0 1 2 3
//size=4;

// console.log(s.charAt(1));
// console.log(s.charAt(5));

// for(let i=0;i<s.length;i++){
//     console.log(s.charAt(i));
// }

let a="Testoperation";
// string-combination of characters

// console.log(a.toLowerCase());
// console.log(a.toUpperCase());
// console.log(a.indexOf('T'));
// console.log(a.includes('t'));
//slice(start,end)-from start to end-1;
// console.log(a.slice(1,5));

// console.log(a.substring(1,13));

let name=" Anshul Ojha ";
//trim()-removes any space from the starting and ending of the String.
// console.log(name.trim());

// let b="lets split all the string seperately";

// console.log(b.split(" "));

// let t="Anshul";
// let f="Ojha";

// let string=t+" "+f;
// console.log(string);

//if-else
//you can have a variable z, this contains number, check if the number is 
// divisible by 5 as well as divisible by 2,if it is divisble by both the numbers then print value of z/5;
//if it is not divisible print the remender of z/5;

//create a String array, and print starting 2 indexes of each String

let sample=["T","sample","operation","fruit"];

for(let i=0;i<sample.length;i++){
    if(sample[i].length>2){
    console.log(sample[i].slice(0,2));
    }
}