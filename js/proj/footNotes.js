var i=1,allLinks=document.querySelectorAll(".tooltip-link");function addLinkId(e){e.classList.add("tp"+i),i++}allLinks.forEach(addLinkId);var idNum=1,increment=document.querySelectorAll(".increment");function addTooltipId(e){e.setAttribute("id",+idNum),idNum++}increment.forEach(addTooltipId);var firstSupNum=1,firstNum=document.querySelectorAll(".tooltip-link > sup");function addFirstNum(e){e.innerHTML="["+firstSupNum+"]",firstSupNum++}firstNum.forEach(addFirstNum);var secondSupNum=1,secondNum=document.querySelectorAll(".increment > b");function addSecondNum(e){e.innerHTML=secondSupNum,secondSupNum++}secondNum.forEach(addSecondNum);var noteNum=1,urlNum=document.querySelectorAll(".increment a");function addUrlNum(e){e.href="#note"+noteNum,noteNum++}urlNum.forEach(addUrlNum);var tp1=document.querySelector(".tp1");if(null===tp1);else{function tp1Func(){document.getElementById("1").classList.remove("tooltip-hide")}tp1.onclick=tp1Func}var tp2=document.querySelector(".tp2");if(null===tp2);else{function tp2Func(){document.getElementById("2").classList.remove("tooltip-hide")}tp2.onclick=tp2Func}var tp3=document.querySelector(".tp3");if(null===tp3);else{function tp3Func(){document.getElementById("3").classList.remove("tooltip-hide")}tp3.onclick=tp3Func}var tp4=document.querySelector(".tp4");if(null===tp4);else{function tp4Func(){document.getElementById("4").classList.remove("tooltip-hide")}tp4.onclick=tp4Func}var tp5=document.querySelector(".tp5");if(null===tp5);else{function tp5Func(){document.getElementById("5").classList.remove("tooltip-hide")}tp5.onclick=tp5Func}var tp6=document.querySelector(".tp6");if(null===tp6);else{function tp6Func(){document.getElementById("6").classList.remove("tooltip-hide")}tp6.onclick=tp5Func}var tp7=document.querySelector(".tp7");if(null===tp7);else{function tp7Func(){document.getElementById("7").classList.remove("tooltip-hide")}tp7.onclick=tp7Func}var tp8=document.querySelector(".tp8");if(null===tp8);else{function tp8Func(){document.getElementById("8").classList.remove("tooltip-hide")}tp8.onclick=tp8Func}var tp9=document.querySelector(".tp9");if(null===tp9);else{function tp9Func(){document.getElementById("9").classList.remove("tooltip-hide")}tp9.onclick=tp9Func}var tp10=document.querySelector(".tp10");if(null===tp10);else{function tp10Func(){document.getElementById("10").classList.remove("tooltip-hide")}tp10.onclick=tp10Func}var closeTooltip=document.querySelectorAll(".closeTooltip");function hideTooltip(){document.querySelectorAll(".increment").forEach(function(e){e.classList.add("tooltip-hide")})}closeTooltip.forEach(function(e){e.onclick=hideTooltip});var tooltipLink=document.querySelectorAll(".increment > a");tooltipLink.forEach(function(e){e.onclick=linkOpenSpoiler});var spoilerArrow=document.getElementById("spoiler-arrow"),spoiler=document.getElementById("spoiler");function linkOpenSpoiler(e){var t=document.querySelectorAll(".increment");spoiler.classList.remove("spoilerHidden"),spoilerArrow.classList.contains("fa-caret-down")&&spoilerArrow.classList.toggle("fa-caret-up"),t.forEach(function(e){e.classList.add("tooltip-hide")})}var spoilerName=document.querySelector(".spoiler-name");function toggleSpoiler(){spoiler.classList.toggle("spoilerHidden"),spoilerArrow.classList.toggle("fa-caret-up")}spoilerName.onclick=toggleSpoiler,null!==document.getElementById("1")&&spoilerName.classList.add("spoilerShow"),document.getElementById("note1").innerHTML=document.getElementById("1").innerHTML,document.getElementById("note2").innerHTML=document.getElementById("2").innerHTML,document.getElementById("note3").innerHTML=document.getElementById("3").innerHTML,document.getElementById("note4").innerHTML=document.getElementById("4").innerHTML,document.getElementById("note5").innerHTML=document.getElementById("5").innerHTML,document.getElementById("note6").innerHTML=document.getElementById("6").innerHTML,document.getElementById("note7").innerHTML=document.getElementById("7").innerHTML,document.getElementById("note8").innerHTML=document.getElementById("8").innerHTML,document.getElementById("note9").innerHTML=document.getElementById("9").innerHTML,document.getElementById("note10").innerHTML=document.getElementById("10").innerHTML;