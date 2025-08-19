// Loop in js

// for loop

//for(intialization,condition,updation)
//a++,++a; a=a+1;
//i=0;true,i=1;
//i=1;true;i=2;
//i=2;true;i=3;
//i=3;true;i=4;
//i=4;true;i=5;
//i=5;false; terminate=loop execution will stop here.


// for(let i=0;i<5;i++){
//     console.log(i);
// }

// let fruit=["apple","banana","pineapple"];

// for(let i=0;i<fruit.length;i++){
//     console.log(fruit[i]);
// }

// you can try printing all even numbers from 1 to 40;
// n%2==0-even
// n%2!==0-odd 

// while
// let i=0;
// while(i<fruit.length){
// console.log(fruit[i]);
// i++;
// }

//do-while
// let j=0;
// do{
//   fruit[j];
//   j++;
// }while(j<fruit.lenght)

// nested loops
//loop inside loop
// for(let i=0;i<5;i++){
//     for(let j=0;j<5;j++){
//         console.log(i," ",j);
//     }
// }

//total numer of execution-i*j-5*5=25;


//break-in a loop if you want to cancel the execution of the loop at any given time, at any given condition

// for(let k=1;k<=10;k++){
//     console.log(k);
//     if(k%2===0){
//       break;
//     }
// }

// for(let k=1;k<=10;k++){
//     if(k%2===0){
//       continue;
//     }
//     console.log(k);
// }

//take a loop and break the loop when a odd number is encountered
//take a loop and skip all odd numbers.

//for each..

let fruit=["apple","banana","pineapple"];

// fruit.forEach((a,index)=>{
//    console.log(a);
// })

//map..
let a=[1,2,3,4,5,6,7,8,9,10];
// let square=a.map(a=>a*a);
// console.log(square);

//.filter()
// let even=a.filter(a=> a%2===0);
// console.log(even);

//.reduce()
let sum=0;
for(let i=0;i<a.length;i++){
   sum+=a[i];
}
console.log(sum);

sum=a.reduce((total,current)=>total+current,0);
console.log(sum);

//total=0,current=0;
//current=1;total=1;
//current=2;total=3;
//current=3;total=6;
//current=4;total=10;
//current=5;total=15;
//current=6;total=21;
//current=7;total=28;
//current=8;total=36;
//current=9;total=45;
//current=10;total=55;

//compute cube of each element of an array and then print it using for..each();




