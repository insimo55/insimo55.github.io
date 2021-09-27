"use strict";
const daysElem = document.getElementById("days"),
      hoursElem = document.getElementById("hours"),
      minsElem = document.getElementById("mins"),
      secondsElem = document.getElementById("seconds");

const birthday = '7 Aug 2022';


function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const totalseconds = (birthdayDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysElem.innerHTML = formatTime(days);
    hoursElem.innerHTML = formatTime(hours);
    minsElem.innerHTML = formatTime(minutes);
    secondsElem.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);