const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const showSize = document.getElementById('size')
const chooseColor = document.getElementById('color')
const clearBtn = document.getElementById('clear')
const ctx = canvas.getContext('2d')


let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;
let x2;
let y2;


canvas.addEventListener('mouseout', (e) => {
    isPressed = false; 
})

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY; 

    drawCircle(x,y)
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined; 
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        x2 = e.offsetX;
        y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})


function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size/2, 0, Math.PI * 2); 
    ctx.fillStyle = color;
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke()
}

function updateSizeOnScreen() {
    showSize.innerText = size;
}

increaseBtn.addEventListener('click', () => {
    
    if(size === 1){
        size = 0;
    }

    size += 5;

    if(size > 50) {
        size = 50;
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5;

    if(size < 5) {
        size = 1;
    }

    updateSizeOnScreen()
})

chooseColor.addEventListener('change', (e) => {
    color = e.target.value;
})

clearBtn.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

