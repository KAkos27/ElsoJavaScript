document.write("Külön fájlból <br>");
var veletlenTomb = new Array();

function feltolt() {
  for (var i = 0; i < 50; i++) {
    var vel = Math.floor(Math.random() * 100 + 1);
    veletlenTomb[i] = vel;
  }
}
function kiir() {
  var szoveg = "";
  for (var i = 0; i < 50; i++) {
    szoveg += veletlenTomb[i] + ", ";
    if (i % 5 == 4) {
      szoveg += "\n";
    }
  }
  alert(szoveg);
}
