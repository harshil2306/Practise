// let a = 10;
// console.log(a);
// let b = [1, 2, 3, 4, 5, 6];
// console.log(b);
// console.log("Welcome To India")


//JAVASCRIPT CONCEPTS

//========VARIABLES=======//
// THERE ARE MAINLY 3 METHODS TO DECLARE VARIABLE
//1
//a=10;//global variable
//2
//var b=20;//function scope
//3 
// let c=30;//block scope


// function fun(){
//     let a=10;
//     if(a==10){
//         g=20;
//         console.log("Inside",g);
//     }
//     console.log("Outside",g)

// }
// fun();
// console.log("Global",g); 

//function to find out the square root
/*square_root(10);
// sqrt_n(10);
function square_root(n){
    console.log("This is the 1st fun");
    // console.log("The Square Root of",n,"is:",Math.sqrt(n))
    //return "This is from return";
    return;
}

//FUNCTION HOISTING

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. but like this below code is not moved up because it has different kind of fucntion so if sqrt_n(10); in on top error will generate ,but if the sqrt_n(10); is below the sqrt_n(10); function then error will not be generated
var sqrt_n = function(){
    console.log("This is the 2nd fun");
    return;

}
sqrt_n(10);*/

//ARRAYS
let array =["Joey","Phoebe","Ross","Chandler","Monica","Rachel"]
console.log(array)
// for(let i=0;i=5;i++){
//     console.log(array[i]);
// }
// //on console side
// array.push()//insert at back
// array.pop()//remove from back
// array.shift()//remove from front
// array.unshift()//insert at front
// array.indexOf("Gunther")//finds the index;
//conditional 
if(array[0]=="Joey"){
    console.log(array[0],"Found!");
}
else{
    console.log(array[0],"Not Found!");
}
