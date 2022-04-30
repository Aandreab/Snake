let state = {
  grid: [],
  score: 0,
  size: 20,
  interval: null,
  milliseconds: 500,
  berryPosition: [],
  snake: {
    body: [[9, 11], [10, 11], [12, 11]],
    nextDirection: [0,1]
  },
};

const gameBoard = document.querySelector('.gameBoard')
//const grid = document.createElement('div')
let scoreBoard = document.getElementById('scoreBoard')
const startButton = document.querySelector('.startButton');
//startButton.addEventListener('click', startGame)
//state.berryPosition.forEach((index) => grid[index].classList.add('berry'))
function renderBoard() {
  for (let i = 0; i < state.size; i++) {
    for (let j = 0; j < state.size; j++) {
      const square = document.createElement('div');
      square.setAttribute('class', 'square');
      //gameBoard.appendChild(square);
      square.setAttribute('data-x', j);
      square.setAttribute('data-y', i);
      //square.classList.add('berry')
      gameBoard.appendChild(square);
    }

  }
}

renderBoard()

//const squares = document.getElementById('.square');
//let berry = squares[state.berryPosition]
//state.berryPosition.forEach((index) => gameBoard[index].classList.add('berry'))
function newBerry() {
  let berryPositionX = Math.floor(Math.random() * state.size)
  let berryPositionY = Math.floor(Math.random() * state.size)
  state.berryPosition = [berryPositionX, berryPositionY]
  //state.berry = gameBoard[state.berryPosition]
  //gameBoard.classList.add('berry')
  console.log(state.berryPosition);
  
}
state.berryPosition.forEach((index) => gameBoard[index].classList.add('berry'))
function startGame() {
  state.interval = setInterval(tick, state, state.milliseconds)
  newBerry();
}

function tick() {
  moveSnake();
  // call moveSnake helper function
  // render snake to page
}

function moveSnake() {
  // pop the tail piece off the snake state
  // unshift new head piece based on direction snake is going
}

document.addEventListener('keydown', function (e) {
  if (e.code == "ArrowUp" ) {
   console.log('hi');
  }
  else if (e.code == "ArrowDown" ) {
   
  }
  else if (e.code == "ArrowLeft" ) {
   
  }
  else if (e.code == "ArrowRight") {
   
  }
}
)
