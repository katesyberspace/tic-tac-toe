# ティック-タック-トウ
## The Classic Tic-Tac-Toe Game with a Japanese Theme.
### Take a break from your stressful day and enjoy the game.

https://katesyberspace.github.io/tic-tac-toe/

The purpose of the project is to build the game board, have alternating turns for player one and player two, and visually display the winner.

The first step was to make the gameboard, which consists of 3 divs classed "row", each "row" containing 3 divs.  They are put together to make a 3x3 grid.

Next, I created a css style for player1, and a css style for player2;  each would apply a different background image with the icon representing each player.
When a player clicks on a box, it will show their respective icon based on turns. The turn logic is based on a %2 where even turns are player1, and odd turns are player2.

Players are not allowed to click the same box twice.  The logic for this is if the event target already has a class, no action. 

The most difficult task was the create the win logic.  I originally hard-coded the winning patterns, but decided to scratch that idea and figure out a more algorithmic approach.  The idea was that if the game board expanded, the win logic would still work.

I developed the logic by drawing out the indexes for each row and div, and trying to visually see a pattern. Then I researched how to access the boxes with Javascript.  I ended up using a querySelectorAll on the class "row" which would return an array with 3 elements.  Then I joined that with .children, to then access each box inside the row.  Once I had these tools, I set on creating the win logic for rows, columns, right diagonals and left diagonals using a combination of loops and forEach. 

If the boxes in the winning combination had the same css class style, each winning box is pushed into a global array so that I could change their background color on win.

A reset button added below the gameboard so the game could be reset at any point in time.

After the game was running on a static 3x3 grid, I wanted to make a way for the user to expand the grid.  I did this by creating a function to create a new row, with x number of boxes within the row (x being the size of the grid).  Then the create new row goes into a function called createdGrid, which runs the create new row function as many times as the grid size.

The last thing to do was to create buttons representing the different grid size options.

I comprimised the mobile responsiveness of the app to add the function for dynamic grid sizes. This is still an unsolved problem.



