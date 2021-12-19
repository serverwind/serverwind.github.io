function myClock() {
	let curDate = new Date(); 
	let curDay = curDate.getDate();
	let curMonth = curDate.getMonth() +1; //because it starts counting from 0
	let weekday = new Array(7);
	weekday[0] = 'Sunday';
	weekday[1] = 'Monday';
	weekday[2] = 'Tuesday';
	weekday[3] = 'Wednessday';
	weekday[4] = 'Thursday';
	weekday[5] = 'Friday';
	weekday[6] = 'Saturday';
	let today = weekday[curDate.getDay()];
	let hour = curDate.getHours();
	let min = curDate.getMinutes();
	let sec = curDate.getSeconds();
	let countMin = 59 - min;
	let countSec = 59 - sec;
	min = checkTime(min);
	sec = checkTime(sec);
	document.getElementById('today').innerHTML = today + ', ' + curDay + '.' + curMonth;
	document.getElementById('time').innerHTML =  + hour + ":" + min + ":" + sec;
	if (hour == 8) {
		document.getElementById('suggest').innerHTML = "Good Morning!";
	} else if (hour == 12) {
		document.getElementById('suggest').innerHTML = "Bon Appetit!";
	} else if (hour == 16) {
		document.getElementById('suggest').innerHTML = "Just 1 hour!";
		document.getElementById('countdown').innerHTML = countMin + ':' + countSec;
	} else if (hour == 16 && min == 55) {
		document.getElementById('suggest').innerHTML = "Job done!";
	} else {
		document.getElementById('suggest').innerHTML = "Work Harder!";
	} 
	setTimeout(myClock, 100);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}
myClock();
