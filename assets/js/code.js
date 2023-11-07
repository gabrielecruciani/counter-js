function getCounterElement() {
    return document.getElementById("value");
}

function getCurrentCount() {
    return parseInt(getCounterElement().innerText);
}

var intervalId;

function incrementCounter() {
    getCounterElement().innerText = getCurrentCount() + 1;
}

function decrementCounter() {
    getCounterElement().innerText = getCurrentCount() - 1;
}

document.getElementById("incrementBtn").addEventListener("click", incrementCounter);

document.getElementById("decrementBtn").addEventListener("click", decrementCounter);

document.getElementById("incrementBtn").addEventListener("mousedown", function() {
    intervalId = setInterval(incrementCounter, 150);
});

document.getElementById("incrementBtn").addEventListener("mouseup", function() {
    clearInterval(intervalId);
});

document.getElementById("decrementBtn").addEventListener("mousedown", function() {
    intervalId = setInterval(decrementCounter, 150);
});

document.getElementById("decrementBtn").addEventListener("mouseup", function() {
    clearInterval(intervalId);
});