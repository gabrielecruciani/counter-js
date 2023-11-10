//Dichiarazione della variabile globale
var number;

function getCounterElement() {
    if (!number) {
        number = document.createElement('div');
        number.className = 'number';
        number.id = 'value';
        number.textContent = '0';
    }
    return number;
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


// Creazione degli elementi
var container = document.getElementById('container');

var h1 = document.createElement('h1');
h1.textContent = "THE COUNTER THAT HASN'T PURPOSE";

var h2 = document.createElement('h2');
h2.textContent = "(IT'S COOL, TRY IT)";

var counterContainer = document.createElement('div');
counterContainer.className = 'counter-container';

var counter = document.createElement('div');
counter.className = 'counter';

var number = getCounterElement();
number.className = 'number';
number.id = 'value';
number.textContent = '0';

var incrementBtn = document.createElement('button');
incrementBtn.id = 'incrementBtn';
incrementBtn.textContent = '+';

var decrementBtn = document.createElement('button');
decrementBtn.id = 'decrementBtn';
decrementBtn.textContent = '-';


// Aggiunta degli elementi al DOM
counter.appendChild(number);
counter.appendChild(incrementBtn);
counter.appendChild(decrementBtn);

counterContainer.appendChild(counter);

container.appendChild(h1);
container.appendChild(h2);
container.appendChild(counterContainer);


// Aggiunta degli eventi
incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);

incrementBtn.addEventListener("mousedown", function() {
    intervalId = setInterval(incrementCounter, 150);
});

incrementBtn.addEventListener("mouseup", function() {
    clearInterval(intervalId);
});

decrementBtn.addEventListener("mousedown", function() {
    intervalId = setInterval(decrementCounter, 150);
});

decrementBtn.addEventListener("mouseup", function() {
    clearInterval(intervalId);
});