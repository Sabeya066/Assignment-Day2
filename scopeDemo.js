
console.log("First validation")

let genderType= "female";

function printGender(){
let color="brown";

if(genderType==="female"){
    var age=30;
    let color="pink";

console.log("Im inside the block scope and the color is:", color)
}

console.log("Im outside the block scope but inside the function and my age is:",age)
}

printGender();
console.log("The gender type is:", genderType);

// Age is accessible outside the if block because its declared as var and var is a function scope variable

/* O/P: First validation
Im inside the block scope and the color is: pink
Im outside the block scope but inside the function and my age is: 30
The gender type is: female */


//2) With age using let type instead of var
console.log("Second validation")

let genderType2= "female";

function printGender2(){
let color2="brown";

if(genderType2==="female"){
    let age2=35;
    let color2="pink";

console.log("Im inside the block scope and the color is:", color2)
}

//console.log("Im outside the block scope but inside the function and my age is:",age2)
console.log("Im outside the block scope but inside the function and my color is:", color2)

}

printGender2(); 
 
/* O/p: ReferenceError: age2 is not defined 
 If we use let its accessible only inside the block in which its declared

Second validation
Im inside the block scope and the color is: pink
Im outside the block scope but inside the function and my color is: brown */ 


//3) With genderType="male"
console.log("Third validation")
let genderType3="male";

function printGender3(){
let color3="brown";
if(genderType3==="female")
    {
var age3=30;
let color3="pink";
console.log("Im inside the block scope and the color is:", color)
}
console.log("Im outside the block scope but inside the function and my age is:", age3)

}

printGender3();
console.log(genderType3);

/* O/P: Im outside the block scope but inside the function and my age is: undefined
male // age is undefined because the if condition failed and var is hoisted in the function scope*/