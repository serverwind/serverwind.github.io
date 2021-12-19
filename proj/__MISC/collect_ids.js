//Скажем, на странице есть много div с одним классом .questions но с разными id. 
//Если возникла необходимость получить названия всех этих id можно использовать этот скрипт.

let x = document.querySelectorAll('.questions');

for (i = 0; i < x.length; i++) {
	document.write(x[i].id + '<br>');
}
