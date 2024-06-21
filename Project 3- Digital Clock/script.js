let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let secs = document.getElementById("secs")

setInterval(()=>{
    let currenttime = new Date();
    hrs.innerHTML = (currenttime.getHours()<10?"0":"") + currenttime.getHours();
    min.innerHTML = (currenttime.getMinutes()<10?"0":"") + currenttime.getMinutes();
    secs.innerHTML = (currenttime.getSeconds()<10?"0":"") + currenttime.getSeconds();
}, 1000)
// In JavaScript, the Date object can be used in two ways:
// Without the new keyword: Date() returns the current date and time as a string.
// With the new keyword: new Date() creates a new Date object representing the current date and time, which provides methods to get individual components like hours, minutes, and seconds.
