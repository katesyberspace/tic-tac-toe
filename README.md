# ティック-タック-トウ
## The Classic Tic-Tac-Toe Game with a Japanese Theme.
### Take a break from your stressful day and enjoy the game.

https://katesyberspace.github.io/tic-tac-toe/

This is game to play on the browser (you can play on the phone, but choose dekstop version for best view).

A huge thank you to freepik, who created the icons used in the game.  The entire design of the interface was inspired by these logos.  Check out their website for more incredible icons: https://www.freepik.com.

The purpose of the project is to build the game board, have alternating turns for player one and player two, and visually display the winner.

The first step was to make the gameboard.  I decided to make mine with divs. My board consists of 3 divs classed "row", each "row" containing 3 divs.  The three "row" divs stacked together made a 3x3 grid.

Next, I created a css style for player1, and a css style for player2. Each would apply a different background image with the icon representing each player.
When a player clicks on a box, it will show their respective icon based on turns. The turn logic is based on a %2 where even turns are player1, and odd turns are player2.

Players are not allowed to click the same box twice.  The logic for this is if the event target already has a class, no action. 

The most difficult task was the create the win logic.  I originally hard-coded the winning patterns, but decided to scratch that idea and figure out a more algorithmic approach.  The idea was that if the game board expanded, the win logic would still work.

I developed the logic by drawing out the indexes for each row and div, and trying to visually see a pattern. Then I researched how to access the boxes with Javascript.  I ended up using a querySelectorAll on the class "row" which would return an array with 3 elements.  Then I joined that with .children to access each box inside the row.  Once I had these tools, I set on coding the win logic for rows, columns, right diagonals and left diagonals using a combination of loops and forEach. 

Though I understood in English terms how the win algorigthms worked, it took a while to implement the idea in Javascript. One major challenge was the scope of variables within nested loops.  Putting a variable outside the main loop, between the loops, or within the nested loop really altered the outcome of the function. It took a lot of trial and error to get the loops to do what I wanted.

I had a similar problem with my larger functions that had different functions within.  I knew I wanted to outer functions to run all the inner functions, but it took a bit of reshuffling to find the right order to run them in.

After the game was running on a static 3x3 grid, I wanted to make a way for the user to expand the grid.  I did this by creating a function to create a new row, with x number of boxes within the row (x being the size of the grid).  I comprimised the mobile responsiveness of the app to add the function for dynamic grid sizes. I am still trying to figure out how to add media queries to DOM elements. 

Looking back, I should have designed for mobile first, then tried to optimize for the browser. People are more likely to access the project through their phones, since people usually have their phones on them, but not a laptop.





