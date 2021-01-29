let cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["&#9830", "&#9829", "&#9824", "&#9827"];
let Randomcartas = Math.floor(Math.random() * 13);
let Randomsuits = Math.floor(Math.random() * 4);

window.onload = function () {

    let simbolo = suits[Randomsuits];
    let simbolo1 = cartas[Randomcartas];

    document.getElementById("suits").innerHTML = simbolo;
    document.getElementById("simbolo").innerHTML = simbolo1;
    document.getElementById("suits1").innerHTML = simbolo;

    if (simbolo === "&#9830" || simbolo === "&#9829") {
        document.getElementById("suits").classList.add("redSuit");
        document.getElementById("suits1").classList.add("redSuit");
    } else if (simbolo === "&#9827" || simbolo === "&#9824") {
        document.getElementById("suits").classList.remove("redSuit");
        document.getElementById("suits1").classList.remove("redSuit");
        console.log(simbolo + " " + simbolo1);
    }
}