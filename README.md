The Classic Tic Tac Toe Game with a Summer Time Twist!

The purpose of the project is to build the game board, have alternating turns for player1 and player2, and visually display the winner.

First step was to make the gameboard, which consists of 3 divs, each containing 3 boxes.  They are put together to make a 3x3 grid.

Next, I created a css style for player 1, and a css style for player2;  each would apply a different background image with the icon representing each player.

When a player clicks on a box, it will show their respective icon based on turns.

The turn logic is based on a %2 where even turns are player1, and odd turns are player2.

Players are not allowed to click the same box twice.  The logic for this is if the event target already has a class, no action. Otherwise apply the css style 