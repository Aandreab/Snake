/*In all of the games below you must figure out:

What is the starting state?
How do I display the state of the game to the user?
What controls/interface to I make available to the user?
How does each interaction update the state?
In many ways, this is the "game loop": show state -> wait for input -> update state -> go to step 1
*/




// state
//let initialState;

//function buildInitialState() {

//}

// render
function renderState() {

}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

  renderState() // show the user the new state
}
const board = document.getElementById('board');
board.addEventListener('click', onBoardClick); // etc




//The only thing that changes is in arcade games, where time and tide wait for no one.

//Here, the game loop is more: show state -> update state -> go back to step 1, all the meanwhile the user can also interact, and the game will update accordingly at the same time.

// add to above
function tick() {
  // this is an incremental change that happens to the state every time you update...

  renderState()
}

setInterval(tick, 1000 / 30) // as close to 30 frames per second as possible

// now you might have things like
document.addEventListener('keydown', function (event) {
  // here you might read which key was pressed and update the state accordingly
})




document.gameBoard.addEventListener('keyup', function(event){
  console.log(event.key);
  if (event)
}







//before changes

let snake = {
    body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
    nextDirection: [1, 0]
  }
  
  let gameState = {
    apple: [11, 8],
    snake: snake // from above
  }
  
  
  
  // initial state
  let initialSnakePosition = [346, 347, 348];
  let initialFoodPosition = 110;
  const square = document.querySelectorAll('.gameBoard .square');
  
  function buildInitialState() {
  
  }
  
  //Render
  function renderState() {
  
  }
  
  
    
  ]
  