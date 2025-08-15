// Logical operators-combine two or more conditional operators

let a=20;
let b=20;
let c=10;
// if(a===b); if(b>a)
// AND Operator
// true+true=true;
// true+false=false;
// false+true=false;
// false+false=false;
// console.log(a>b && a>c);
// console.log(a>b && a<c);
// console.log(a<b && a>c);
// console.log(a<b && a<c);


// OR operator
// true+true=true;
// true+false=true;
// false+true=true;
// false+false=false;
// console.log(a>b || a>c);
// console.log(a>b || a<c);
// console.log(a<b || a>c);
// console.log(a<b || a<c);


// if else condition

// if(a>20){
//     a-=10;
// }else{
//     a+=10;
// }

// console.log(a);

// ternary operators

let s=30;
let g=20;
let d=50;
let e='50';

// let result=s<g? true:false;

// console.log(result);

// 1)try checking if d and e are equal.loose and strict checking
// 2)create a case to check if s is largest of all three, s,g,d
// 3)create a case to check if s is smaller than any of the three

// if..else if..else


// if(s>50){
//     console.log('s greater than 50');
// }else if(s>20){
//     console.log("s is greater than 20");
// }else if(s>10){
//     console.log("s is greater than 10");
// }else{
//     console.log("s is smaller that 10");
// }

// nested if
// if(s>50){
//     console.log('s greater than 50');
// }
// if(s>20){
//     console.log('s greater than 20');
// }
// if(s>10){
//     console.log('s greater than 10');
// }

// nexted if

// if(s>10){
//     if(s>20){
//         if(s>50){
//             console.log("s is greater than 50");
//         }else{
//             console.log("s is greater than 20");
//         }
//     }else{
//         console.log("s us greater than 10");
//     }
// }else{
//     console.log("s is greater thab 0");
// }

// use if..else staement to check if a number is neagtive or positive

// Switch case

let grade=40;

switch(grade){
    case 80:
        console.log("A");
        break;
    case 70:
        console.log("B");
        break;
    case 60:
        console.log("C");
        break;
    default:
        console.log("F");    
}

// let day-4;

// 1-monday
// 2-tuesday
// 3-wednesday
// 4-thursdat
// 5-friday
// 6-saturday
// 7-sunday
