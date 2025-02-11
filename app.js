const contenu =document.getElementById('contenu')

// bouton.addEventListener("click",togglecontenu);
const mainBtn = document.getElementById("main-btn")
// ajouter evenement 
mainBtn.addEventListener("click",function(){
    if (contenu.style.display === "none"){
        contenu.style.display="block"
    }
    else {contenu.style.display="none"}
})