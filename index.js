// //----old way----------------
// function multiply(Num1, Num2){

//         return Num1*Num2;
// }

// let result = multiply(2,3);
// console.log(result);
//------ECMA 5----------
// let multiply = function(Num1, Num2){

//         return Num1*Num2;
// }

// let result = multiply(2,3);
// console.log(result);

//-------arrow function ECMA 6---------
// let multiply =(Num1, Num2) => {

//     return Num1*Num2;
// }

// let result = multiply(2,3);
// console.log(result);
//------square for arrow function--------


// let square = (Num1) => {
//   //  return Num1*Num1;
//     return Math.pow(Num1,2);
// }

// let result = square(5);
// console.log(result);

//-------callback function--------

// let getDetails = function(id, callback){

//     console.log("Inside the function");
//     console.log("id is" +id);
//     callback();
// }

// getDetails(1,function(){

//     console.log("Finished" );
// })

//-----callback using arrow funciton------

// let getDetails = (id, callback) => {

//     console.log("Inside the function");
//     console.log("id is" +id);
//     callback();
// }

// getDetails(1,() =>{

//     console.log("Finished" );
// })


//-------callback with parameter---
// let getDetails = function(id,callback){

//         console.log("inside the function");
//         console.log("id" +id);
//         callback({id:id, name:'meera'}); //JSON object passed as a parameter
// }

// getDetails(1,function(person){

//         console.log(person);
//         console.log("finished");
// }
// );

//-------callback with parameter using arrow function-------//
// let getDetails = (id,callback)=>{

//     console.log("inside the function");
//     console.log("id" +id);
//     callback({id:id, name:'meera'}); //JSON object passed as a parameter
// }

// getDetails(1,(person) => {

//     console.log(person);
//     console.log("finished");
// }
// );

//---------async function--- using setTimeout-----

// console.log('before');
// setTimeout( () =>{
//     console.log('inside');
// } ,2000 //2 sec delay

// );

// function getUser(id){

//     setTimeout( () => {

//         return({id:id, Name:'meera'});
//     },2000

//     );
// }
// console.log("Before");
// const user = getUser(1);
// console.log(user);
// console.log("After");

// function getUser(id, callback){

//     setTimeout( () => {
//         callback({id:id, name:'meera'})
//     }
//     , 2000);
// }


// console.log('Before');
// getUser(1,function(user){

//     console.log(user);
// });

// console.log("After ");