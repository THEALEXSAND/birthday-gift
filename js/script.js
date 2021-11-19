const card = document.getElementById('card');
const cover = document.querySelector('.card__cover');
const back = document.querySelector('.card__back');

card.addEventListener('click', () => {
    card.classList.toggle('turn');
    Hide(cover);
    
    setTimeout(() => {
        card.style.boxShadow = '-5px 5px 2px hsl(322, 100%, 40%)'
        cover.classList.toggle('hide__display');
    }, 500);
    
    Hide(back);
})

function Hide(element) {
    element.classList.toggle('hide');
}

const date = new Date();
const msg = document.querySelector('.msg');

if (date.getDate() == 25) {
    msg.textContent = 'Te agradezco por ser mi amiga y no haberte alejado a pesar de ciertos problemas. Por ello te hago este pequeño regalo y aunque no sea gran cosa espero te haya gustado; ya dejando lo cursi, disfruta tu día especial y pasala bien.'
}