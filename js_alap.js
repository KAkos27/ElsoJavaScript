document.write("Külön fájlból <br>");
let veletlenTomb = new Array();

function feltolt() {
  for (let i = 0; i < 50; i++) {
    var vel = Math.floor(Math.random() * 100 + 1);
    veletlenTomb[i] = vel;
  }
}

function kiir() {
  let szoveg = "";
  for (let i = 0; i < veletlenTomb.length; i++) {
    szoveg += veletlenTomb[i] + ", ";
    if (i % 5 == 4) {
      szoveg += "\n";
    }
  }
  alert(szoveg);
}

function szamol() {
  let osszeg = 0;
  for (let i = 0; i < veletlenTomb.length; i++) {
    osszeg += veletlenTomb[i];
  }
  alert("A számok összege: " + osszeg);
}

function parosak() {
  let paros = 0;
  for (let i = 0; i < veletlenTomb.length; i++) {
    if (veletlenTomb[i] % 2 == 0) {
      paros++;
    }
  }
  alert("Párosak a száma: " + paros);
}

function egyes() {
  let egyes = false;
  for (let i = 0; i < veletlenTomb.length; i++) {
    if (veletlenTomb[i] == 1) {
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
  for (let i = 1; i < veletlenTomb.length; i++) {
    if (veletlenTomb[i] > veletlenTomb[legnagyobbHely]) {
      legnagyobbHely = i;
    }
  }
  alert("A legnagyobb elem: " + veletlenTomb[legnagyobbHely]);
}
