

function numberCheck(number){

    if(number>0){
        console.log("The given no is positive");
    }
else if(number <0){
    console.log("The given no is negative")
}
else{
    console.log("YOu have entered the number or initialized value as zero")
}


}
numberCheck(0);
//O/p: YOu have entered the number or initialized value as zero
numberCheck(89);
//O/P: The given no is positive
numberCheck(-98);
//O/P: The given no is negative



function numberCheck2(number2){

    if(number2>0){
        return "positive";
    }
else if(number2<0){
    return "negative";
}
else{
    return "zero";
}


}

let number2=-17;
//Based on the number assigned we get the output
let result=numberCheck2(number2);

console.log("The given no is", result)
