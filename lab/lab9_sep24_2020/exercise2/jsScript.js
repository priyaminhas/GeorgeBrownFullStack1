displayMessage(null);
displayMessage("");
displayMessage("This message will print");
function displayMessage(message)
{
    if(message==null)
        console.log("message is null");
    else if(message=="")
        console.log("message is empty");
    else    
        console.log(message);
}