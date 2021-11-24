const gift = document.getElementById('gift');
const giftTop = document.querySelector('.gift__top');
const giftTitle = document.querySelector('.gift__title');

const music = document.getElementById('music');

gift.addEventListener('click',() => {
    giftTop.style.animationName = 'openGift';
    gift.style.zIndex = '0';
    Hide(giftTitle);
    card.classList.add('show__card');
    
    setTimeout(() => {
        gift.classList.add('hide__display');
        giftTitle.classList.add('hide__display');
        document.querySelector('.star__bg').classList.add('hide__display');

        document.body.classList.add('gift__opened');
        card.classList.add('opened');

        music.play();
    }, 2000);
})

const card = document.getElementById('card');
const cover = document.querySelector('.card__cover');
const back = document.querySelector('.card__back');

card.addEventListener('click', () => {
    card.classList.toggle('turn');
    Hide(cover);
    
    setTimeout(() => {
        cover.classList.toggle('hide__display');
    }, 500);
    
    Hide(back);
})

function Hide(element) {
    element.classList.toggle('hide');
}

const date = new Date();
const msg = document.querySelector('.msg');

if (date.getDate() >= 25 && date.getDate() <= 30) {
    msg.textContent = 'Te agradezco por ser mi amiga y no alejarte a pesar de ciertos problemas, sinceramente haz mejorado mi año ;). Por ello te hago este pequeño regalo y aunque no sea gran cosa espero te haya gustado; ya dejando lo cursi, disfruta tu día especial y pasala bien.'
}