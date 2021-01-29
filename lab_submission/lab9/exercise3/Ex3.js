function displayMessage(message)
{
    if(message==null)
        console.log("message is null");
    else if(message=="")
        console.log("message is empty");
    else    
        console.log(message);
}
var mess=prompt("Enter a message to Display");
displayMessage(mess);