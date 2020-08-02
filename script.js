var urlString;
var frame = document.getElementById("frame");
var time;
var hour;

let futureDate = new Date("Jan 1, 2021, 00:00:00").getTime();

let end = "Happy New Year!";

const queryString = window.location.search;
if (queryString == "") {
  // do nothing
} else {
  const urlParams = new URLSearchParams(queryString);
  time = urlParams.get("time");
  hour = urlParams.get("hour");
  end = urlParams.get("end");
  var urlname = urlParams.get("name");
  document.getElementById("countdownTitle").innerHTML = urlname;
  futureDate = new Date(time + ", " + hour).getTime();
  var textarea = document.getElementById("textarea");
  urlString =
    "https://countdown.gq?name=" +
    name +
    "&end=" +
    end +
    "&time=" +
    time +
    "&hour=" +
    hour;
  textarea.innerHTML =
    "I just made a Timer with Countdown.GQ! Check out what I made at: " +
    urlString;
}

let tick = setInterval(countdown, 1000);

function goFunc() {
  let name = document.getElementById("1one").value;
  end = document.getElementById("2two").value;
  if (
    document.getElementById("3three").value === "" ||
    document.getElementById("4four").value === ""
  ) {
    alert("You have to put in a time, silly!");
  } else {
    time = document.getElementById("3three").value;
    hour = document.getElementById("4four").value;
    futureDate = new Date(time + ", " + hour).getTime();
  }

  document.getElementById("countdownTitle").innerHTML = name;
  var textarea = document.getElementById("textarea");
  urlString =
    "https://countdown.gq?name=" +
    name +
    "&end=" +
    end +
    "&time=" +
    time +
    "&hour=" +
    hour;
  textarea.innerHTML =
    "I just made a Timer with Countdown.GQ! Check out what I made at: " +
    urlString;
}

function countdown() {
  let now = new Date().getTime();
  let timeleft = futureDate - now;
  console.log(timeleft);
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  console.log(days, hours, minutes, seconds);

  if (days == 1) {
    document.getElementById("days").innerHTML = days + " day, ";
  } else {
    document.getElementById("days").innerHTML = days + " days, ";
  }
  if (hours == 1) {
    document.getElementById("hours").innerHTML = hours + " hour, ";
  } else {
    document.getElementById("hours").innerHTML = hours + " hours, ";
  }
  if (minutes == 1) {
    document.getElementById("minutes").innerHTML = minutes + " minute, ";
  } else {
    document.getElementById("minutes").innerHTML = minutes + " minutes, ";
  }
  if (seconds == 1) {
    document.getElementById("seconds").innerHTML = seconds + " second ";
  } else {
    document.getElementById("seconds").innerHTML = seconds + " seconds ";
  }

  if (timeleft <= 0) {
    clearInterval(tick);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
    document.getElementById("countdownTitle").innerHTML = end;
    document.getElementById("extra").innerHTML = "Done!";
    var audio = new Audio("https://www.fesliyanstudios.com/play-mp3/581");
    audio.play();
  }
}

function colorswap1() {
  if (document.getElementById("days").style.color == "white") {
    document.getElementById("days").style.color = "black";
  } else {
    document.getElementById("days").style.color = "white";
  }
}
function colorswap2() {
  if (document.getElementById("hours").style.color == "white") {
    document.getElementById("hours").style.color = "black";
  } else {
    document.getElementById("hours").style.color = "white";
  }
}
function colorswap3() {
  if (document.getElementById("minutes").style.color == "white") {
    document.getElementById("minutes").style.color = "black";
  } else {
    document.getElementById("minutes").style.color = "white";
  }
}
function colorswap4() {
  if (document.getElementById("seconds").style.color == "white") {
    document.getElementById("seconds").style.color = "black";
  } else {
    document.getElementById("seconds").style.color = "white";
  }
}

function Share() {
  document.getElementById("frame").style.display = "block";
}

function change() {
  if (document.getElementById("edit1234").style.display == "block") {
    document.getElementById("edit1234").style.display = "none";
    document.getElementById("buttonAnimations1").innerHTML = "Edit Timer";
  } else {
    document.getElementById("edit1234").style.display = "block";
    document.getElementById("buttonAnimations1").innerHTML = "Hide";
  }
}
function copy() {
  var copyText = document.getElementById("textarea");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand("copy");
  alert("Copied To Clipboard!");
}

function fullscreen() {
  document.documentElement.requestFullscreen();
}

//==================================================|
// DRAG-ABLE CODE BY W3schools, however it is edited by the site owners.           |
//==================================================|

//Make the DIV element draggable:
dragElement(document.getElementById("frame"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// end
