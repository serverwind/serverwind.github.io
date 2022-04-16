var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var color1_block = document.getElementById('color1');
var color2_block = document.getElementById('color2');
var color3_block = document.getElementById('color3');
var color4_block = document.getElementById('color4');
var color5_block = document.getElementById('color5');
var color1_name = document.getElementById('color1-hex');
var color2_name = document.getElementById('color2-hex');
var color3_name = document.getElementById('color3-hex');
var color4_name = document.getElementById('color4-hex');
var color5_name = document.getElementById('color5-hex');
var rollButton = document.getElementById('roll');
var lockButton = document.querySelectorAll('.lock-color');

/*Каждый символ из HEX (напр. #ffeeff) генерируется рандомно в array*/
var color1_hex = [];
var color2_hex = [];
var color3_hex = [];
var color4_hex = [];
var color5_hex = [];

lockButton[0].addEventListener('click', lockColor);
lockButton[1].addEventListener('click', lockColor);
lockButton[2].addEventListener('click', lockColor);
lockButton[3].addEventListener('click', lockColor);
lockButton[4].addEventListener('click', lockColor);

rollButton.addEventListener('click', roll);

function roll() {

    var chosen1 = color1_block.classList.contains('chosen'); // проверяем если блок с цветом имеет класс chosen, то есть если пользователь по нему кликнул
    var chosen2 = color2_block.classList.contains('chosen');
    var chosen3 = color3_block.classList.contains('chosen');
    var chosen4 = color4_block.classList.contains('chosen');
    var chosen5 = color5_block.classList.contains('chosen');

    if (chosen1 == false) {
        if (color1_hex.length > 1) color1_hex = []; //запрещаем array расти больше 6 элементов. тк HEX состоит из 6 элементов, #123456.
        for (i = 0; i < 6; i++) { //генерация 6 рандомных символов для HEX.
            var color1 = hex[Math.floor(Math.random() * hex.length)];
            color1_hex.push(color1); //заливаем сгенерированные символы HEX в объявленный выше array.
        }
        var color1_combined = '#' + color1_hex[0] + color1_hex[1] + color1_hex[2] + color1_hex[3] + color1_hex[4] + color1_hex[5]; //объединяем каждый символ в HEX
        color1_block.style.background = color1_combined // и оформляем блок.
        color1_name.innerHTML = color1_combined; //выводим текстом HEX на странице внутри блока
    }

    if (chosen2 == false) {
        if (color2_hex.length > 1) color2_hex = [];
        for (i = 0; i < 6; i++) {
            var color2 = hex[Math.floor(Math.random() * hex.length)];
            color2_hex.push(color2);
        }
        var color2_combined = '#' + color2_hex[0] + color2_hex[1] + color2_hex[2] + color2_hex[3] + color2_hex[4] + color2_hex[5];
        color2_block.style.background = color2_combined;
        color2_name.innerHTML = color2_combined;
    }

    if (chosen3 == false) {
        if (color3_hex.length > 1) color3_hex = [];
        for (i = 0; i < 6; i++) {
            var color3 = hex[Math.floor(Math.random() * hex.length)];
            color3_hex.push(color3);
        }
        var color3_combined = '#' + color3_hex[0] + color3_hex[1] + color3_hex[2] + color3_hex[3] + color3_hex[4] + color3_hex[5];
        color3_block.style.background = color3_combined;
        color3_name.innerHTML = color3_combined;
    }

    if (chosen4 == false) {
        if (color4_hex.length > 1) color4_hex = [];
        for (i = 0; i < 6; i++) {
            var color4 = hex[Math.floor(Math.random() * hex.length)];
            color4_hex.push(color4);
        }
        var color4_combined = '#' + color4_hex[0] + color4_hex[1] + color4_hex[2] + color4_hex[3] + color4_hex[4] + color4_hex[5];
        color4_block.style.background = color4_combined;
        color4_name.innerHTML = color4_combined;
    }

    if (chosen5 == false) {
        if (color5_hex.length > 1) color5_hex = [];
        for (i = 0; i < 6; i++) {
            var color5 = hex[Math.floor(Math.random() * hex.length)];
            color5_hex.push(color5);
        }
        var color5_combined = '#' + color5_hex[0] + color5_hex[1] + color5_hex[2] + color5_hex[3] + color5_hex[4] + color5_hex[5];
        color5_block.style.background = color5_combined;
        color5_name.innerHTML = color5_combined;
    }
}

roll(); //запускаем функцию сразу, чтобы когда пользователь зашел на страницу первоначальные цвета сразу рандомно сгенерировались . необязательно.

function lockColor() {
    this.parentElement.classList.toggle('chosen');
    if (this.parentElement.classList == 'chosen') {
        this.title = 'Unlock color';
    } else {
        this.title = 'Lock color';
    }
}
