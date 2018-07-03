var board = document.querySelector(".board");
var row = document.querySelectorAll(".row");
var boxes = document.querySelectorAll(".row div");
var turnCount = 0;

var checkWinner = function(){
  //top row
    if ((boxes[0].className === boxes[1].className) && (boxes[0].className === boxes[2].className) ){
      console.log(boxes[0].className + " is the winner")
      }
    //second row
    else if ((boxes[3].className === boxes[4].className) && (boxes[3].className === boxes[5].className) ){
      console.log(boxes[3].className + " is the winner")
    }
  
    //third row
    else if ((boxes[6].className === boxes[7].className) && (boxes[6].className === boxes[8].className) ){
      console.log(boxes[6].className + " is the winner")
    }
  
    //first columm
    else if ((boxes[0].className === boxes[3].className) && (boxes[0].className === boxes[6].className) ){
      console.log(boxes[0].className + " is the winner")
    }
  
    //second column
    else if ((boxes[1].className === boxes[4].className) && (boxes[1].className === boxes[7].className) ){
      console.log(boxes[1].className + " is the winner")
    }
    //third column
  
    else if ((boxes[2].className === boxes[5].className) && (boxes[2].className === boxes[8].className) ){
      console.log(boxes[2].className + " is the winner")
    }
  
    //diagonal1
    else if ((boxes[0].className === boxes[4].className) && (boxes[0].className === boxes[8].className) ){
      console.log(boxes[0].className + " is the winner")
    }
  
    //diagonal2
    else if ((boxes[2].className === boxes[4].className) && (boxes[2].className === boxes[6].className) ){
      console.log(boxes[0].className + " is the winner")
  }
  }



var markBox = function(event){
  debugger
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
  checkWinner();
}

board.addEventListener("click", markBox); 








