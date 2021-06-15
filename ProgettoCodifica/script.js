function inizializza() {
    try{
      for (t in titoli) {
          var nodo = document.getElementById(titoli[t]);
          nodo.style.display = "none";
      }
    }catch{
      ("inizzializza "+ e);
    }
}

function gestoreMostraDiv() {
    try {
        inizializza();
        var nodo1 = document.getElementById(titoli[this.id]);
        nodo1.style.display = "block";
    } catch (e) {
        alert("gestoreMostraDiv" + e);
    }
}

//globali
var nodoCartolina14;
var nodoCartolina23;
var nodoCartolina82;

var nodoDesc14;
var nodoDesc23;
var nodoDesc82;

var titoli = {
    "c14": "contenitore14",
    "c23": "contenitore23",
    "c82": "contenitore82"
}
function gestoreLoad() {
    try {
        nodoCartolina14 = document.getElementById('c14');
        nodoCartolina23 = document.getElementById('c23');
        nodoCartolina82 = document.getElementById('c82');
        
        nodoDesc14 = document.getElementById('contenitore14');
        nodoDesc23 = document.getElementById('contenitore23');
        nodoDesc82 = document.getElementById('contenitore82');
        
        nodoCartolina14.onclick = gestoreMostraDiv;
        nodoCartolina23.onclick = gestoreMostraDiv;
        nodoCartolina82.onclick = gestoreMostraDiv;

        inizializza();

    } catch (e) {
        alert("gestoreLoad " + e);
    }
}
window.onload = gestoreLoad;
