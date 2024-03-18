let titleProject = prompt ('Название проекта?');
console.log('Название проекта – ', titleProject);
let screensValue = prompt ('Какие типы экранов? Шаблонные, с уникальным дизайном, с анимациями');
console.log('Нужно – ', screensValue);
let responsive = prompt ('нужен ли респонсивный сайт?');
console.log('Нужен респонс сайт? ', responsive);
let service1 = prompt ('Какой сервис нужен?');
console.log('Какой сервис нужен? ', service1);

let servicePrice1 = prompt ('Сколько это будет стоить?');
console.log('Этот сервис 1 будет стоить ', servicePrice1);

let service2 = prompt ('Какой еще сервис тебе нужен?');
console.log('Еще нужен сервис – ', service2);

let screenPrice = 20000;//задаем фикс цену на типы экранов
let partnersPercent = 15;//задаем фикс процент партнеру

let servicePrice2 = prompt ('Сколько будет стоить этот второй сервис?');
console.log('2 сервис будет стоить – ', servicePrice2);

let fullPrice = (screenPrice + +servicePrice1 + +servicePrice2);
let servicePercentPrice = fullPrice - (fullPrice*partnersPercent/100);
servicePercentPrice = Math.round(servicePercentPrice);
console.log('Цена с партнерским процентом', servicePercentPrice);
if (fullPrice > 50000) { 
console.log ('Вам положена скидка 10%');

} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log ('Вам положена скидка 5%');
}
else if (fullPrice > 0 && fullPrice < 20000) {
    console.log ('Скидка не предусмотрена');
}
else if (fullPrice === 0) {
    console.log("Просто текст");
}
else if (fullPrice === 20000) {
    console.log("Просто текст");
}
else if (fullPrice === 50000) {
    console.log("Просто текст");
}
else {
    console.log("Что-то пошло не так");
}

const getAllServicePrices = function() {
    let allServicePrices = +servicePrice1+ +servicePrice2;
    console.log ('Результат функции – стоимость всех доп услуг –', allServicePrices)
    return allServicePrices
}

const allServicePrices = getAllServicePrices();

function getFullPrice () {
    let fullPrice = + allServicePrices + +screenPrice;
    console.log ('Результат 2й функции - Стоимость услуг + верстки –', fullPrice)
    return fullPrice;
}
const FullPrice = getFullPrice();

const getTitle = function (titleProject) {
    titleProject = titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
    return titleProject;
}
titleProject = getTitle(titleProject);
console.log('Результат 3й функции - название проекта', titleProject);

const getServicePercentPrices = function () {
    let servicePercentPrice = fullPrice - (fullPrice*partnersPercent/100);
    return servicePercentPrice
}
servicePercentPrice = getServicePercentPrices();
console.log('Результат функции 4 стоимость - проц партнеру', servicePercentPrice);

const getRollbackMessage = function () {
    servicePercentPrice = Math.round(servicePercentPrice);
    console.log('Цена с партнерским процентом', servicePercentPrice);
    if (fullPrice > 50000) { 
        console.log ('Вам положена скидка 10%');
    } else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log ('Вам положена скидка 5%');
}
else if (fullPrice > 0 && fullPrice < 20000) {
    console.log ('Скидка не предусмотрена');
}
else if (fullPrice === 0) {
    console.log("Просто текст");
}
else if (fullPrice === 20000) {
    console.log("Просто текст");
}
else if (fullPrice === 50000) {
    console.log("Просто текст");
}
else {
    console.log("Что-то пошло не так");
}

}
getRollbackMessage ()