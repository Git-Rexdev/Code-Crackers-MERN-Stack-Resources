 // variables
//  console.log(a);
//  var a =10;
//  var a="hello";

// //let hoisting not allowed in let key word 
// let b = 10;
// b=50;
// console.log(b);

// //const hoisting not allowed in let key word we can't redeclare and redefine 
// const c =10;
// // c=30; 
// console.log(c);

//control flows in javascript 
//conditional statements and nested if else 
// if(true){
//     //statement 
//     if(false){
//         //logic/statements 
//         console.log("nested if")
//     }else{
//         //statement
//         console.log("nested else")
//     }
// }else{
//     //statement 
// }

//switch case 
// switch(20){
//    case 1:
//     console.log("value one");
//    case 2:
//      console.log("value two");
//     default:
//         console.log("default value");
// }

// loops 
// for(i=1;i<=15;i++){
//     console.log(i)
// }

// let i= 10;
// while(i>1){
//     console.log(i);
//         i--;
// }

// let i=0
// do{
//     console.log(i);
//     i++;
// }while(i<=10);


//Block statments or block of code which can be used multiple times 
// function 
//function statements or function declaration 
//  function fun(){
//      console.log("hello function !")
//  }
//  fun()

//arguments and parameters 
//   function fun(a, b){

//       console.log("hello function !",a+b)  //concatination of a and b 
//       return a + b;

//   }
//  const a = fun("Mohit","Rathi")  //functtion calling 

//  var f = fun();
//  console.log(f())
// function f(){}
// function expressions
//  const  f = function (){
//      return 2+5;
//  }
//   console.log(f);


// console.log(f());


// function anonymous we can't use this functions for using we have to pass it in variable 
//  function (){
//      console.log("anonymous function")
//  }

// arrow functions 
//   const fun =(a,b) =>{
//      return a+b;
//   };
//   console.log(fun(5,6));

// first(function(){           //this is function call where i'm passing anonymous function 
//     console.log("Hey this is second function !")
// })
// function first(a){  //getting that anonymous function in a variable 
//  a();
//  console.log(a)                   //a function called 
// }

//first class functions 
// function firstclass(){
//     // console.log("In firestclass")
//     return function (){
//         console.log("returned function.");
//     };
// }

// const first_class = firstclass();

// console.log(first_class())

//classes 
//  class User{

//       constructor(Name, Email, Password){
//           this.userName = Name ;
//           this.userEmail = Email;
//           this.userPassword = Password;
//       }
 
//         encryptPassword(){
//           return `${this.userPassword}dsdhf` //template litrals writen in `tilda symball`
//       }

//        changeUserName (){
//           return  `${this.userName.toUpperCase()}`
//       }
//  }

//  let studentName = "MoHiT";
//  let Password = "1234";
//  let Email = "mhoit@codecrakers.com";
//  const student = new User(studentName, Email, Password );

// console.log("Your encrypted password is this : ",student.encryptPassword());
// console.log("Your name is : ",student.changeUserName());



// let a =10;

// function b(){
//         console.log("i'm in B.",a)
// c();
//     function c(){
//         console.log("i'm in C.")
//     }
// }
// b();

