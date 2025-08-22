//function-it is a colllection of statements  defined to perform a role of functionality.
//reusable code block-
//if a number is prime or not.

// function function_name(paramter){
//     //code block
// }

// function greet(){
//     console.log("Hello");
// }


//calling a function-you call a function with its function name;
// greet();
// greet();
// greet();

function test(a){
  if(a%2===0){
    console.log("even");
  }else{
    console.log("odd");
  }
}

// test(8);
// test(3);
// test(6);

//return-it will send back the computed value;
// function add(a,b){
//     return a+b;
// }

// console.log(add(3,4));

//function expression
let add=function(a,b){
    return a+b;
}

console.log(add(4,5));

//arrow function
// const greet=()=>{
//     console.log("Hello");
// }

// greet();

//write a function to compute square of number.
//write a function to comppute cube of a number.

// function greet(a="guest"){
//   console.log(a);
// }

// greet();
// greet("Anshul");

function mul(a=3,b=6){
    return a*b;
}

console.log(mul());
console.log(mul(2));
console.log(mul(2,3));