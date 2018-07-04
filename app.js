var board = document.querySelector(".board");
var rows = document.querySelectorAll(".row");
var boxes = document.querySelectorAll(".row div");
var winnerOutput = document.querySelector(".winner-output");
var winnerFound = false;
var turnCount = 0;
var matchingBoxes = [];
var winningBoxes = [];



var getWinningBoxes = function(){
  matchingBoxes.forEach(function(box){
    winningBoxes.push(box);
  })
}

var checkRow = function(boxClass){
  rows.forEach(function(row){
    var numMarksInLine = 0;
    for (var col = 0; col < rows.length; col++){
      if (row.children[col].classList.contains(boxClass) === true){
        numMarksInLine += 1;
        matchingBoxes.push(row.children[col]);
      }
      if (numMarksInLine === rows.length){
        winnerFound = true;
        getWinningBoxes();
        //maybe take the winnerOutput out of this function and put in the markBox function. might need a global variable, winning class
        // winnerOutput.textContent = "game over " + boxClass + " wins!";  
      }
    }
  })
} 

var checkCol = function(boxClass){
  for (var x = 0; x < rows.length; x++){
    var numMarksInLine = 0;
    rows.forEach(function(row){
      if (row.children[x].classList.contains(boxClass) === true){
        numMarksInLine += 1;
      }
      if (numMarksInLine === rows.length){
        winnerFound = true;
        winnerOutput.textContent = "game over " + boxClass + " wins!"; 
      }
    })
  }
}

var checkRightDiagonal = function(boxClass){
  var numMarksInLine = 0;
  for (var i = 0; i < rows.length; i++){
    if (rows[i].children[i].classList.contains(boxClass) === true){
      numMarksInLine += 1;
    }
    if (numMarksInLine === rows.length){
      winnerFound = true;
      winnerOutput.textContent = "game over " + boxClass + " wins!"; 
    }
  }
}

var checkLeftDiagonal = function(boxClass){
  var numMarksInLine = 0;
  for (var x = 0; x < rows.length; x++){
      if (rows[x].children[rows.length-1-x].classList.contains(boxClass) === true){
        numMarksInLine += 1;
      }
      if (numMarksInLine === rows.length){
        winnerFound = true;
        winnerOutput.textContent = "game over " + boxClass + " wins!";
      }
  }
}

var checkForWinner = function(boxClass){
  checkRow(boxClass);
  checkCol(boxClass);
  checkRightDiagonal(boxClass);
  checkLeftDiagonal(boxClass);
}

var markBox = function(event){
  //stop players from clicking the same box twice - if box already has a style class return 
  if (event.target.classList != 0){
    return
  }
  //checking who's turn it is, based on even turns being player1 and odd turns being player2
  else{ 
    if (turnCount % 2 === 0){ 
      event.target.classList.add("player1");
      checkForWinner("player1");
    }
    else {
      event.target.classList.add("player2")
      checkForWinner("player2");
    }  
    turnCount += 1
  }
  //if there is no winner by turn 8, winnerOutput to show "Draw"
  if (turnCount === 8 && winnerFound === false){
    winnerOutput.textContent = "game over - everybody wins";
    //clear game board of all styles (eg icons)
    boxes.forEach(function(box){
      box.className = "";
    })
    //reset turn count
    turnCount = 0;
  }

  //if someone has won based on game status winnderFound = true 
  else if (winnerFound === true){
    boxes.forEach(function(box){
      box.className = "";
    })
    turnCount = 0;
    winnerFound = false;
    // winnerOutput.textContent = "";
  }
}

board.addEventListener("click", markBox); 




