//
var laundry1 = "../arch-163/laundry.png"; // path to generate
var laundry2 = "../arch-163/laundry2.png"; // path to load img

function secondLaundry() {
  document.getElementById('laundry').src = laundry2;
  setTimeout(firstLaundry, 1500);
}

function firstLaundry() {
  document.getElementById('laundry').src = laundry1;
  setTimeout(secondLaundry, 1500);
}

$(document).ready(function(){
  console.log(secondLaundry());
});


//
var moduleplan1 = "../arch-163/plan3.jpg"; // path to generate
var moduleplan2 = "../arch-163/plan2.jpg"; // path to load img
var moduleplan3 = "../arch-163/plan1.jpg";

function secondmoduleplan() {
  document.getElementById('moduleplan').src = moduleplan3;
  setTimeout(thirdmoduleplan, 1500);
}

function thirdmoduleplan() {
  document.getElementById('moduleplan').src = moduleplan2;
  setTimeout(firstmoduleplan, 1500);
}

function firstmoduleplan() {
  document.getElementById('moduleplan').src = moduleplan1;
  setTimeout(secondmoduleplan, 1500);
}

$(document).ready(function() {
  console.log(secondmoduleplan());
});
