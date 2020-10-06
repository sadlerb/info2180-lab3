document.addEventListener('DOMContentLoaded', () => {
    var tiles = document.getElementById("board").children;
    for (let i = 0; i < tiles.length; i++) {
        const element = tiles[i];
        element.classList.add('square');
        
    }
});


