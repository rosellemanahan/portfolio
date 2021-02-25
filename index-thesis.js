//
var yellow1 = "../arch-thesis/3.jpg"; // path to generate
var yellow2 = "../arch-thesis/2.jpg"; // path to load img

function secondYellow() {
  document.getElementById('color1').src = yellow2;
  setTimeout(firstYellow, 1500);
}

function firstYellow() {
  document.getElementById('color1').src = yellow1;
  setTimeout(secondYellow, 1500);
}

$(document).ready(function(){
  console.log(secondYellow());
});


//
var green1 = "../arch-thesis/4.jpg"; // path to generate
var green2 = "../arch-thesis/1.jpg"; // path to load img

function secondGreen() {
  document.getElementById('color2').src = green2;
  setTimeout(firstGreen, 1500);
}

function firstGreen() {
  document.getElementById('color2').src = green1;
  setTimeout(secondGreen, 1500);
}

$(document).ready(function(){
  console.log(secondGreen());
});
