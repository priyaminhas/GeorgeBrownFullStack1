var allowedIntoMovie=function(num,boolVal){
    var movieAllow=false;
    if(num>=15 || boolVal==true){
        movieAllow=true;
    }
    console.log(movieAllow);
}
allowedIntoMovie(14,true);
allowedIntoMovie(14,false);
allowedIntoMovie(16,false);