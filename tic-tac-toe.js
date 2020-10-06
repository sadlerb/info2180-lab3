var score = [];
document.addEventListener('DOMContentLoaded', () => {
    var tiles = document.getElementById("board").children;
    for (let i = 0; i < tiles.length; i++) {
        const element = tiles[i];
        element.classList.add('square');
        element.addEventListener("click", function() {
            fillSquare(element);
        });
        
    }
});


function fillSquare(element) {
    element.className += " X";
    element.innerHTML = "X"
    scoreKeeper();
       
}


function scoreKeeper(){
    
}







