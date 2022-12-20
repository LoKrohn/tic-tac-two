const cells = document.querySelectorAll(".cell");
let currentClass
let circleTurn
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function checkDraw() {
  let cellArr = [...cells];
  if (cellArr.every((cell) => cell.classList.contains('taken'))) {
    console.log('hello');
  }
}

(function game(){
  cells.forEach(cell => {
    cell.addEventListener('click', placeMark, { once: true})
      })
  function placeMark(e) {
    circleTurn ? currentClass = 'circle' : currentClass = 'x'
    const cell = e.target;
    cell.classList.add(currentClass);
    cell.classList.add('taken');
    circleTurn = !circleTurn;
    checkDraw();
      }
   
    })();

