var board = document.querySelector(".board");
var rows = document.querySelectorAll(".row");
var boxes = document.querySelectorAll(".row div");
var winnerOutput = document.querySelector(".winner-output");
var resetBtn = document.querySelector(".reset-btn");
var grid3 = document.querySelector('.grid3');
var grid4 = document.querySelector('.grid4');
var grid5 = document.querySelector('.grid5');
var winnerFound = false;
var turnCount = 0;
var matchingBoxes = [];
var winningBoxes = [];
var maxTurns = 9;

var showTurn = function(turn){
  turn = turnCount
  if (turn %2 === 0){
    winnerOutput.textContent = "player one, go!";
  }
  else {
    winnerOutput.textContent = "player two, go!";
  }
}
showTurn();

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
  rows = document.querySelectorAll('.row');
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
  });
} 

var checkCol = function(boxClass){
  rows = document.querySelectorAll('.row');
  for (var col = 0; col < rows.length; col++){
    var numMarksInLine = 0;
    matchingBoxes = [];
    rows.forEach(function(row){
      if (row.children[col].classList.contains(boxClass) === true){
        numMarksInLine += 1;
        matchingBoxes.push(row.children[col]);
      }
      checkForWin(numMarksInLine, boxClass);
    });
  }
}

var checkRightDiagonal = function(boxClass){
  rows = document.querySelectorAll('.row');
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
  rows = document.querySelectorAll('.row');
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
  });
}

var markBox = function(event, totalTurns){
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
  
  totalTurns = maxTurns;
  if (turnCount === totalTurns && winnerFound === false){
    winnerOutput.textContent = "game over - everybody wins";
  }

  else if (winnerFound === true){
    showWinningBoxes();
  }

  else {
    showTurn();
  }
}

board.addEventListener("click", markBox); 

var resetGame = function(){
  boxes = document.querySelectorAll(".row div");
  boxes.forEach(function(box){
    box.className = "";
  });
  turnCount = 0;
  showTurn();
  winnerFound = false;
  winningBoxes.forEach(function(box){
    box.style.backgroundColor = "#97b0d8";
  });   
  winningBoxes = [];
}

resetBtn.addEventListener("click", resetGame);

var createNewRow = function(gridSize){
	var newRow = document.createElement('div');
  newRow.classList.add('row');
	for (var i = 0; i < gridSize; i++){
    var newCol = document.createElement('div');
		newCol.style.border = ".5px solid white";
    newCol.style.width = "120px";
    newCol.style.height = "120px";
    newCol.style.backgroundColor = "#97b0d8";
		newRow.appendChild(newCol);
  }
  board.appendChild(newRow);
  document.querySelector("body").style.textAlign = "center";
}

var clearBoard = function(){
  board.innerHTML = ""
}

var makeGrid = function (gridSize){
  resetGame();
  maxTurns = Math.pow(gridSize, 2);
  clearBoard();
  for (var i = 0; i < gridSize; i++){
    	createNewRow(gridSize);
  }
}

grid3.addEventListener("click", function(){
  makeGrid(3);
})

grid4.addEventListener("click", function(){
  makeGrid(4);
})

grid5.addEventListener("click", function(){
  makeGrid(5);
})