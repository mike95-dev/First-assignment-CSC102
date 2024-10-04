let interval;
let image = document.getElementById("moveableMEME");

function startMoving(direction){
    stopMoving();
interval = setInterval(() => {
let left = image.offsetLeft; 
let top = image.offsetTop;

if(direction === 'right') left += 5;
if(direction === 'left') left -= 5;
if(direction === 'up') top -= 5;
if(direction === 'down') top += 5;

image.style.left = `${left}px`;
image.style.top = `${top}px`;

}, 50);
    
}
function stopMoving(){
clearInterval(interval);
}