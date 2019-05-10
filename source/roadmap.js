import 'ress';
import './styles/_index.sass';

$(document).ready(function () {
  const $hamburger = $('#hamburger');
  const $mobileMenu = $('#mobile-menu');

  $($hamburger).click(function () {
    $($hamburger).toggleClass('active');
    $($mobileMenu).toggleClass('opened');
  });

  $('.filtr-container').filterizr({
    layout: 'sameWidth'
  });

  $('.roadmap-menu__el').click(function() {
    $(this).toggleClass('active');
  });
});
