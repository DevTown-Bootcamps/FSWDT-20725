//promise- resolve some operation js.
//resolve, reject.

// const promise=new Promise((resolve, reject)=>{

// });

// promise
//   .then(result=> console.log(result))
//   .catch(error=> console.error(error))
//   .finally(()=>console.log("Operation completed"));

// const mypromise=new Promise((resolve,reject)=>{
//     let success=false;

//     if(success){
//         resolve("Operation is running");
//     }
//     else{
//         reject("Failed to execute");
//     }
// });

// mypromise
//   .then(result=>{
//     console.log(result);
//   })
//   .catch(error=>{
//     console.log(error);
//   })
//   .finally(()=>{
//     console.log("Operation completed successfully");
//   })


// const falling=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Nothing went wrong");
//     },2000);
// });

// falling
//   .then(result=>{
//     console.log(result);
//   })
//   .catch(error=>{
//     console.error(error);
//   })
//   .finally(()=>{
//     console.log("I am a chill execution, will get executed in all cases");
//   })

// const fast=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("First One");
//     },500)
// });

// const slow=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Second One");
//     },1000)
// })

// Promise.race([fast,slow]).then(result=>{
//     console.log(result);
// });

function checkOddNumber(num){
    return new Promise((resolve,reject)=>{
        if(num%2===0){
            reject(`Rejected: ${num} is a even number`);
        }else{
            resolve(`Resolved: ${num} is an odd number`);
        }
    })
}

checkOddNumber(7)
 .then(result=>{
    console.log(result);
 })
 .catch(error=>{
    console.log(error);
 })

 checkOddNumber(10)
 .then(result=>{
    console.log(result);
 })
 .catch(error=>{
    console.log(error);
 })