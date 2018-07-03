var board = document.querySelector(".board");
var row = document.querySelector(".row");
var boxes = document.querySelectorAll(".row div");
var turnCount = 0;


var markBox = function(event){
  if (event.target.classList != 0){
    return
  }
  else{ 
    if (turnCount % 2 === 0){
      event.target.classList.add("player1");
    }
    else {
      event.target.classList.add("player2")
    }  
    turnCount += 1
  }
}

board.addEventListener("click", markBox);

var checkWinner = function(){

}





