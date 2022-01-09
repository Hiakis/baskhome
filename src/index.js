var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-64px";
  }
  prevScrollpos = currentScrollPos;
}

window.onscroll = function()
{
  let scrollHeight, totalHeight;
  scrollHeight = document.body.scrollHeight;
  totalHeight = window.scrollY + window.innerHeight;
  const wishAnimation = document.querySelector('.wish__animation')
  if(totalHeight >= scrollHeight)
  {
    wishAnimation.classList.add('wish__animation_show')
  }
}

$(function(){
  $("#phone").mask("+7(999)999-99-99");
});


// Init ScrollMagic
var ctrl = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

// Create scene
$(".scene").each(function() {

  var name = $(this).attr('id');

  new ScrollMagic.Scene({
    triggerElement: this
  })
    .setPin(this)
    .addIndicators()
    .loglevel(3)
    .addTo(ctrl);

});

// Get window height
var wh = window.innerHeight;

new ScrollMagic.Scene({
  offset: wh*3
})
  .setClassToggle("section#four", "is-active")
  .addTo(ctrl);




$('.trash__button-minus').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('.trash__quantity').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 1;
  }

  $input.val(value);

});

$('.trash__button-plus').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('.trash__quantity').find('input');
  var value = parseInt($input.val());

  if (value < 9) {
    value = value + 1;
  } else {
    value = 9;
  }

  $input.val(value);
});

function hover(element) {
  element.setAttribute('src', 'images/trash_header-bisque.svg');
}

function unhover(element) {
  element.setAttribute('src', 'images/trash_header-white.svg');
}


function changeImage(url) {
  document.getElementById("choiceImage").style.backgroundImage = url;
}

document.getElementById("1-st").onclick = function() { changeImage('url("images/catalog/Coffee.jpg")'); }
document.getElementById("2-nd").onclick = function() { changeImage('url("images/catalog/ColdGrey.jpg")'); }
document.getElementById("3-rd").onclick = function() { changeImage('url("images/catalog/Coral.jpg")'); }
document.getElementById("4-th").onclick = function() { changeImage('url("images/catalog/Graphite.jpg")'); }
document.getElementById("5-th").onclick = function() { changeImage('url("images/catalog/OLIVE.jpg")'); }






