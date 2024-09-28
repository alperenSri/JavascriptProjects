const loveMe = document.getElementById('loveMe')
const times = document.getElementById('times')

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0;
            // timesClicked += 1;
            // times.innerText = timesClicked;
            times.innerHTML = ++timesClicked;
        } else {
            clickTime = new Date().getTime();
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX;
    const y = e.clientY;
    const left = e.target.offsetLeft;
    const top = e.target.offsetTop;

    const insideX = x - left;
    const insideY = y - top;

    heart.style.top = insideY + 'px';
    heart.style.left = insideX + 'px';

    loveMe.appendChild(heart)

    setTimeout(() => {
        heart.remove();
    }, 800);

}