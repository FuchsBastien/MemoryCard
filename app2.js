const cartes = document.querySelectorAll('.carte');

let carteRetournee = false;
let verrouillage = false;
let premiereCarte, secondeCarte;

cartes.forEach(carte => {
    carte.addEventListener('click', retournerCarte)
})

function retournerCarte(){
   
    this.childNodes[1].classList.toggle('active');

    if (!carteRetournee) {
    premiereCarte = this;
    carteRetournee = true;
    return;
    }

    secondeCarte = this;

    console.log(premiereCarte, secondeCarte);

}

