var div0 = document.getElementById('ask__0');
div0.addEventListener('click', faq0);

var div1 = document.getElementById('ask__1');
div1.addEventListener('click', faq1);

var div2 = document.getElementById('ask__2');
div2.addEventListener('click', faq2);

var div3 = document.getElementById('ask__3');
div3.addEventListener('click', faq3);

var div4 = document.getElementById('ask__4');
div4.addEventListener('click', faq4);

function faq0() {
  if ($("#ask__0").hasClass("active")) {
    $("#ask__0").removeClass("active");
    $("#ask__0").removeClass("box__active");
    $("#svg__0").removeClass("svg__active");
    $("#title__0").removeClass("text_active");
  } else {
    $("#ask__1").removeClass("active");
    $("#ask__1").removeClass("box__active");
    $("#svg__1").removeClass("svg__active");
    $("#title__1").removeClass("text_active");

    $("#ask__2").removeClass("active");
    $("#ask__2").removeClass("box__active");
    $("#svg__2").removeClass("svg__active");
    $("#title__2").removeClass("text_active");

    $("#ask__3").removeClass("active");
    $("#ask__3").removeClass("box__active");
    $("#svg__3").removeClass("svg__active");
    $("#title__3").removeClass("text_active");

    $("#ask__4").removeClass("active");
    $("#ask__4").removeClass("box__active");
    $("#svg__4").removeClass("svg__active");
    $("#title__4").removeClass("text_active");
    
    $("#ask__0").addClass("active");
    $("#ask__0").addClass("box__active");
    $("#svg__0").addClass("svg__active");
    $("#title__0").addClass("text_active");
  }
}

function faq1() {
  if ($("#ask__1").hasClass("active")) {
    $("#ask__1").removeClass("active");
    $("#ask__1").removeClass("box__active");
    $("#svg__1").removeClass("svg__active");
    $("#title__1").removeClass("text_active");
  } else {
    $("#ask__0").removeClass("active");
    $("#ask__0").removeClass("box__active");
    $("#svg__0").removeClass("svg__active");
    $("#title__0").removeClass("text_active");

    $("#ask__2").removeClass("active");
    $("#ask__2").removeClass("box__active");
    $("#svg__2").removeClass("svg__active");
    $("#title__2").removeClass("text_active");

    $("#ask__3").removeClass("active");
    $("#ask__3").removeClass("box__active");
    $("#svg__3").removeClass("svg__active");
    $("#title__3").removeClass("text_active");

    $("#ask__4").removeClass("active");
    $("#ask__4").removeClass("box__active");
    $("#svg__4").removeClass("svg__active");
    $("#title__4").removeClass("text_active");

    $("#ask__1").addClass("active");
    $("#ask__1").addClass("box__active");
    $("#svg__1").addClass("svg__active");
    $("#title__1").addClass("text_active");
  }
}

function faq2() {
  if ($("#ask__2").hasClass("active")) {
    $("#ask__2").removeClass("active");
    $("#ask__2").removeClass("box__active");
    $("#svg__2").removeClass("svg__active");
    $("#title__2").removeClass("text_active");
  } else {
    $("#ask__0").removeClass("active");
    $("#ask__0").removeClass("box__active");
    $("#svg__0").removeClass("svg__active");
    $("#title__0").removeClass("text_active");

    $("#ask__1").removeClass("active");
    $("#ask__1").removeClass("box__active");
    $("#svg__1").removeClass("svg__active");
    $("#title__1").removeClass("text_active");

    $("#ask__3").removeClass("active");
    $("#ask__3").removeClass("box__active");
    $("#svg__3").removeClass("svg__active");
    $("#title__3").removeClass("text_active");

    $("#ask__4").removeClass("active");
    $("#ask__4").removeClass("box__active");
    $("#svg__4").removeClass("svg__active");
    $("#title__4").removeClass("text_active");

    $("#ask__2").addClass("active");
    $("#ask__2").addClass("box__active");
    $("#svg__2").addClass("svg__active");
    $("#title__2").addClass("text_active");
  }
}


function faq3() {
  if ($("#ask__3").hasClass("active")) {
    $("#ask__3").removeClass("active");
    $("#ask__3").removeClass("box__active");
    $("#svg__3").removeClass("svg__active");
    $("#title__3").removeClass("text_active");
  } else {
    $("#ask__0").removeClass("active");
    $("#ask__0").removeClass("box__active");
    $("#svg__0").removeClass("svg__active");
    $("#title__0").removeClass("text_active");

    $("#ask__1").removeClass("active");
    $("#ask__1").removeClass("box__active");
    $("#svg__1").removeClass("svg__active");
    $("#title__1").removeClass("text_active");

    $("#ask__2").removeClass("active");
    $("#ask__2").removeClass("box__active");
    $("#svg__2").removeClass("svg__active");
    $("#title__2").removeClass("text_active");

    $("#ask__4").removeClass("active");
    $("#ask__4").removeClass("box__active");
    $("#svg__4").removeClass("svg__active");
    $("#title__4").removeClass("text_active");
    
    $("#ask__3").addClass("active");
    $("#ask__3").addClass("box__active");
    $("#svg__3").addClass("svg__active");
    $("#title__3").addClass("text_active");
  }
}

function faq4() {
  if ($("#ask__4").hasClass("active")) {
    $("#ask__4").removeClass("active");
    $("#ask__4").removeClass("box__active");
    $("#svg__4").removeClass("svg__active");
    $("#title__4").removeClass("text_active");
  } else {
    $("#ask__0").removeClass("active");
    $("#ask__0").removeClass("box__active");
    $("#svg__0").removeClass("svg__active");
    $("#title__0").removeClass("text_active");

    $("#ask__1").removeClass("active");
    $("#ask__1").removeClass("box__active");
    $("#svg__1").removeClass("svg__active");
    $("#title__1").removeClass("text_active");

    $("#ask__2").removeClass("active");
    $("#ask__2").removeClass("box__active");
    $("#svg__2").removeClass("svg__active");
    $("#title__2").removeClass("text_active");

    $("#ask__3").removeClass("active");
    $("#ask__3").removeClass("box__active");
    $("#svg__3").removeClass("svg__active");
    $("#title__3").removeClass("text_active");

    $("#ask__4").addClass("active");
    $("#ask__4").addClass("box__active");
    $("#svg__4").addClass("svg__active");
    $("#title__4").addClass("text_active");
  }
}