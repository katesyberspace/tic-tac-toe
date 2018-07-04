var board = document.querySelector(".board");
var rows = document.querySelectorAll(".row");
var boxes = document.querySelectorAll(".row div");
var turnCount = 0;
var winnerOutput = document.querySelector(".winner");
var winnerFound = false;

var checkRow = function(boxClass){
  rows.forEach(function(row){
    var numMarksInLine = 0;
    for (var x = 0; x < rows.length; x++){
      if (row.children[x].classList.contains(boxClass) === true){
        numMarksInLine += 1;
      }
      if (numMarksInLine === rows.length){
        winnerFound = true;
        winnerOutput.textContent = boxClass + " wins!";  
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
        winnerOutput.textContent = boxClass; 
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
      winnerOutput.textContent = boxClass; 
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
        winnerOutput.textContent = boxClass;
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


  if (event.target.classList != 0){
    return
  }
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

  if (turnCount === 8 && winnerFound === false){
    winnerOutput.textContent = "Draw";
    boxes.forEach(function(box){
      box.className = "";
    })
    turnCount = 0;
  }

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




