'use strict'

/* HELLO BUTTON */

let helloButton = document.querySelector('.hello-button');
let closeHelloButton = document.querySelector('.close-hello');
let firstScreen = document.querySelector('.first-screen');
let myContacts = document.querySelector('.my-contacts');

helloButton.addEventListener('click', openContacts);
closeHelloButton.addEventListener('click', closeContacts);

function openContacts() {
	firstScreen.style.display = 'none';
	myContacts.style.display = 'grid';
}

function closeContacts() {
	firstScreen.style.display = 'grid';
	myContacts.style.display = 'none';
}