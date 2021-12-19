if (!window.x) {
    x = {};
}

/**/

const TEXTARRAY = [''];
const MARKLIST = document.getElementById('mark-list');
const OPENLIST = document.getElementById('mark-wrap');
const LISTHEADER = document.getElementById('list-header');
const MARKNUMS = document.getElementById('num-of-marks');
let numOfMarks = 0;

function makeBold() {
    var selection = window.getSelection().getRangeAt(0);
    var selectedText = selection.extractContents();
    var newNode = document.createElement('mark');
    newNode.appendChild(selectedText);
    selection.insertNode(newNode);
    $('button').fadeOut();
    $('#mark-wrap').fadeIn(500);
    TEXTARRAY.push(newNode.innerHTML);
    MARKLIST.innerHTML = '<ol>' + TEXTARRAY.join('<li>') + '</ol>';
    MARKNUMS.innerHTML = ++numOfMarks;
}

document.getElementById('clickFunc').addEventListener('click', makeBold);

function openMarkList() {
    OPENLIST.classList.toggle('list-clicked');
    MARKLIST.classList.toggle('hidden-list');
}
LISTHEADER.addEventListener('click', openMarkList);

/**/

x.Selector = {};
x.Selector.getSelected = function() {
    var t = '';
    if (window.getSelection) {
        t = window.getSelection();
    } else if (document.getSelection) {
        t = document.getSelection();
    } else if (document.selection) {
        t = document.selection.createRange().text;
    }
    return t;
}

var pageX;
var pageY;

$(document).ready(function() {
    $(document).bind("mouseup", function() {
        var selectedText = x.Selector.getSelected();

        /*  let yy = selectedText.anchorNode.parentElement;
          console.log(typeof yy)*/

        if (selectedText != '') {
            $('button').css({
                'left': pageX + 5,
                'top': pageY - 55
            }).fadeIn(200);
        } else {
            $('button').fadeOut(200);
        }
    });
    $(document).on("mousedown", function(e) {
        pageX = e.pageX;
        pageY = e.pageY;
    });
});