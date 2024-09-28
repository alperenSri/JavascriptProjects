const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    const targetCount = parseInt(counter.getAttribute('data-target'));
    let count = 0;
    let increment = targetCount / 200;
    
    const int = setInterval(() => {
        if (count < targetCount) {
            count += increment;
            counter.innerHTML = Math.floor(count);
        }
        else {
            counter.innerHTML = targetCount;
            clearInterval(int);
        }
    }, 10);
})

