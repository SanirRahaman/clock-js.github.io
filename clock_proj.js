// by using two different methods to get time

let a;
let date;
let time;
let day;
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString();
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  smalltime = a.getHours() + ":" + a.getMinutes();
  day = days[a.getDay()];
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = day + "  " + date;
}, 1000);



const updateTime = () => {
  let c = new Date();
  los.innerHTML = c
    .toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
    .split(", ")[1];
  ny.innerHTML = c
    .toLocaleString("en-US", {
      timeZone: "America/New_York",
    })
    .split(", ")[1];
  kolkata.innerHTML = c
    .toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    })
    .split(", ")[1];
  tokyo.innerHTML = c
    .toLocaleString("en-US", {
      timeZone: "Asia/Tokyo",
    })
    .split(", ")[1];
  dubai.innerHTML = c
    .toLocaleString("en-US", {
      timeZone: "Asia/Dubai",
    })
    .split(", ")[1];
  paris.innerHTML = c
    .toLocaleString("en-US", {
      timeZone: "Asia/Jakarta",
    })
    .split(", ")[1];
};
setInterval(updateTime, 1000);
