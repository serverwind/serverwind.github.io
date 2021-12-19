/*****************

name: navColorChange 1.0
author: Lestra
email: lestrangeqq@gmail.com
description: По клику на элемент (id) заданый в переменных, скрипт добавляет к ней css класс. исключено дублирование эфектов, когда будут активны 2 класса.

*****************/

//загоняем кнопки навигации в переменные 
var nav_home = document.getElementById('home');
var nav_arsenal = document.getElementById('arsenal');
var nav_chelsea = document.getElementById('chelsea');
var nav_newcastle = document.getElementById('newcastle');

//функционал клика - по клику на кнопку навигации ей добавляется css class, а с остальных он снимается.
nav_home.addEventListener('click', function() {
  nav_home.classList.add('home-active');
  nav_arsenal.classList.remove('arsenal-active');
  nav_chelsea.classList.remove('chelsea-active');
  nav_newcastle.classList.remove('newcastle-active');
});

nav_arsenal.addEventListener('click', function() {
  nav_home.classList.remove('home-active');
  nav_arsenal.classList.add('arsenal-active');
  nav_chelsea.classList.remove('chelsea-active');
  nav_newcastle.classList.remove('newcastle-active');
});

nav_chelsea.addEventListener('click', function() {
  nav_home.classList.remove('home-active');
  nav_arsenal.classList.remove('arsenal-active');
  nav_chelsea.classList.add('chelsea-active');
  nav_newcastle.classList.remove('newcastle-active');
});

nav_newcastle.addEventListener('click', function() {
  nav_home.classList.remove('home-active');
  nav_arsenal.classList.remove('arsenal-active');
  nav_chelsea.classList.remove('chelsea-active');
  nav_newcastle.classList.add('newcastle-active');
});
