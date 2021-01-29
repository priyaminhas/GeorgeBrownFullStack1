if (window.confirm("Do you want to see console messages?")) { 
    var num1=10;
    var num2=20;
    var num3=5;

    var sumN=sumNum(num1,num2);
    console.log(sumN);

    var mulN=mulNum(num1,num2);
    console.log(mulN);

    var subN=subNum(num2,num3);
    console.log(subN);


}
else{
    console.log('Cancelled!!');
}

  
function sumNum(a,b)
{
    var total=a+b;
    return total;
}
function mulNum(a,b) 
{  
    var total=a*b;
    return total;
}
function subNum(a,b)
{
    var total=a-b;
    return total;
}