
$(document).ready(function() {
    $("#datepicker-wdt").datepicker({
  
     
    });
  });
  
  function validation() {
    console.log("validation ok");
    $("#myModal").modal("show");
  
    var error = "";
    var nom = $("#nom").val();
    var prenom = $("#prenom").val();
    var datedenaissance = $("#datepicker-wdt").val();
    var adresse = $("#adresse").val();
    var mail = $("#mail").val();
  
    if (nom.length < 5) {
      error += "nom, ";
    }
    if (prenom.length < 5) {
      error += "prenom, ";
    }
    if (datedenaissance.length < 5) {
      error += "datedenaissance, ";
    }
    if (adresse.length < 5) {
      error += "adresse, ";    
    }
    if (mail.length < 5) {
      error += "mail, ";
    }

   // $("#error").css("border-color", "#FF0000");
   
    if (error == "") {
      $(".modal-title").text("Bienvenue " + prenom);
      $(".modal-body").html(
        "vous êtes nés le " +
          datedenaissance +   " et vous habitez à: " +  '<img src="https://maps.googleapis.com/maps/api/staticmap?markers=' +
          adresse +
          '&zoom=14&size=150x150&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"> </img> </br>' +
          adresse
      );
    } else {
      $(".modal-title").text("Message Modal");
      $(".modal-body").html(id="Les champs " + error + " ne peuvent pas  être vides", );
    }
  
    $("#myModal").modal("show");
  }
  


