'use strict';

$(document).ready(function () {
  const $hamburger = $('#hamburger');
  const $mobileMenu = $('#mobile-menu');

  $($hamburger).click(function () {
    $($hamburger).toggleClass('active');
    $($mobileMenu).toggleClass('opened');
  });
});
