let turn = 1;
let position = ["0","1","2","3","4","5","6","7","8"];
let winner = false;
document.addEventListener('DOMContentLoaded', () => {
    var tiles = document.getElementById("board").children;
    let status = document.getElementById("status");
    for (let i = 0; i < tiles.length; i++) {
        const element = tiles[i];
        element.classList.add('square');
       
        element.addEventListener('mouseover', function mOver() {
            mouseOver(element);
        });
        element.addEventListener('mouseout', function mOut() {
            mouseOut(element);
        });
        element.addEventListener('click', function fill() {
            if(element.innerHTML == "" && winner == false){
                if (turn % 2 == 1){
                element.className += " X";
                element.textContent = "X";
                
            }else{
                element.className += " O";
                element.textContent = "O";

            }
            turn++;
            winner = checkWin(i, turn% 2 ==1 ? "O" : "X" ,status);
        }
       
        


    });

    const button = document.querySelector('.btn');
    button.addEventListener('click',function() {
    element.textContent = "" ;
    element.className = "square";
    turn = 1;
    status.textContent = "Move your mouse over a square and click to play an X or an O.";
    status.classList.remove("you-won");
    position = ["0","1","2","3","4","5","6","7","8"];
    winner = false;
        
    });
}
    
        

});



function mouseOver(element){
    element.classList.add('hover');
}

function mouseOut(element){
    element.classList.remove('hover');  
}




function checkWin(insert,play,status) {
    position.splice(insert,1,play);

    endGamePos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(var i = 0; i < endGamePos.length; i++){
        pos1 = endGamePos[i][0];
        pos2 = endGamePos[i][1];
        pos3 = endGamePos[i][2];
        if(position[pos1] == play && position[pos2] == play && position[pos3] == play){
            status.textContent = "Congratulations! " + play + " is the Winner!";
            status.classList.add("you-won");
            return true;
           
        }
    }

    return false;
}
