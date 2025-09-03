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


const falling=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Nothing went wrong");
    },2000);
});

falling
  .then(result=>{
    console.log(result);
  })
  .catch(error=>{
    console.error(error);
  })
  .finally(()=>{
    console.log("I am a chill execution, will get executed in all cases");
  })