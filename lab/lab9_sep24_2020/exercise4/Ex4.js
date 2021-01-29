
function addNumbers(num1,num2)
{
    var sum=num1+num2;
    console.log("The addition of "+num1+" and "+num2+" is "+sum);
}
function subtractNumbers(num1,num2)
{
    var sub=num1-num2;
    console.log("The subtraction of "+num1+" and "+num2+" is "+sub);
}

function userPrompt(message)
{
    return prompt(message);

}

var func=userPrompt("Would you like to do addition(add) or subtraction(sub)?");

if(func=="add" || func=="sub")
{
    var num1=userPrompt("Enter the first Number");
    num1=parseInt(num1);
    var num2=userPrompt("Enter the second Number");
    num2=parseInt(num2);
}
else{
    console.log("Unknown operation entered");
  
}
switch(func){
    case "add":
        addNumbers(num1,num2);
        break;
    case "sub":
        subtractNumbers(num1,num2);
        break;
    default:
        alert("Please enter valid function name.")
}