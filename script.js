
/* Генератор случайных призов */

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function randomShuffle(arr) {
    arr.sort(function (a, b) {
        return Math.random() - 0.5
    });

    var obj = {},
        i = 1;
    while (arr[i]) {
        obj[i] = arr[i++]
    };
    return obj;
}

let gifts = ['5 идей оформления цен прайс-листа',
    '5 идей оформления цен прайс-листа',
    'курс по вики-разметке: создаем прайс-лист',
    'пак для дизайнеров',
    'пак для дизайнеров',
    'пак для дизайнеров',
    'к сожалению, удача повернулась к вам спиной',
    'к сожалению, удача повернулась к вам спиной',
    'к сожалению, удача повернулась к вам спиной',
    'psd-пак мини + обложки',
    'psd-пак мини + обложки',
    'psd-пак мини + обложки',
    'psd-пак мини + обложки',
];




let randPrize = getRandomInt(0, gifts.length);
let gift = gifts[randPrize];
let button = document.querySelector('.button');
button.addEventListener('click', () => {
    randomShuffle(gifts);
    localStorage.setItem('giftId', randPrize);
    localStorage.setItem('isActive', true);
    document.querySelector('.prize .title').textContent = 'Ваш приз:';
    document.querySelector('.prize-name').textContent = gift;
    button.setAttribute('disabled', true);
    button.classList.add('button-disabled');
});

if (localStorage.getItem('isActive')) {
    document.querySelector('.prize .title').textContent = 'Ваш приз:';
    getPrizeId = localStorage.getItem('giftId');
    document.querySelector('.prize-name').textContent = gifts[getPrizeId];
    button.setAttribute('disabled', true);
    button.classList.add('button-disabled');
}