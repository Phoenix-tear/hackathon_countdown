let previousTimeBetweenDates;
let changingdiv = document.querySelector(".red-text");
let staticdiv = document.querySelector(".white-text");
let container = document.querySelector(".container");
var userInput = window.prompt("Enter a date (Date:Hours:minutes:seconds format):")
const Parse = userInput.split(":");
var userInputParse = "2024-03-" + Parse[0] + "T"+ Parse[1] + ":" + Parse[2] + ":" + Parse[3];
var userInputEvent = window.prompt("Enter the event name:")
setInterval(() => {
    let currentDate = new Date();
    var countToDate = new Date(userInputParse);
    changingdiv.textContent = userInputEvent;
    
    
    const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);

    flipAllCards(timeBetweenDates);

    previousTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);

    flip(document.querySelector("[data-hours-tens]"), Math.floor((hours % 100) / 10));
    flip(document.querySelector("[data-hours-ones]"), hours % 10);
	flip(
        document.querySelector("[data-minutes-tens]"),
        Math.floor(minutes / 10)
    );
    flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
    flip(
        document.querySelector("[data-seconds-tens]"),
        Math.floor(seconds / 10)
    );
    flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
}

function flip(flipCard, newNumber) {
    const startNumber = parseInt(flipCard.querySelector(".top").textContent);

    if (newNumber === startNumber) return;

    const topElement = flipCard.querySelector(".top");
    topElement.textContent = startNumber;
    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    topFlip.textContent = startNumber;

    const bottomElement = flipCard.querySelector(".bottom");
    bottomElement.textContent = startNumber;
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", (e) => {
        topElement.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", (e) => {
        topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", (e) => {
        bottomElement.textContent = newNumber;
        bottomFlip.remove();
    });
    flipCard.append(topFlip, bottomFlip);
}
