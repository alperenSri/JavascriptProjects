const progress = document.querySelector('#progress_bar');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const circles = Array.from(document.getElementsByClassName('circle'));

prev.disabled = true;

let currentActive = 1;

next.addEventListener('click',()=>{
    currentActive++;
    
    if(currentActive>circles.length){
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener('click',()=>{
    currentActive--;

    if(currentActive<1){
        currentActive = 1;
    }

    update();
})


function update(){
    circles.forEach((circle,idx) => {
        if(idx < currentActive){
            circle.classList.remove('border-gray-300');
            circle.classList.add('border-blue-500');
        }
        else {
            circle.classList.remove('border-blue-500');
            circle.classList.add('border-gray-300');
        }
    });

    const actives = document.querySelectorAll('.border-blue-500');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
        prev.classList.remove('active:scale-90');
    } else {
        prev.disabled = false;
        prev.classList.add('active:scale-90');
    }

    if (currentActive === circles.length) {
        next.disabled = true;
        next.classList.remove('active:scale-90');
    } else {
        next.disabled = false;
        next.classList.add('active:scale-90');
    }
}
