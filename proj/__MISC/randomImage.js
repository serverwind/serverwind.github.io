//Допустим есть блок .test-promo-block-img, предназначенный для вывода background-image.
//Скрипт выводит рандомную картинку из Array для этого блока.

function random_image()
{
let imageArray = ['https://sea-man.org/icons/tanker.jpg', 'https://www.joc.com/sites/default/files/field_feature_image/Container%20ship%20sailing%20with%20sun%20in%20background.jpg'];

let chosenImage = imageArray[Math.floor(Math.random()*imageArray.length)];

let imageBlock = document.querySelector('.test-promo-block-img');

imageBlock.style.backgroundImage = 'url(' + chosenImage; + ')';

}
random_image()
