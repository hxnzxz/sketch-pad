let square;
const maxSize = 960;
let size = 6;
createSquare();

const body = document.querySelector('body');
const grid = document.querySelector('.grid');
const button = document.getElementById('btn');

const row = document.createElement('div');
row.style.display = 'flex';
populateGrid();

button.addEventListener('click', () => {
    let temp = prompt("Please enter a number for the width/length(max 100) of the grid.", 6);
    if(temp > 100 || temp < 0){
        prompt("Your number is out of bounds");
    }else{
        size = temp;
        createSquare();
        while(grid.firstChild){
            grid.removeChild(grid.firstChild);
        }
        while(row.firstChild){
            row.removeChild(row.firstChild);
        }
        populateGrid();
    }
});

function createSquare(){
    let temp = document.createElement('div');
    temp.style.height = maxSize/size + 'px';
    temp.style.width = maxSize/size + 'px';
    temp.style.border = '2px solid black';
    temp.classList.add('square');
    square = temp;
}

function populateGrid(){
    let start = 0;
    while(start < size){
        let gridSquare = square.cloneNode(false);
        row.appendChild(gridSquare);
        start ++;
    }
    start = 0;
    while(start < size){
        let gridRow = row.cloneNode(true);
        grid.append(gridRow);
        start ++;
    }
    let tiles = document.querySelectorAll('.square');
    tiles.forEach((tile) => {
        tile.addEventListener('mouseover',(e) => {
        let color = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = "#" + color;
        });
        tile.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = '';
        })
    });

}