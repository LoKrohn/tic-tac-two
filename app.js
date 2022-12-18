const cells = document.querySelectorAll(".cell");
let currentClass
let circleTurn


(function xGo(){
    cells.forEach(cell => {
    cell.addEventListener('click', placeMark, { once: true})
  })
  function placeMark(e) {
    circleTurn ? currentClass = 'circle' : currentClass = 'x'
    const cell = e.target;
    cell.classList.add(currentClass);
    circleTurn = !circleTurn;
    console.log(circleTurn);
    console.log(currentClass);
      }
    })();

// function circleGo(){
//   cells.forEach(cell => {
//   cell.addEventListener('click', placeCircle, { once: true})
//     })
//   function placeCircle(e) {
//     const cell = e.target;
//     cell.classList.add("circle");
//     circleTurn = false;
//         }
//     } 
