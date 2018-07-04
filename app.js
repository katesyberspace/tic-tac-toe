var board = document.querySelector(".board");
var rows = document.querySelectorAll(".row");
var boxes = document.querySelectorAll(".row div");
var turnCount = 0;

var checkRow = function(boxClass){
  rows.forEach(function(row){
    var marksToWin = 0;
    for (var x = 0; x < rows.length; x++){
      if (row.children[x].classList.contains(boxClass) === true){
        marksToWin += 1;
      }
      if (marksToWin === rows.length){
      console.log(boxClass);  
      return
      }
    }
  })
}

var checkCol = function(boxClass){
  for (var x = 0; x < rows.length; x++){
    var marksToWin = 0;
    rows.forEach(function(row){
      if (row.children[x].classList.contains(boxClass) === true){
        marksToWin += 1;
      }
      if (marksToWin === rows.length){
        console.log(boxClass); 
      }
    })
  }
}

var checkRightDiagonal = function(boxClass){
  var marksToWin = 0;
  for (var i = 0; i < rows.length; i++){
    if (rows[i].children[i].classList.contains(boxClass) === true){
      marksToWin += 1;
    }
    if (marksToWin === rows.length){
      console.log(boxClass); 
    }
  }
}

var checkLeftDiagonal = function(boxClass){
  var marksToWin = 0;
  for (var x = 0; x < rows.length; x++){
      if (rows[x].children[rows.length-1-x].classList.contains(boxClass) === true){
        marksToWin += 1;
      }
      if (marksToWin === rows.length){
        console.log(boxClass); 
      }
  }
}

var markBox = function(event){
  if (event.target.classList != 0){
    return
  }
  else{ 
    if (turnCount % 2 === 0){
      event.target.classList.add("player1");
      checkRow("player1");
      checkCol("player1");
      checkRightDiagonal("player1");
      checkLeftDiagonal("player1");
    }
    else {
      event.target.classList.add("player2")
      checkRow("player2");
      checkCol("player2");
      checkRightDiagonal("player2");
      checkLeftDiagonal("player2");
    }  
    turnCount += 1
  }
}


board.addEventListener("click", markBox); 




