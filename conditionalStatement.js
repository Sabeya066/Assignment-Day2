
//First Function
function launchBrowser(browserName){

    if(browserName==="chrome"){
console.log("We are using the chrome browser");
    }
else{
console.log("We are using the other browser");

}

}

launchBrowser("chrome");
//O/P:We are using the chrome browser
launchBrowser("Firefox");
//O/P:We are using the other browser

//Second function
function runTests(testType){

switch(testType){
case "smoke":
    console.log("You are running a smoke test");
break;
case "sanity":
    console.log("You are running a sanity test");
    break;
    case "regression":
        console.log("You are running a regression test");
        break;

        default:
            console.log("You are running a defaulted smoke test");
            break;

}
}
runTests("sanity");
// O/P:You are running a sanity test
runTests("smoke");
 // O/P:You are running a smoke test
 runTests("regression");
// O/P:You are running a regression test
runTests();