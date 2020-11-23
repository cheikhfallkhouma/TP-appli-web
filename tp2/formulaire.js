function validation(){
  var nom= document.getElementById("nom").value;
   document.getElementById("error").innerHTML="";

  for (let item of document.querySelectorAll('.formAW')){
    if (item.value.length === 0) {
      document.getElementById("error").innerHTML = "la saisie des champs est obligatoire" ;
    }

    if(item.value.length <5 ){
      //  recuperation de label
      // ajout du message d'erreur 
      document.getElementById("error").innerHTML +=
      "Minimun 5 caractere à"+" "+document.querySelector("label[for="+item.id+"]").textContent+"<br/>";
    document.getElementById("error").classList.add("display");
    document.getElementById("resultat").classList.remove("display") ;
  }

  }

  if(document.getElementById("error").innerHTML == ""){
    document.getElementById("resultat").innerHTML = 'Bienvenue'+" "+document.querySelector("#prenom").value;
    document.getElementById("error").classList.remove("display")
  document.getElementById("resultat").classList.add("display")
  }

}
