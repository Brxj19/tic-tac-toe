let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset');
let newGameButton = document.querySelector('#new-button');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true; //playerX and playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach(
    (box) => {
        box.addEventListener('click', () => {
            console.log("box clicked");
            if(turnO) {
                box.innerText = "O";
                box.classList.add('o-color');
                box.classList.remove('x-color');
                turnO = false;
            } else {
                box.innerText = "X"
                box.classList.add('x-color');
                box.classList.remove('o-color');
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        }
        )
    }
)




const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}


const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove('o-color', 'x-color'); 
    }
}


const resetButtonHandler = () => {
    turnO = true; 
    enableBoxes();
    msgContainer.classList.add('hide');
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations!, Player ${winner} wins!`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}


const checkWinner = () => {
    for(let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if( pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("We have a winner!",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGameButton.addEventListener('click', resetButtonHandler);
resetButton.addEventListener('click', resetButtonHandler);
