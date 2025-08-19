let fruit=["cheery","apple",14,32,15,false];
//cherry-0;
//apple-1
//14-2;
//32-3
//15-4
//false-5
// console.log(fruit);

//to compute length of the array- <array name>.length

//to add element to the end of our array- .push

// fruit.push("mango");

//.pop()-to take any element out of the end of array
// console.log(fruit.pop());

//unshift()-to add the element at the starting of the array
// fruit.unshift("pineapple");

//shift()-to remove the element from the starting of the array
// fruit.shift();

// console.log(fruit);

//indexof-to campute index of any given element in the array;
// console.log(fruit.indexOf(14));
// console.log(fruit.indexOf(54));

//includes()-to check if a element is present inside the array

// console.log(fruit.includes(32));
// console.log(fruit.includes(54));

//slice(start,end)-return a part of a array,It will print the values of index from start to end-1;

console.log(fruit.slice(1,4));
