// $(window).on('beforeunload', function() {
//     $(window).scrollTop(0);
// });

$(".intro-image").hover(function() {
  $(".intro-image").animate({
    opacity: 0.5
  });
  $(".intro-image").attr("src", "images/sablay.jpg");
}, function() {
  // $(".intro-image").animate({opacity:0.75});
  $(".intro-image").attr("src", "images/sablay-bw.jpg");
});

$(".strategy").hover(function() {
  $(".strategy").attr("src", "../arch-32/icons1.jpg");
}, function() {
  // $(".intro-image").animate({opacity:0.75});
  $(".strategy").attr("src", "../arch-32/icons.jpg");
});

$(".considerations").hover(function() {
  $(".considerations").attr("src", "../arch-55/considerations1.jpg");
}, function() {
  // $(".intro-image").animate({opacity:0.75});
  $(".considerations").attr("src", "../arch-55/considerations.jpg");
});





// $(".four").click(function(e) {
//     e.preventDefault();
//     var aid = $(this).attr("href");
//     $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
// });
//
// $(".two").click(function(e) {
//     e.preventDefault();
//     var aid = $(this).attr("href");
//     $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
// });
//
// $(".one").click(function(e) {
//     e.preventDefault();
//     var aid = $(this).attr("href");
//     $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
// });

$(".project-1").hover(function() {
  $(".project-1").animate({
    opacity: 0.75
  });

}, function() {
  $(".project-1").animate({
    opacity: 1
  });
});

$(".project-2").hover(function() {
  $(".project-2").animate({
    opacity: 0.75
  });

}, function() {
  $(".project-2").animate({
    opacity: 1
  });
});

$(".project-3").hover(function() {
  $(".project-3").animate({
    opacity: 0.75
  });

}, function() {
  $(".project-3").animate({
    opacity: 1
  });
});

$(".project-4").hover(function() {
  $(".project-4").animate({
    opacity: 0.75
  });

}, function() {
  $(".project-4").animate({
    opacity: 1
  });
});




// FOR GRADIENT TEXT
// VARIABLES
const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

const gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';

// HELPER FUNCTIONS

// 1. Get random number in range. Used to get random index from array.
const randNumInRange = max => Math.floor(Math.random() * (max - 1));

// 2. Merge two separate array values at the same index to
// be the same value in new array.
const mergeArrays = (arrOne, arrTwo) => arrOne
  .map((item, i) => `${item} ${arrTwo[i]}`)
  .join(', ');

// 3. Curried function to add a background to array of elms
const addBackground = (elms) => (color) => {
  elms.forEach(el => {
    el.style.backgroundImage = color;
  });
}
// 4. Function to get data from API
const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}

// 5. Partial Application of addBackground to always apply
// background to the magicalUnderlines constant
const addBackgroundToUnderlines = addBackground(magicalUnderlines);

// GRADIENT FUNCTIONS

// 1. Build CSS formatted linear-gradient from API data
const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

// 2. Get single gradient from data pulled in array and
// apply single gradient to a callback function
const applyGradient = async (url, callback) => {
  const data = await getData(url);
  const gradient = buildGradient(data[randNumInRange(data.length)]);
  callback(gradient);
}

// RESULT
applyGradient(gradientAPI, addBackgroundToUnderlines);


// FOR ANIMATED WHEN SLIDED
(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

$(window).scroll(function(event) {

  $(".module").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});

var win = $(window);
var allMods = $(".module");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});
