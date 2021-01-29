var orderItem=window.prompt("Would You like Coffee,Tea or Water?");
orderItem=orderItem.toLowerCase()
switch(orderItem){
    case "coffee":
        console.log("The order is Coffee");
        console.log("Total is $2.50");
        break;
    case "tea":
        console.log("The order is Tea");
        console.log("Total is $1.50");
        break;
    case "water":
        console.log("The order is Water");
        console.log("Total is $3.00");
        break;
    default:
        console.log("Incorrect Menu Item");
}