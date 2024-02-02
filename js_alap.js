document.write("Külön fájlból <br>");
let veletlenTomb = new Array();

function feltolt() {
  for (let i = 0; i < 50; i++) {
    var vel = Math.floor(Math.random() * 100 + 1);
    gepTipp[i] = vel;
  }
}

function kiir() {
  let szoveg = "";
  for (let i = 0; i < gepTipp.length; i++) {
    szoveg += gepTipp[i] + ", ";
    if (i % 5 == 4) {
      szoveg += "\n";
    }
  }
  alert(szoveg);
}

function szamol() {
  let osszeg = 0;
  for (let i = 0; i < gepTipp.length; i++) {
    osszeg += gepTipp[i];
  }
  alert("A számok összege: " + osszeg);
}

function parosak() {
  let paros = 0;
  for (let i = 0; i < gepTipp.length; i++) {
    if (gepTipp[i] % 2 == 0) {
      paros++;
    }
  }
  alert("Párosak a száma: " + paros);
}

function egyes() {
  let egyes = false;
  for (let i = 0; i < gepTipp.length; i++) {
    if (gepTipp[i] == 1) {
      egyes = true;
    }
  }
  if (egyes == true) {
    alert("Van a számok közt egyes.");
  } else {
    alert("Nincs egyes a számok közt.");
  }
}

function legnagyobb() {
  let legnagyobbHely = 0;
  for (let i = 1; i < gepTipp.length; i++) {
    if (gepTipp[i] > gepTipp[legnagyobbHely]) {
      legnagyobbHely = i;
    }
  }
  alert("A legnagyobb elem: " + gepTipp[legnagyobbHely]);
}
