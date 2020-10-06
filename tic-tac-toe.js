var turn = [];
document.addEventListener('DOMContentLoaded', () => {
    var tiles = document.getElementById("board").children;
    for (let i = 0; i < tiles.length; i++) {
        const element = tiles[i];
        element.classList.add('square');
        element.addEventListener("click", function() {
            fillSquare(element);
        });
        element.addEventListener("mouseover", function(){
            mouseOver(element);
        });
        element.addEventListener("mouseout", function(){
            mouseOut(element);
        });
        
    }
});


function fillSquare(element) {
    if (turn.length == 0 || turn[turn.length-1] == "O"){
        element.className += " X";
        element.innerHTML = "X";
        turnKeeper("X")
    }else{
        console.log(turn[length-1])
        element.className += " O";
        element.innerHTML = "O";
        turnKeeper("O");
    }
    
       
}

function mouseOver(element){
    element.classList.add('hover');
}

function mouseOut(element){
    element.classList.remove('hover');  
}


function turnKeeper(player){
    turn.push(player);
}







