//Mobile Slider
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//Select a number of units
const minusQty = document.querySelector('.minusQty');
const number = document.querySelector('.number');
const plusQty = document.querySelector('.plusQty');
let qty = 1;
minusQty.addEventListener('click', () => {
    qty--;
    if (qty === 1) {
        minusQty.disabled = true;
    } else if (qty > 1) {
        minusQty.disabled = false;
        plusQty.disabled = false;
    }
    number.textContent = qty;
});
plusQty.addEventListener('click', () => {
    qty++;
    if (qty === 10) {
        plusQty.disabled = true;
    } else if (qty < 10) {
        plusQty.disabled = false;
        minusQty.disabled = false;
    }
    number.textContent = qty;
});

//Choosing a product model and change the main price
let mainPriceEl = document.querySelector('.mainPrice');
let size = document.querySelectorAll('.size');
const mainPrice = mainPriceEl.textContent;

size.forEach(singleSizeBox => {
    singleSizeBox.addEventListener('click', () => {
        let currentClick = singleSizeBox.id;
        let priceEl = document.querySelector(`.p${currentClick}`);
        mainPriceEl.textContent = priceEl.textContent;
        if (singleSizeBox.classList.contains('active')) {
            mainPriceEl.textContent = mainPrice;
        }

        const active = document.querySelector('.size.active');
        singleSizeBox.classList.toggle('active');
        if (active && active !== singleSizeBox) {
            active.classList.toggle('active');
        }
    })
});

//Additional information tabs and shipments
const aboutTheProd = document.querySelector('.aboutTheProd');
const shippingAndreturn = document.querySelector('.shippingAndreturn');
const aboutTheProdInfo = document.querySelector('.aboutTheProdInfo');
const shippingAndreturnInfo = document.querySelector('.shippingAndreturnInfo');
const line = document.querySelector('.line');
const boldLine = document.querySelector('.boldLine');

aboutTheProd.addEventListener('click', () => {
    aboutTheProdInfo.classList.remove('disable');
    shippingAndreturnInfo.classList.add('disable');
    boldLine.style.right = '10%';
})
shippingAndreturn.addEventListener('click', () => {
    shippingAndreturnInfo.classList.remove('disable');
    aboutTheProdInfo.classList.add('disable');
    boldLine.style.right = '49%';
})

//Favorite Heart
const emptyHeart = document.querySelector('.emptyHeart');
const fullHeart = document.querySelector('.fullHeart')
emptyHeart.addEventListener('click', () => {
    fullHeart.style.visibility = 'visible';
    fullHeart.style.color = '#c92027';
    emptyHeart.style.visibility = 'hidden';
})
fullHeart.addEventListener('click', () => {
    fullHeart.style.visibility = 'hidden';
    emptyHeart.style.visibility = 'visible';
})