var contactanos = new SmoothScroll('a[href*="#Contactanos"]');
var documentacion = new SmoothScroll('a[href*="#Documentacion"]');
var preguntas = new SmoothScroll('a[href*="#Preguntas"]');
var sobreNosotros = new SmoothScroll('a[href*="#Sobre_Nosotros"]');
var inicio = new SmoothScroll('a[href*="#"]');
var descargar = new SmoothScroll('a[href*="#Descargar"]');
(function($) {
  $(document).ready(function() {
    // Pause hero carousel
    $(".hero-carousel").carousel("pause");
  });
})(jQuery);

$(document).ready(function() {
  var $navbar = $("#mNavbar");

  AdjustHeader(); // Incase the user loads the page from halfway down (or something);
  $(window).scroll(function() {
    AdjustHeader();
  });

  function AdjustHeader() {
    if ($(window).scrollTop() > 60) {
      if (!$navbar.hasClass("navbar-fixed-top")) {
        $navbar.addClass("navbar-fixed-top");
      }
    } else {
      $navbar.removeClass("navbar-fixed-top");
    }
  }
});

/* detectar zona horaria*/1
window.onload = function() {

}
/* fin - detectar zona horaria*/

$('#collapse1').on('show.bs.collapse', function () {
  var element = document.getElementById("arrow1");
  element.classList.add("up");
  element.classList.remove("down");
})

$('#collapse1').on('hide.bs.collapse', function () {
  var element = document.getElementById("arrow1");
  element.classList.add("down");
  element.classList.remove("up");
  
})

$('#collapse2').on('show.bs.collapse', function () {
  var element = document.getElementById("arrow2");
  element.classList.add("up");
  element.classList.remove("down");
})

$('#collapse2').on('hide.bs.collapse', function () {
  var element = document.getElementById("arrow2");
  element.classList.add("down");
  element.classList.remove("up");
  
})

$('#collapse3').on('show.bs.collapse', function () {
  var element = document.getElementById("arrow3");
  element.classList.add("up");
  element.classList.remove("down");
})

$('#collapse3').on('hide.bs.collapse', function () {
  var element = document.getElementById("arrow3");
  element.classList.add("down");
  element.classList.remove("up");
  
})


// Footer y go-top-button

function sweetalertclick() {}

const nombreForm = document.getElementById("nombreForm");
const apellidoForm = document.getElementById("apellidoForm");
const emailForm = document.getElementById("emailForm");
const telefonoForm = document.getElementById("telefonoForm");
const mensajeForm = document.getElementById("mensajeForm");
const btnForm = document.getElementById("btnForm");

window.onscroll = function(){
  if(document.documentElement.scrollTop > 1900){
    document.querySelector('.go-top-container').classList.add('show');
  }
  else{
    document.querySelector('.go-top-container').classList.remove('show');
  }
}

document.querySelector('.go-top-container')
.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})