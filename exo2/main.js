// Déclaration des variables
const essaie = document.querySelector(".span1");
const message = document.querySelector(".span2");
const input = document.querySelector("#input");
const btn = document.querySelector("button");

let nbrEssaie = 10;
let nbrGenerer = Math.floor(Math.random() * (100 - 10) + 10);
// alert(nbrGenerer);

essaie.innerText = nbrEssaie;

btn.addEventListener("click", (e) => {
    e.preventDefault();

    nbrEssaie--;
    if (nbrEssaie <= 0) {
        btn.setAttribute("disabled", "disabled");
        btn.style.background = "#d9dde1";
        btn.style.color = "black";
        btn.style.border = "1px solid black"
        message.innerText = "Désolé ! Tu as perdu";
    } else {
        let nbr = parseInt(input.value);

        if (nbrGenerer === nbr) {
            message.innerText = "Bravo ! Vous avez gagné avec un nombre d'essaie : " + (10 - nbrEssaie);
            btn.setAttribute("disabled", "disabled");
            btn.style.background = "#d9dde1";
            btn.style.color = "black";
            btn.style.border = "1px solid black"
        } else if (nbrGenerer < nbr) {
            message.innerText = "Non, le nombre est plus petit"
        } else if (nbrGenerer > nbr) {
            message.innerText = "Non, le nombre est plus grand"
        } else {
            message.innerText = "Veuillez saisir un nombre";
            nbrEssaie++;
        }
    }
    essaie.innerHTML = nbrEssaie;
})