const cartes = document.querySelectorAll('.carte');

let carteRetournee = false;
/*on déclare en undefined*/
let premiereCarte, secondeCarte;
let verouillage = false;

//stockage des 2 cartes retournée

cartes.forEach(carte => {
    carte.addEventListener('click', retourneCarte)
})

function retourneCarte(){

    /*this fait référence à la carte cliquée et childNodes à son enfant*/
    console.log(this.childNodes);

    /*on prend l'élèment 2 de l'enfant (div double face et lui rajouter la classe active) 
    l'élèment 1 et 3 compte comme des <>*/
    this.childNodes[1].classList.toggle('active');

    /*si carteRetournee = false*/
    if(!carteRetournee){

        //on dit carteRetounee est true 
        carteRetournee = true;
        console.log(carteRetournee);
        //on donne à premiereCarte la valeur this (la carte sur laquelle on a cliqué)
        premiereCarte = this;
        /*on arrête la fonction (le but est qu'une fois sur deux quand on appelle la fonction est
        de donner carteRetournee = true */
        return;
    }

    //on dit carteRetounee est false
    carteRetournee = false;
    console.log(carteRetournee);
    //on donne à secondeCarte la valeur this (la carte sur laquelle on a cliqué)
    secondeCarte = this;

    console.log(premiereCarte, secondeCarte);

}