let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContaner = document.querySelector(".msg-contaner");
let msgDraw = document.querySelector(".Draw");
let msg =document.querySelector("#msg")
let turn0 = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
 
const resetGame = ()=>{
    turn0 =true;
    enableBoxes();
    msgContaner.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
   
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWiner();
  });
});
// const checkWiner = () => {
//   for (pattern of winPatterns) {
//     let pos1Val = boxes[pattern[0]].innerText;
//     let pos2Val = boxes[pattern[1]].innerText;
//     let pos3Val = boxes[pattern[2]].innerText;
//     if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//       if (pos1Val === pos2Val && pos2Val === pos3Val) {
//         showWinner( pos1Val);
    
//       }
//       else if ( 
//         (pos1Val === "X" || pos1Val === "O") &&
//         (pos2Val === "X" || pos2Val === "O") &&
//         (pos3Val === "X" || pos3Val === "O")
//       ) {
//         noWinner("Draw");
//       }
//     }
//   }
// };

const checkWiner = () => {
  let winnerFound = false;

  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        winnerFound = true;
        showWinner(pos1Val);
        return;
      }
    }
  }

  // Check draw
  let allFilled = true;

  for (let box of boxes) {
    if (box.innerText === "") {
      allFilled = false;
      break;
    }
  }

  if (allFilled && !winnerFound) {
    noWinner();
  }
};

const enableBoxes =()=>{
    for(let box of boxes){
         box.disabled = false;
        box.innerText="";
    }
}
const disableBoxes =()=>{
    for(let box of boxes)
         box.disabled = true;
    
}
const showWinner = (winner) =>{
  msg.innerText=`congratulation , Winner is ${winner}`
 msgContaner.classList.remove("hide");
disableBoxes();
};

// const noWinner = (Draw) =>{
//  msg.innerText=`Game Draw , No Winner${Draw}`
//   msgContaner.classList.remove("hide");
// disableBoxes();
// };
const noWinner = () =>{
  msg.innerText = "Game Draw! No Winner";
  msgContaner.classList.remove("hide");
  disableBoxes();
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);