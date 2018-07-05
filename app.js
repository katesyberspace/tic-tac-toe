var board = document.querySelector(".board");
var rows = document.querySelectorAll(".row");
var boxes = document.querySelectorAll(".row div");
var winnerOutput = document.querySelector(".winner-output");
var resetBtn = document.querySelector(".reset-btn");
var winnerFound = false;
var turnCount = 0;
var matchingBoxes = [];
var winningBoxes = [];


var getWinningBoxes = function(){
  matchingBoxes.forEach(function(box){
    winningBoxes.push(box);
  });
}

var declareWinner = function(boxClass){
  if (boxClass === "player1"){
    winnerOutput.textContent = "player one wins!";
  }
  else if (boxClass === "player2"){
    winnerOutput.textContent = "player two wins!";
  }
}

var checkForWin = function(numMarksInLine, boxClass){
  if (numMarksInLine === rows.length){
    winnerFound = true;
    declareWinner(boxClass);
    getWinningBoxes();
  }
}

var checkRow = function(boxClass){
  rows.forEach(function(row){
    var numMarksInLine = 0;
    matchingBoxes = [];
    for (var col = 0; col < rows.length; col++){
      if (row.children[col].classList.contains(boxClass) === true){
        numMarksInLine += 1;
        matchingBoxes.push(row.children[col]);
      }
      checkForWin(numMarksInLine, boxClass);
    }
  })
} 

var checkCol = function(boxClass){
  for (var col = 0; col < rows.length; col++){
    var numMarksInLine = 0;
    matchingBoxes = [];
    rows.forEach(function(row){
      if (row.children[col].classList.contains(boxClass) === true){
        numMarksInLine += 1;
        matchingBoxes.push(row.children[col]);
      }
      checkForWin(numMarksInLine, boxClass);
    })
  }
}

var checkRightDiagonal = function(boxClass){
  var numMarksInLine = 0;
  matchingBoxes = [];
  for (var index = 0; index < rows.length; index++){
    if (rows[index].children[index].classList.contains(boxClass) === true){
      numMarksInLine += 1;
      matchingBoxes.push(rows[index].children[index]);
    }
    checkForWin(numMarksInLine, boxClass);
  }
}

var checkLeftDiagonal = function(boxClass){
  var numMarksInLine = 0;
  matchingBoxes = [];
  for (var index = 0; index < rows.length; index++){
    if (rows[index].children[rows.length-1-index].classList.contains(boxClass) === true){
      numMarksInLine += 1;
      matchingBoxes.push(rows[index].children[rows.length-1-index]);
    }
    checkForWin(numMarksInLine, boxClass);  
  }
}

var runWinLogic = function(boxClass){
  checkRow(boxClass);
  checkCol(boxClass);
  checkRightDiagonal(boxClass);
  checkLeftDiagonal(boxClass);
}

var showWinningBoxes  = function(){
  winningBoxes.forEach(function(box){
    box.style.backgroundColor = "#f7dfa1";
  })
}

var markBox = function(event){
  if (winnerFound === true){
    return
  }
  if (event.target.classList != 0){
    return
  }

  else{ 
    if (turnCount % 2 === 0){ 
      event.target.classList.add("player1");
      runWinLogic("player1");
    }
    else {
      event.target.classList.add("player2");
      runWinLogic("player2");
    }  
    turnCount += 1;
  }
  
  if (turnCount === 9 && winnerFound === false){
    winnerOutput.textContent = "game over - everybody wins";
  }

  else if (winnerFound === true){
    showWinningBoxes();
  }
}

board.addEventListener("click", markBox); 

var resetGame = function(){
  boxes.forEach(function(box){
    box.className = "";
  });
  turnCount = 0;
  winnerOutput.textContent = "";
  winnerFound = false;
  winningBoxes.forEach(function(box){
    box.style.backgroundColor = "#97b0d8";
  });
  winningBoxes = [];
}

resetBtn.addEventListener("click", resetGame);



