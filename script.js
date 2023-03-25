const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let x=0
let o=0
let element
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const board1 = document.getElementById('board1')
const board2 = document.getElementById('board2')
const resultx = document.querySelector('.resultx')
const resulto = document.querySelector('.resulto')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn = true

startGame()

let startmove = document.querySelector('.startmove')
let moves = document.querySelectorAll('.move')

startmove.addEventListener('click', startGame)
restartButton.addEventListener('click', startGame)

function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
   })
  winningMessageElement.classList.remove('show')
}


    moves.forEach(move => {
        move.addEventListener('click', moveclick )
    })

function moveclick(params) {
    if(params.innerText==2){
        console.log('h')
    }
}

function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS // circle bo'masa   x bo'ladi 
  cell.classList.add(currentClass)
  console.log(currentClass)
  if (checkWin(currentClass)) {
     checkwinner(currentClass);
  } 
//    if (isDraw()) {
//     checkwinner(true)
//   } 
   else {
    circleTurn = !circleTurn
  }
}

function checkwinner(draw) {
  
  if (draw == "x") {
    draw = x
    x += 1;
    resultx.innerText = `X - ${x}`;
    draw = "x";
  } 
  if(draw == CIRCLE_CLASS){
     draw = o;
     o += 1;
    resulto.innerText = `O - ${o}`;
    draw = "o"
  }
  
  winningMessageElement.classList.add('show')
  console.log(draw)
  endgame(draw)
}

function endgame(draw){
//   console.log(draw)
  if(draw =="x"){
      winningMessageTextElement.innerText = `X - winning`
  }
   if(draw == "o"){ 
      winningMessageTextElement.innerText = `O - winning`
  }
}
endgame();

// function isDraw() {
//   return [...cellElements].every(cell => {
//     return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
//   })
// }


function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}