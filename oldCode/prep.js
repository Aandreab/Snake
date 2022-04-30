const gameBoard = document.querySelector('.gameBoard')

function renderBoard() {
  for (let i = 0; i < 400; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    gameBoard.appendChild(square);
  }
}
renderBoard()

const squares = document.querySelectorAll('.square');
//const square = document.getElementsByClassName('square')
let snakePosition = [249, 269, 289];
let berryPosition = 0
let direction = 1
let eatSound = new Audio('sounds/eat.wav')
let score = 0;
let scoreBoard = document.querySelector('.scoreBoard')
let speed = 1;
let interval = 0
let berry = squares[berryPosition]
let intervalSpeed = 500
let width = 20
let index = 0
const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', startGame)
snakePosition.forEach((index) => squares[index].classList.add('snake'))

function startGame() {
  snakePosition.forEach((index) => squares[index].classList.remove('.snake'))
  snakePosition.forEach((index) => squares[index].classList.add('snake'))
  squares[berryPosition].classList.remove('berry')
  interval = setInterval(tick, intervalSpeed)
  score = 0
  direction = 1
  intervalSpeed = 500
  scoreBoard.innerText = score
  newBerry()
  tick()
}


function tick() {
  if (
    (snakePosition[0] + width >+ (width * width) && direction === width ) ||
    (snakePosition[0] % width === width -1 && direction === -1 ) ||
    (snakePosition[0] % width === 0 && direction === -1) ||
    (snakePosition[0] - width < 0 && direction === -width )
  )
  {
  return clearInterval(interval)
  }

  let tail = snakePosition.length -1
  squares[tail].classList.remove('snake')
  snakePosition.unshift(snakePosition[0] + direction)
  squares[snakePosition[0]].classList.add['snake']

  if (squares[snakePosition[0]].classList.contains('newBerry')){
    squares[snakePosition[0]].classList.remove('newBerry')
    squares[tail].classList.add('snake')
    snakePosition.push(tail)
    score++
    scoreDisplay.textContent = score
    clearInterval(interval)
    intervalSpeed = intervalSpeed * speed
    interval = setInterval(tick, intervalSpeed)
  }
  squares[snakePosition[0]].classList.add['snake']
}


document.addEventListener('keydown', function (e) {
  if (!e.key.includes('Arrow')) {
    return;
  }
  switch (e.key) {
    case 'ArrowUp':
      head = head - width
      console.log('ArrowUp')
      direction = - width
      break;
    case 'ArrowDown':
      head = head + width
      console.log('ArrowDown')
      break;
    case 'ArrowLeft':
      head = head - 1
      console.log('ArrowLeft')
      break;
    case 'ArrowRight':
      head = head + 1
      console.log('ArrowRight')
      break;
    default:
      break;

  }
})


function newBerry() {
  berryPosition = Math.floor(Math.random() * squares.length)
  squares[berryPosition].classList.add('berry')
  //do{
  //}
  //while{
  console.log('newBerry');
  //}
}
