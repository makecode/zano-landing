const itemsAnimateYOpacity = `
  #icon-hero .shield,
  #icon-hero .wall-left,
  #icon-hero .wall-right,
  
  #icon-hero .wallet-gradient,
  #icon-hero .wallet-bg,
  
  #icon-hero .atom-gradient,
  #icon-hero .atom-bg
`;
// init ScrollMagic
const controller = new ScrollMagic.Controller();

// section HERO animation
// prepare positions of elements
TweenMax.set('#icon-hero .st70', { x: 32, y: -32 });// eslint-disable-line
TweenMax.set('#icon-hero .st68', { x: -32, y: -32 });// eslint-disable-line
TweenMax.set('#icon-hero .shield', { y: 160, opacity: 0 });// eslint-disable-line
TweenMax.set('#icon-hero .wall-left, #icon-hero .wall-right', { y: 140, opacity: 0 });// eslint-disable-line
TweenMax.set('#icon-hero .wallet, #icon-hero .wallet-gradient, #icon-hero .wallet-bg', { y: 160, opacity: 0 });// eslint-disable-line
TweenMax.set('#icon-hero .atom, #icon-hero .atom-gradient, #icon-hero .atom-bg', { y: 160, opacity: 0 });// eslint-disable-line

const tlHero = new TimelineMax();
tlHero
  .to('.section.hero .section__icon', 2, { autoAlpha: 1 }, '+=0.5')
  .to('#icon-hero .st70, #icon-hero .st68', 2, { x: 0, y: 0 }, '-=1')
  .to(itemsAnimateYOpacity, 2, { y: 0, opacity: 1 }, '-=1');


// -----------------------------------------------------------------------


// section CORE
// prepare positions of elements
TweenMax.set('.section.core .section__wrap', { y: 400, autoAlpha: 0 });// eslint-disable-line

const tlCore = new TimelineMax();
tlCore
  .to('.section.core .section__wrap', 2, { y: 0, autoAlpha: 1 });

const sceneCore = new ScrollMagic.Scene({
  triggerElement: '.section.core',
  reverse: false
})
.setTween(tlCore)
.addIndicators()
.addTo(controller);


// -----------------------------------------------------------------------


// section PRIVACY
// prepare positions of elements
TweenMax.set('.section.privacy .section__wrap', { y: 400, autoAlpha: 0 });// eslint-disable-line
TweenMax.set('.section.privacy .section__icon', { scale: 0.4, autoAlpha: 0 });// eslint-disable-line

const tlPrivacy = new TimelineMax();
const tlPrivacyText = new TimelineMax();
const tlPrivacyIcon = new TimelineMax();

tlPrivacyText
  .to('.section.privacy .section__wrap', 2, { y: 0, autoAlpha: 1 });

tlPrivacyIcon
  .to('.section.privacy .section__icon', 2, { scale: 1, autoAlpha: 1});

tlPrivacy
  .add([tlPrivacyText, tlPrivacyIcon]);

const scenePrivacy = new ScrollMagic.Scene({
  triggerElement: '.section.privacy',
  reverse: false
})
.setTween(tlPrivacy)
.addIndicators()
.addTo(controller);


// -----------------------------------------------------------------------


// section E-COMMERCE animation
// prepare positions of elements
TweenMax.set('.section.ecommerce .features', { y: 200, autoAlpha: 0 });// eslint-disable-line
TweenMax.set('.section.ecommerce .section__icon', { scale: 0.4, autoAlpha: 0 });// eslint-disable-line

const tlEcommerce = new TimelineMax();
const tlEcommerceText = new TimelineMax();
const tlEcommerceIcon = new TimelineMax();

tlEcommerceIcon
  .to('.section.ecommerce .section__icon', 3, { scale: 1, autoAlpha: 1 })

tlEcommerceText
  .to('.section.ecommerce .features', 3, { y: 0, autoAlpha: 1 });

tlEcommerce
  .add([tlEcommerceText, tlEcommerceIcon]);

const sceneEcommerce = new ScrollMagic.Scene({
  triggerElement: '.section.ecommerce',
  reverse: false
})
.setTween(tlEcommerce)
.addIndicators()
.addTo(controller);


// -----------------------------------------------------------------------


// section WALLET animation
// prepare positions of elements
TweenMax.set('.section.wallet .section__left', { autoAlpha: 0 });// eslint-disable-line
TweenMax.set('#icon-wallet .display-data', { x: 113, y: 126 });// eslint-disable-line
TweenMax.set('#icon-wallet .display-shadow-one', { x: 74, y: 74 });// eslint-disable-line
TweenMax.set('#icon-wallet .display-shadow-two', { x: 36, y: 36 });// eslint-disable-line

const tlWallet = new TimelineMax();
const tlWalletText = new TimelineMax();
const tlWalletIcon = new TimelineMax();

tlWalletText
  .to('.section.wallet .section__left', 2, {autoAlpha: 1});

tlWalletIcon
  .to('#icon-wallet .display-data, #icon-wallet .display-shadow-one, #icon-wallet .display-shadow-two', 2, { x: 0, y: 0});

tlWallet
  .add([tlWalletIcon, tlWalletText]);

const sceneWallet = new ScrollMagic.Scene({
  triggerElement: '.section.wallet',
  reverse: false
})
.setTween(tlWallet)
.addIndicators()
.addTo(controller);


// -----------------------------------------------------------------------


// section RESCOURCES animation
// prepare positions of elements
TweenMax.set('.section.resources .section__title', { y: -100, autoAlpha: '0.3' });// eslint-disable-line
TweenMax.set('.section.resources .resources', { y: -230, autoAlpha: '0' });// eslint-disable-line

const tlRescources = new TimelineMax();
const tlRescourcesTitle = new TimelineMax();
const tlRescourcesItems = new TimelineMax();

tlRescourcesTitle
  .add(TweenMax.to('.section.resources .section__title', 2, { y: 0, autoAlpha: '1' }));

tlRescourcesItems
  .add(TweenMax.to('.section.resources .resources', 2, { y: 0, autoAlpha: '1' }));

tlRescources
  .add([tlRescourcesTitle, tlRescourcesItems]);

const sceneRescources = new ScrollMagic.Scene({
  triggerElement: '.section.resources',
  duration: '100%',
  reverse: false
})
.setTween(tlRescources)
.addIndicators()
.addTo(controller);


// -----------------------------------------------------------------------


$(document).ready(function () {
  const $hamburger = $('#hamburger');
  const $mobileMenu = $('#mobile-menu');

  $($hamburger).click(function () {
    $($hamburger).toggleClass('active');
    $($mobileMenu).toggleClass('opened');
  });
});
