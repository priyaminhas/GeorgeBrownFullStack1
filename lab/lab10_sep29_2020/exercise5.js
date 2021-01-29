function calculator(num1,method,num2){
    if(checkBool(num1) || checkBool(num2)){
        console.log("Please enter a number only not bool value");
        return true;
    }
    if(isNaN(num1) || isNaN(num2)){
        console.log("Please enter a number only");
        return true;
    }
    if(num2==0){
        console.log("Can't divide by 0!");
        return true;
    }
    var result;
    switch(method){
        case "+":
            result=num1+num2;
            break;
        case "-":
            result=num1-num2;
            break;
        case "*":
            result=num1*num2;
            break;
        case "/":
            result=num1/num2;
            break;
        default:
            console.log("Method is not correct");
    }
    console.log(result);
}
function checkBool(num)
{
    if(typeof(num)=="boolean")
        return true;
    else
        return false;
}
calculator(2,"+",2);
calculator(2,"*",2);
calculator(4,"/",2);
calculator(10,"-",5);
calculator(4,"/",0);
calculator(true,"+",5);
calculator(10,"+","asdf");