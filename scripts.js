const temp = document.querySelector('.square');
const square = temp.cloneNode(true);
temp.remove();

const body = document.querySelector('body');
const grid = document.querySelector('.grid');

const row = document.createElement('div');
row.style.display = 'flex';

let start = 0;
while(start < 6){
    let gridSquare = square.cloneNode(false);
    row.appendChild(gridSquare);
    start ++;
}
start = 0;
while(start < 6){
    let gridRow = row.cloneNode(true);
    grid.append(gridRow);
    start ++;
}