
const sections = document.querySelectorAll('.sec');

sections.forEach((sec) => {
    sec.addEventListener('mouseover', function() {    
        sections.forEach(s => s.classList.remove('active'));
        sec.classList.add('active');
    });
});

sections.forEach((sec) => {
    sec.addEventListener('mouseleave', function() {
        sec.classList.remove('active');
    });
});