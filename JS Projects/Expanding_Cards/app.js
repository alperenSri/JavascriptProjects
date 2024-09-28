
const cards = document.querySelectorAll('.cards');

cards.forEach((card)=>{
    card.addEventListener('click' , ()=>{

        if(card.classList.contains('flex-[4]')){
            card.classList.remove('flex-[4]');
        }
        else{
            cards.forEach(c => c.classList.remove('flex-[4]'));
            card.classList.add('flex-[4]');
        }
    });
});

