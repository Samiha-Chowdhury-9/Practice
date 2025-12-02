const clock = document.getElementById("clock");

function showClock(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}

setInterval(showClock, 1000);
showClock();