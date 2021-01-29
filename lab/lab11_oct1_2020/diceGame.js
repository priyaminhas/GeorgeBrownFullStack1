
const getRandom=function(min,max){
    var num=Math.floor((Math.random()*max)+min);
    return num;
  }
  function playGame(player1,player2)
  {
    var dice1=getRandom(1,6) ;
    var dice2=getRandom(1,6) ;
    console.log(player1+" "+dice1); 
    console.log(player2+" "+dice2);
    if(dice1>dice2){
      console.log(player1+" won the round");
    }
    else if(dice1<dice2){
      console.log(player2+" won the round");
    }
    else{
      console.log("This round is tied");
    }
  }
  
  playGame("Priya Minhas","Mandeepak Singh");
  