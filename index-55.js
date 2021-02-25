//
var plan1 = "../arch-55/2gf-a.png"; // path to generate
var plan2 = "../arch-55/3gf-b.png"; // path to load img

function showLoadPlan() {
  document.getElementById('plan').src = plan2;
  setTimeout(showCodePlan, 2000);
}

function showCodePlan() {
  document.getElementById('plan').src = plan1;
  setTimeout(showLoadPlan, 2000);
}

$(document).ready(function(){
  console.log(showLoadPlan());
});

//
var diningbed1 = "../arch-55/renders/12.png"; // path to generate
var diningbed2 = "../arch-55/renders/12a.png"; // path to load img

function showLoadDB() {
  document.getElementById('dining-bed').src = diningbed2;
  setTimeout(showCodeDB, 2000);
}

function showCodeDB() {
  document.getElementById('dining-bed').src = diningbed1;
  setTimeout(showLoadDB, 2000);
}

$(document).ready(function(){
  console.log(showLoadDB());
});

//
var foyer1 = "../arch-55/b2.png"; // path to generate
var foyer2 = "../arch-55/b1.png"; // path to load img

function showLoadFoyer() {
  document.getElementById('foyer').src = foyer2;
  setTimeout(showCodeFoyer, 2000);
}

function showCodeFoyer() {
  document.getElementById('foyer').src = foyer1;
  setTimeout(showLoadFoyer, 2000);
}

$(document).ready(function(){
  console.log(showLoadFoyer());
});

//
var ws1 = "../arch-55/w1.png"; // path to generate
var ws2 = "../arch-55/w2.png"; // path to load img

function showLoadWS() {
  document.getElementById('ws').src = ws2;
  setTimeout(showCodeWS, 2000);
}

function showCodeWS() {
  document.getElementById('ws').src = ws1;
  setTimeout(showLoadWS, 2000);
}

$(document).ready(function(){
  console.log(showLoadWS());
});

//
var wspers1 = "../arch-55/renders/15.png"; // path to generate
var wspers2 = "../arch-55/renders/15a.png"; // path to load img

function showLoadWSpers() {
  document.getElementById('wspers').src = wspers2;
  setTimeout(showCodeWSpers, 2000);
}

function showCodeWSpers() {
  document.getElementById('wspers').src = wspers1;
  setTimeout(showLoadWSpers, 2000);
}

$(document).ready(function(){
  console.log(showLoadWSpers());
});

//
var ldk1 = "../arch-55/renders/23.png"; // path to generate
var ldk2 = "../arch-55/renders/23a.png"; // path to load img
var ldk3 = "../arch-55/renders/23b.png"; // path to load img

function secondLDK() {
  document.getElementById('ldk').src = ldk3;
  setTimeout(thirdLDK, 2000);
}

function thirdLDK() {
  document.getElementById('ldk').src = ldk2;
  setTimeout(firstLDK, 2000);
}

function firstLDK() {
  document.getElementById('ldk').src = ldk1;
  setTimeout(secondLDK, 2000);
}

$(document).ready(function(){
  console.log(secondLDK());
});

//
var ldkdiag1 = "../arch-55/k1.png"; // path to generate
var ldkdiag2 = "../arch-55/k2.png"; // path to load img
var ldkdiag3 = "../arch-55/k3.png"; // path to load img

function secondLDKdiag() {
  document.getElementById('ldkdiag').src = ldkdiag3;
  setTimeout(thirdLDKdiag, 2000);
}

function thirdLDKdiag() {
  document.getElementById('ldkdiag').src = ldkdiag2;
  setTimeout(firstLDKdiag, 2000);
}

function firstLDKdiag() {
  document.getElementById('ldkdiag').src = ldkdiag1;
  setTimeout(secondLDKdiag, 2000);
}

$(document).ready(function(){
  console.log(secondLDKdiag());
});

//
var pf1 = "../arch-55/renders/27.png"; // path to generate
var pf2 = "../arch-55/renders/27a.png"; // path to load img
var pf3 = "../arch-55/renders/27b.png"; // path to load img

function secondPF() {
  document.getElementById('pf').src = pf3;
  setTimeout(thirdPF, 2000);
}

function thirdPF() {
  document.getElementById('pf').src = pf2;
  setTimeout(firstPF, 2000);
}

function firstPF() {
  document.getElementById('pf').src = pf1;
  setTimeout(secondPF, 2000);
}

$(document).ready(function(){
  console.log(secondPF());
});

//
var pfdiag1 = "../arch-55/p1.png"; // path to generate
var pfdiag2 = "../arch-55/p2.png"; // path to load img
var pfdiag3 = "../arch-55/p2.png";

function secondpfdiag() {
  document.getElementById('pfdiag').src = pfdiag3;
  setTimeout(thirdpfdiag, 2000);
}

function thirdpfdiag() {
  document.getElementById('pfdiag').src = pfdiag2;
  setTimeout(firstpfdiag, 2000);
}

function firstpfdiag() {
  document.getElementById('pfdiag').src = pfdiag1;
  setTimeout(secondpfdiag, 2000);
}

$(document).ready(function(){
  console.log(secondpfdiag());
});

//
var balcony1 = "../arch-55/renders/18.png"; // path to generate
var balcony2 = "../arch-55/renders/18a.png"; // path to load img

function secondBalcony() {
  document.getElementById('balcony').src = balcony2;
  setTimeout(firstBalcony, 2000);
}

function firstBalcony() {
  document.getElementById('balcony').src = balcony1;
  setTimeout(secondBalcony, 2000);
}

$(document).ready(function(){
  console.log(secondBalcony());
});
