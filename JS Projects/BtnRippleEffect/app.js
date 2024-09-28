const buttons = document.querySelectorAll('.ripple-btn')

buttons.forEach(button => {
    button.addEventListener('click' , function(e) {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const insideY = y - buttonTop;
        const insideX = x - buttonLeft;

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = insideY + 'px';
        circle.style.left = insideX + 'px';

        this.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 500);
    })
})