/* 
     Name: Notebook 
     Author: Lestra
     Version: 0.1
*/

let i = 1; //переменная, которая используется для нумерации классов новых заметок (.note1 ... .note2 и т.д).
let r = 1; //тоже самое, но в функции noteRemover(), здесь уже с целью добавления кнопки удаления заметки к только что созданой заметке.

function addNote() { //функция добавления новой заметки
    let newNote = document.getElementById('input-field');
    if (newNote.value.length != 0) { //если поле ввода не пустое
        let newNoteDiv = document.createElement('div'); //создаем новый элемент
        newNoteDiv.setAttribute('class', 'note' + i++); //добавляем ему класс и в его имени +1 каждый раз, чтобы у каждого элемента был уникальный класс(возможно пригодится в будущем).
        newNoteDiv.innerHTML = newNote.value; //наполняем созданный элемент текстом из поля ввода
        document.getElementById('notebook').appendChild(newNoteDiv); //закрепляем элемент внутри блока #notebook
        newNote.value = ''; //очищаем содержимое поля ввода

        noteRemover(); //запуск функции создания кнопки удаления заметки.
    }
}

document.getElementById('add-note').addEventListener('click', addNote);

function noteRemover() { //функция создания кнопки удаления заметки.
    let noteRemover = document.createElement('span'); //создаем кнопку
    noteRemover.setAttribute('class', 'remove'); //добавляем ей класс
    noteRemover.innerHTML = 'x'; //символ кнопки удаления
    document.querySelector('.note' + r++).appendChild(noteRemover); //закрепляем кнопку к только что добавленной заметке
    noteRemover.addEventListener('click', removeNote); //добавляем ей функцию удаления заметки по клику
}

function removeNote() { //функция удаления заметки
    this.parentElement.remove(); //т.к. кнопка удаления добавляется внуть только что созданного элемента новой заметки (<div><span>кнопка</span></div>) то реализация удаления очень простая - удаляется родительский кликнутой кнопке элемент.
}