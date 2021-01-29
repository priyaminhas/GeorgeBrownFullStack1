
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
function mulNumbers(num1,num2)
{
    var mul=num1*num2;
    console.log("The multiplication of "+num1+" and "+num2+" is "+mul);
}
function divNumbers(num1,num2)
{
    var div=num1/num2;
    console.log("The division of "+num1+" and "+num2+" is "+div);
}

function userPrompt(message)
{
    return prompt(message);

}
function checkNum(num)
{
    if(isNaN(num))
    {
        var num=prompt("Enter the number and not anything else");
        return num;
    }
    else{
        return num;
    }
}
var func=userPrompt("Would you like to do addition(+) or subtraction(-) or multiplication(*) or division(/) ?");
var num1=userPrompt("Enter the first Number");
while(isNaN(num1))
{
    var num1=prompt("Enter the number and not anything else");
}

var num2=userPrompt("Enter the second Number");
while(isNaN(num2))
{
    var num2=prompt("Enter the number and not anything else");
}

switch(func){
    case "+":
        addNumbers(num1,num2);
        break;
    case "-":
        subtractNumbers(num1,num2);
        break;
    case "*":
        mulNumbers(num1,num2);
        break;
    case "/":
        divNumbers(num1,num2);
        break;
    default:
        alert("Please enter valid function name.")
}