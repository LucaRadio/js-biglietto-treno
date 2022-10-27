const kmPrice = 0.21

let kmQuest = prompt("Inserisci il numero di km da percorrere durante il tuo viaggio.");
kmQuest = parseInt(kmQuest);


if (isNaN(kmQuest)) {
    alert("Il numero che hai inserito non è valido !");
}

let priceTicket = (kmPrice * kmQuest).toFixed(2);

console.log(priceTicket);

let ageQuest = prompt("Quanti anni hai ?");

ageQuest = parseInt(ageQuest)

if (isNaN(ageQuest)) {
    alert("Il numero che hai inserito non è valido !");
}

let priceMinor = (priceTicket * 0.8).toFixed(2);

let priceOver = (priceTicket * 0.6).toFixed(2);

const kmTrack = document.getElementById("km-track");

kmTrack.innerHTML = kmQuest;

const ageText = document.getElementById("age");

ageText.innerHTML = ageQuest;

if (ageQuest < 18) {
    priceTicket = priceMinor;
    const discountMinor = document.getElementById("discount");
    discountMinor.innerHTML = "- 20%";
    const Minor = document.getElementById("finalPrice");
    Minor.innerHTML = `${priceMinor} €`
}
else if (ageQuest > 65) {
    priceTicket = priceOver;
    const discountOver = document.getElementById("discount");
    discountOver.innerHTML = "- 40%";
    const Over = document.getElementById("finalPrice");
    Over.innerHTML = `${priceOver} €`;
}

else {
    const discount = document.getElementById("discount");
    discount.innerHTML = "Niente sconto per te";
    const natural = document.getElementById("finalPrice");
    natural.innerHTML = `${priceTicket} €`;
}






