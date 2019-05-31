$(document).ready(function() {
  $('.hide').click(function() {
    $(this).hide();
  });
});

// Menu toggle-button

$(document).ready(function() {
  $('.menu-icon').on('click', function() {
    $('nav ul').toggleClass('showing');
  });
});

// Scrolling Effect

$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
});

// popup
var c = 0;
function pop() {
  if (c == 0) {
    document.getElementById('popup').style.display = 'block';
    c = 1;
  } else {
    document.getElementById('popup').style.display = 'none';
    c = 0;
  }
}

// scroll top button
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  $('#topBtn').click(function() {
    $('html , body').animate({ scrollTop: 0 }, 800);
  });
});
