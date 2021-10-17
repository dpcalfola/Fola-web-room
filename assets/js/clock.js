const clock = document.querySelector("#clock");
const clockGreeting = document.getElementById("clock_greeting");
const monthString = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dayString = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getClock() {
  const dateAll = new Date();
  const year = String(dateAll.getFullYear());
  const day = dayString[dateAll.getDay()];
  const date = String(dateAll.getDate());
  const month = monthString[dateAll.getMonth()];
  const hours = String(dateAll.getHours()).padStart(2, "0");
  const minutes = String(dateAll.getMinutes()).padStart(2, "0");
  const seconds = String(dateAll.getSeconds()).padStart(2, "0");
  clock.innerText = ` ${day}, ${month} ${date} ${year}, time ${hours}:${minutes}:${seconds}`;

  if (hours >= 2 && hours < 5) {
    clockGreeting.innerText = `Go to bed Fola !!`;
  } else if (hours >= 5 && hours < 12) {
    clockGreeting.innerText = `Good morning Fola !!`;
  } else if (hours >= 12 && hours < 18) {
    clockGreeting.innerText = `Good afternoon Fola !!`;
  } else if (hours >= 16 && hours < 22) {
    clockGreeting.innerText = `Good evening Fola !!`;
  } else {
    clockGreeting.innerText = `Good night Fola !!`;
  }
}

getClock();
setInterval(getClock, 1000);

// console.log("Month length " + monthString.length);
// console.log("Day length " + dayString.length);

console.log(clockGreeting);
