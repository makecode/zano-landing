import 'ress';
import './styles/_index.sass';

$(document).ready(function () {
  const $hamburger = $('#hamburger');
  const $mobileMenu = $('#mobile-menu');

  $($hamburger).click(function () {
    $($hamburger).toggleClass('active');
    $($mobileMenu).toggleClass('opened');
  });
});
