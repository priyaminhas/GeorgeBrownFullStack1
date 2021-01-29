var a=-5;
var b=-2;
var c=17;
console.log("value of a is "+a);
console.log("value of b is "+b);
console.log("value of c is "+c);

if(a>b){
     if(b>c){
        console.log("a is greatest");
    }
    else if(c>a){
        console.log("c is greatest");
    }
    else{
        console.log("a is greatest"); 
    }
}
else{
    if(b>c){
        console.log("b is greatest");
    }
    else{
        console.log("c is greatest");
    }
} 

