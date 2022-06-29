/*let toggle = document.querySelector('.bonjour');
let body = document.querySelector('body');

console.log(toggle);

toggle.addEventListener( 'click', function() {
    body.classList.toggle('open');
    console.log("Coucou");
    console.log(body.classList[0]);

})*/

function addOpenBody() { //Ajoute la class open de body
    document.body.classList.add("open")
}

function addRemoveBody() { //Enleve la class open de body
    document.body.classList.remove("open")
}

const buttonDuBas = document.getElementsByClassName("mesprojets")[0];
buttonDuBas.addEventListener("click", addOpenBody);

const buttonDuHaut = document.getElementsByClassName("cross")[0];
buttonDuHaut.addEventListener("click", addRemoveBody);