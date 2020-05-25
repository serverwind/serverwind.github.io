function calcAmount(){
	let amount = document.getElementById('amount').value;
  amount = Number(amount); //перевод строки в число для вычислений
	let max = amount + 3;
  let four = amount + 1;
 // средний уровень = заявленному количеству
	let two = amount - 3;
  let one = amount - 5;
  
  if (amount <= 0) {
  document.querySelector('#message').innerHTML = 'Количество не может быть меньше или равно нулю. Вы себя недооцениваете;)'
  }
  else {
  document.querySelector('#message').innerHTML = 'Совет: Дышите правильно!'
  document.getElementById('max').innerHTML = max;
  document.getElementById('four').innerHTML = four;
	document.getElementById('middle').innerHTML = amount;
  if (two <= 0) {
  	document.getElementById('two').innerHTML = amount;
  } 
  else {
  document.getElementById('two').innerHTML = two;
  }
  if (one <= 0) {
  document.getElementById('min').innerHTML = '1';
  }
  else {
  	document.getElementById('min').innerHTML = one;
  }
}}
