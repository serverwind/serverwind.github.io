window.x || (x = {});
var TEXTARRAY = [""],
    MARKLIST = document.getElementById("mark-list"),
    OPENLIST = document.getElementById("mark-wrap"),
    LISTHEADER = document.getElementById("list-header"),
    MARKNUMS = document.getElementById("num-of-marks");
let numOfMarks = 0;

function makeBold() { var e = window.getSelection().getRangeAt(0),
        t = e.extractContents(),
        n = document.createElement("mark");
    n.appendChild(t), e.insertNode(n), $("#clickFunc").fadeOut(), $("#mark-wrap").fadeIn(500), TEXTARRAY.push(n.innerHTML), MARKLIST.innerHTML = "<ol>" + TEXTARRAY.join("<li>") + "</ol>", MARKNUMS.innerHTML = ++numOfMarks }

function openMarkList() { OPENLIST.classList.toggle("list-clicked"), MARKLIST.classList.toggle("hidden-list") }
var pageX, pageY;
document.getElementById("clickFunc").addEventListener("click", makeBold), LISTHEADER.addEventListener("click", openMarkList), x.Selector = {}, x.Selector.getSelected = function() { var e = ""; return window.getSelection ? e = window.getSelection() : document.getSelection ? e = document.getSelection() : document.selection && (e = document.selection.createRange().text), e }, $(document).ready(function() { $(document).bind("mouseup", function() { "" != x.Selector.getSelected() ? $("#clickFunc").css({ left: pageX + 5, top: pageY - 55 }).fadeIn(200) : $("#clickFunc").fadeOut(200) }), $(document).on("mousedown", function(e) { pageX = e.pageX, pageY = e.pageY }) });