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
    //console.log(this.childNodes);

    //si verrouillage est true
    if (verouillage) 
    return;

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

        verouillage = true;
        console.log(verouillage);

        console.log(premiereCarte, secondeCarte);

        //on applique la fonction
        correspondance ();
}

function correspondance(){

    //si les deux carte ont le même attribut
    if(premiereCarte.getAttribute('data-attr') === secondeCarte.getAttribute('data-attr')) {

        /*on enlève l'évènement par le click de la fonction retournerCarte pour premierCarte et secondCarte
        (on leur enlève leur valeur)
        (on dit aux cartes de rester retournée)*/
        premiereCarte.removeEventListener('click', retourneCarte);
        secondeCarte.removeEventListener('click', retourneCarte);
        verouillage = false;

    } else {
        //en attendant que le seTimeout s'effectue on ne peut plus cliquer sur d'autres carte
        verouillage = true;
         //on laisse les 2 cartes dévoilées non correspondantes pendant 1500 ms pour les mémoriser
        setTimeout(() => {
            //on enlève la class active pour recacher les cartes 

            premiereCarte.childNodes[1].classList.remove('active');
            secondeCarte.childNodes[1].classList.remove('active');

            verouillage = false;
        }, 1500)
    }
}

//s'applique à chaque actualisation de page
function aleatoire(){
    //pour chaque carte
    cartes.forEach(card => {
        // math.floor retourne entier en dessous d'un chiffre à virgule
        //math.random retourn entre 0 et 1, 1 non inclus
        //ex : 0.6 *12 = 7.2 donc 7
        let randomPos = Math.floor(Math.random() * 12);
        //on passe la valeur de randomPos à card par le style order
        card.style.order = randomPos;
    })
}
aleatoire();




/*Résumé :
Pour caque carte cliquée on applique la fonction carteRetournee :

Cette fonction s'arrête si verrouillage (2 cartes cliquées) est true donc n'ajoute plus
de valeurs à premiereCarte et secondeCarte et le css permettant de retourner la carte
Si verrouillage est false :

Cette fonction ajoute à l'enfant double-carte le css permettant de retourner la carte
1er fois fonction :
On commence carteRetournee à false
Si carteRetournee est false on rajoute à premiereCarte la valeur de celle qu'on a cliqué 
et true à carteRetournee puis la fonction s'arrête
2ème fois fonction :
On commence carteRetournee à true
On rajoute à secondeCarte la valeur de celle qu'on a cliqué et false à carteRetournee
On ajoute true à verrouillage
On applique la fonction correspondance

La fonction correspondance indique que :
si les deux carte ont le même attribut on enlève
l'évènement par le click de la fonction retournerCarte pour premierCarte et secondCarte
(on dit aux cartes de rester retournée)
sinon on laisse les carte*/