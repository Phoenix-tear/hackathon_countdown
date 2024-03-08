let previousTimeBetweenDates;
let changingdiv = document.querySelector(".red-text");
let staticdiv = document.querySelector(".white-text");
let container = document.querySelector(".container");
let events = ["Inaugration Ceremony", "Hackathon Begins", "Lunch Break", "Mentor Review 1", "Dinner break", "Mentor Review 2","Mentor Review 3","Shortlisting of teams", "Final Presentation","Result Announcement","Closing Ceremony"]
setInterval(() => {
    let currentDate = new Date();
    if (currentDate < new Date("2024-03-11T10:00:00")) {
        var countToDate = new Date("2024-03-11T10:00:00");
        changingdiv.textContent = events[0];
    }
    else if(currentDate > new Date("2024-03-11T10:00:00") && (currentDate < new Date("2024-03-11T11:30:00"))) {
        var countToDate = new Date("2024-03-11T11:30:00");
        changingdiv.textContent = events[1]
    }
    else if(currentDate > new Date("2024-03-11T11:30:00") && (currentDate < new Date("2024-03-11T14:00:00"))) {
        var countToDate = new Date("2024-03-11T14:00:00");
        changingdiv.textContent = events[2]
    }
    else if(currentDate > new Date("2024-03-11T14:00:00") && (currentDate < new Date("2024-03-11T17:00:00"))) {
        var countToDate = new Date("2024-03-11T17:00:00");
        changingdiv.textContent = events[3]
    }
    else if(currentDate > new Date("2024-03-11T17:00:00") && (currentDate < new Date("2024-03-11T20:00:00"))) {
        var countToDate = new Date("2024-03-11T20:00:00");
        changingdiv.textContent = events[4]
    }
    else if(currentDate > new Date("2024-03-11T20:00:00") && (currentDate < new Date("2024-03-12T00:00:00"))) {
        var countToDate = new Date("2024-03-12T00:00:00");
        changingdiv.textContent = events[5]
    }
    else if(currentDate > new Date("2024-03-12T00:00:00") && (currentDate < new Date("2024-03-12T09:00:00"))) {
        var countToDate = new Date("2024-03-12T09:00:00");
        changingdiv.textContent = events[6]
    }
    else if(currentDate > new Date("2024-03-12T09:00:00") && (currentDate < new Date("2024-03-12T11:00:00"))) {
        var countToDate = new Date("2024-03-12T11:00:00");
        changingdiv.textContent = events[7]
    }
    else if(currentDate > new Date("2024-03-12T11:00:00") && (currentDate < new Date("2024-03-12T13:00:00"))) {
        var countToDate = new Date("2024-03-12T13:00:00");
        changingdiv.textContent = events[8]
    }
    else if(currentDate > new Date("2024-03-12T13:00:00") && (currentDate < new Date("2024-03-12T15:30:00"))) {
        var countToDate = new Date("2024-03-12T15:30:00");
        changingdiv.textContent = events[9]
    }
    else if(currentDate > new Date("2024-03-12T15:30:00") && (currentDate < new Date("2024-03-12T16:00:00"))) {
        var countToDate = new Date("2024-03-12T16:00:00");
        changingdiv.textContent = events[10]
    }
    else{
        staticdiv.textContent = "THANKS FOR";
        changingdiv.textContent = "PARTICIPATING IN HACKNOVA !!!";
        container.style = "display:none";
    }
    
        const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);

    flipAllCards(timeBetweenDates);

    previousTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);

    flip(document.querySelector("[data-hours-hundreds]"), Math.floor(hours / 100));
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
