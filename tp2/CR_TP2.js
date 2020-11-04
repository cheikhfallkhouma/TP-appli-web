
var str = "Bienvenue "; 
var prenom = document.getElementById("prenom").value; 
var maVar = document.getElementById("resultat"); 

document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#prenom").value;



function myFunction() 
{
var tailleDuNom = document.getElementById("name").value.length; 
var tailleDuprenom = document.getElementById("prenom").value.length; 

if(tailleDuNom <= 4 || tailleDuprenom <=4)

{
    let maVar = document.getElementById("error"); 
    
    document.getElementById("error").style.display = 'block';
    document.getElementById("resultat").style.display = 'none';
}
else{
    let maVar = document.getElementById("resultat"); 
    if(maVar.style.display === "none"){
        maVar.style.display = "block";
   




    }
    
}}