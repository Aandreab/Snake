let state = {
  grid: [],
  score: 0,
  size: 20,
  interval: null,
  milliseconds: 500,
  berryPosition: [],
  snake: {
    body: [[9, 11], [10, 11], [11, 11]],
    nextDirection: [0, 1]
  },
};

const gameBoard = document.querySelector('.gameBoard')
let scoreBoard = document.querySelector('.scoreBoard')


function buildGrid() {
  for (let i = 0; i < state.size; i++) {
    const row = [];
    for (let j = 0; j < state.size; j++) {
      row.push("");
    }
    state.grid.push(row);
  }
}

function renderBoard() {
  gameBoard.innerHTML = ''
  for (let i = 0; i < state.size; i++) {
    for (let j = 0; j < state.size; j++) {
      const square = document.createElement('div');
      square.setAttribute('class', 'square');
      square.setAttribute('data-x', j);
      square.setAttribute('data-y', i);
      if (state.grid[i][j] == 'berry') {
        square.classList.add('berry')
      }
      if (state.grid[i][j] == 'snake') {
        square.classList.add('snake')
      }
      // if (state.grid[i][j] !== 'snake') {
      //   square.classList.remove('snake')
      // }
      gameBoard.appendChild(square);
    }
  }
}

function newBerry() {
  let berryPositionX = Math.floor(Math.random() * state.size)
  let berryPositionY = Math.floor(Math.random() * state.size)
  state.berryPosition = [berryPositionX, berryPositionY];
  //new berry position if it picks the same box that the snake is in 
  while (state.grid[state.berryPosition] === 'snake') {
    berryPositionX = Math.floor(Math.random() * state.size)
    berryPositionY = Math.floor(Math.random() * state.size)
    state.berryPosition = [berryPositionX, berryPositionY];
  }
  console.log(state.berryPosition, 'berry');
}

function drawBerry() {
  const berryX = state.berryPosition[0];
  const berryY = state.berryPosition[1];
  state.grid[berryX][berryY] = 'berry';

  //console.log(state.berryPosition);
}


function drawSnake() {
  for (let i = 0; i < state.grid.length; i++) {
    for (let j = 0; j < state.grid.length; j++) {
      state.grid[i][j] = '';
    }
  }
  for (let i = 0; i < state.snake.body.length; i++) {
    const currentSnake = state.snake.body[i];
    const snakePositionX = currentSnake[0];
    const snakePositionY = currentSnake[1];
    state.grid[snakePositionX][snakePositionY] = 'snake';
  }
}


function startGame() {
  newBerry()
  drawSnake()
  state.interval = setInterval(tick, state.milliseconds);
  console.log('starting game...');
}
function restartGame() {
  state = {
    grid: [],
    score: 0,
    size: 20,
    interval: null,
    milliseconds: 500,
    berryPosition: [],
    snake: {
      body: [[9, 11], [10, 11], [11, 11]],
      nextDirection: [0, 1]
    },
  };
  startGame();
  console.log("restarting game...");
}

// call moveSnake helper function
// render snake to page
function tick() {

  moveSnake();
  drawSnake();
  drawBerry();
  renderBoard();
  eatBerry();
  //hitSnake();
  console.log(state.grid)
}


// pop the tail piece off the snake state
// unshift new head piece based on direction snake is going
function moveSnake() {
  const head = state.snake.body[state.snake.body.length - 1];
  const tail = state.snake.body[0]
  const endPiece = [tail[0], tail[1]]
  console.log(endPiece)
  const newSegment = [head[0], head[1]];
  newSegment[0] += state.snake.nextDirection[0];
  newSegment[1] += state.snake.nextDirection[1];
  state.snake.body.forEach((e) => {
    if (e[0] === newSegment[0] && e[1] === newSegment[1]) {
      clearInterval(state.interval);
      window.alert("Game Over!");
      return;
    }
  });
  if (newSegment[0] > state.size || newSegment[1] > state.size) {
    clearInterval(state.interval);
    window.alert("Game Over!");
    return;
  }
  state.snake.body.push(newSegment)
  state.snake.body.shift(endPiece)

}

function eatBerry() {
  const head = state.snake.body[state.snake.body.length - 1];
  if (head[0] === state.berryPosition[0] && head[1] === state.berryPosition[1]) {
    newBerry();
    state.snake.body.push(head)
    state.score++
    scoreBoard.innerHTML = 'SCORE: ' + state.score
    const audio = new Audio('/sounds/eat.wav')
    audio.play();
  }

}
//Adding modal later on 
function gameOver() {
  clearInterval(state.interval)
}
//Run functions
buildGrid();
newBerry();
renderBoard();
console.log(state.grid);

document.addEventListener("keydown", function (e) {
  window.event.preventDefault();
  switch (e.key) {
    case "ArrowLeft":
      //snake moves left
      if (
        state.snake.nextDirection[0] === 0 &&
        state.snake.nextDirection[1] === 1
      ) {
        return;
      }
      state.snake.nextDirection = [0, -1];
      break;
    case "ArrowUp":
      //snake moves up;
      if (
        state.snake.nextDirection[0] === 1 &&
        state.snake.nextDirection[1] === 0
      ) {
        return;
      }
      state.snake.nextDirection = [-1, 0];
      break;
    case "ArrowRight":
      //snake moves right;
      if (
        state.snake.nextDirection[0] === 0 &&
        state.snake.nextDirection[1] === -1
      ) {
        return;
      }
      state.snake.nextDirection = [0, 1];
      break;
    case "ArrowDown":
      //snake moves down;
      if (
        state.snake.nextDirection[0] === -1 &&
        state.snake.nextDirection[1] === 0
      ) {
        return;
      }
      state.snake.nextDirection = [1, 0];
      break;
  }
});
