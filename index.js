let boxes = document.querySelectorAll('.box')
let turnO = true
let msg = document.querySelector('.massage')
let reset = document.querySelector('.reset')
let winner = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
boxes.forEach((box) => {
    box.addEventListener('click',function(){
        if(turnO)
        {
            box.innerText = 'O' 
            box.style.color = 'red' ; 
            turnO = false
            box.disabled = true;
            checkWinner()
        }else{
            box.innerText = 'X'
            box.style.color = 'black' ; 
            turnO = true
            box.disabled = true;
            checkWinner()
        }
    })
});
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
    clear_all()
};
function checkWinner(){
        let hasWin = false;
        for (let pattern of winner) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if (pos1Val !== "" && pos2Val!=="" && pos3Val!=="" && 
                pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                hasWin = true;
                return;
            }
        }

        if (!hasWin) {
            const allBoxes = [...boxes].every((box) => box.innerText !== "");
            if (allBoxes) {
                msg.innerText = 'Match Drawn';
            }
        }
    };
    reset.addEventListener('click' , function(){
        turnO = true
        enableBoxes()
    msg.innerText = " ";
    })