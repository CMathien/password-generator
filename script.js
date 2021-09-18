//Définition des caractères possibles

var chars = "";
const chars1 = "abcdefghijkmnopqrstuvwxyz";
const chars2 = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
const chars3 = "0123456789";
const chars4 = "/¨°+^èç[-{(#é~!?&µ*§$£%ù_à@.,<>¤:;";

function addLowercase() {
  if (document.getElementById("minuscules").checked === true) {
    chars = chars + chars1;
  }
}

function addUppercase() {
  if (document.getElementById("majuscules").checked === true) {
    chars = chars + chars2;
  }
}

function addNumbers() {
  if (document.getElementById("chiffres").checked === true) {
    chars = chars + chars3;
  }
}

function addSpecial() {
  if (document.getElementById("caracteres_speciaux").checked === true) {
    chars = chars + chars4;
  }
}

//Réinitialisation du formulaire

function reset() {
  document.getElementById("minuscules").checked = false;
  document.getElementById("majuscules").checked = false;
  document.getElementById("chiffres").checked = false;
  document.getElementById("caracteres_speciaux").checked = false;
  chars = "";
  document.getElementById("longueur").value = "";
}

//Réinitialisation du formulaire avec effacement du mot de passe affiché

function totalReset() {
  reset();
  var element = document.getElementById("motdepasse");
  element.innerHTML = "";
}

//Vérification du formulaire

var keywordLength = Math.floor(document.getElementById("longueur").value);

function formVerification() {
  addLowercase();
  addUppercase();
  addNumbers();
  addSpecial();

  if (chars == "") {
    reset();
    alert("Veuillez cocher au moins une case.");
    return false;
  } else {
      return true;
    }
}

//Génération du mot de passe

function generate() {
  if (formVerification() == true) {
    var keyword = "";
    var keywordLength = Math.floor(document.getElementById("longueur").value);

    if ((keywordLength == "") || (keywordLength < 1) || (keywordLength > 50)) {
      reset();
      alert(" Veuillez saisir un nombre entier compris entre 1 et 50.");
      
    } else {

    for (var i = 0; i < keywordLength; i++) {
      keyword =
        keyword + chars.charAt(Math.floor(Math.random() * chars.length));
    }

    if (keyword != "") {
      var element = document.getElementById("motdepasse");
      element.innerHTML = keyword;
      reset();
      return false;
    } else {
      reset();
    }
    }
  }
}
