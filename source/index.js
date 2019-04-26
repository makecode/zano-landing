import 'ress';
import './styles/_index.sass';

// import libs
// import { TweenMax, TimelineMax } from 'gsap';
// import ScrollMagic from 'scrollmagic';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

// init ScrollMagic
const controller = new ScrollMagic.Controller();

// section HERO animation
// prepare positions of elements
const iconHeroItems = `
  #icon-hero .shield,
  #icon-hero .wall-left,
  #icon-hero .wall-right,

  #icon-hero .wallet,
  #icon-hero .wallet-bg,

  #icon-hero .atom,
  #icon-hero .atom-bg`;

TweenMax.set('#icon-hero .st70', { x: 32, y: -32 });
TweenMax.set('#icon-hero .st68', { x: -32, y: -32 });
TweenMax.set('#icon-hero .shield', { y: 160, opacity: 0 });
TweenMax.set('#icon-hero .atom-gradient, #icon-hero .wallet', { opacity: 0 });
TweenMax.set('#icon-hero .wall-left, #icon-hero .wall-right', { y: 140, opacity: 0 });
TweenMax.set('#icon-hero .wallet, #icon-hero .wallet-gradient, #icon-hero .wallet-bg', { y: 160, opacity: 0 });
TweenMax.set('#icon-hero .atom, #icon-hero .atom-gradient, #icon-hero .atom-bg', { y: 160, opacity: 0 });

const tlHero = new TimelineMax();
tlHero
  .to('.section.hero .section__icon', 2, { autoAlpha: 1 }, '+=0.5')
  .to('#icon-hero .st70, #icon-hero .st68', 2, { x: 0, y: 0 }, '-=1')
  .to(iconHeroItems, 2, { y: 0, opacity: 1 }, '-=1');


// -----------------------------------------------------------------------


// section CORE
// prepare positions of elements
TweenMax.set('.section.core .section__wrap', { y: 200, autoAlpha: 0, transformOrigin: 'center' });
TweenMax.set('#icon-core #_x31_7, #icon-core #_x31_3, #icon-core #_x33__1_', { y: 160, scale: 0.7, autoAlpha: 0, transformOrigin: 'center' });
TweenMax.set('#icon-core #_x34_6, #icon-core #_x34_0, #icon-core #_x33_4', { autoAlpha: 0, scale: 0.5, transformOrigin: 'center' });

const tlCore = new TimelineMax();
const tlCoreSection = new TimelineMax();
const tlCoreIcon = new TimelineMax();

tlCoreSection
  .to('.section.core .section__wrap', 2, { y: 0, autoAlpha: 1 });

tlCoreIcon
  .to('#icon-core #_x31_7, #icon-core #_x31_3, #icon-core #_x33__1_', 3, { y: 0, autoAlpha: 1, scale: 1 })
  .to('#icon-core #_x34_6, #icon-core #_x34_0, #icon-core #_x33_4', 3, { autoAlpha: 1, scale: 1 }, '-=2');

tlCore
  .add([tlCoreSection, tlCoreIcon]);

const sceneCore = new ScrollMagic.Scene({
  triggerElement: '.section.core',
  reverse: false
})
  .setTween(tlCore)
  .addTo(controller);


// -----------------------------------------------------------------------


// section PRIVACY
// prepare positions of elements
TweenMax.set('.section.privacy .section__wrap', { y: 400, autoAlpha: 0 });
TweenMax.set('.section.privacy .section__icon', { scale: 0.4, autoAlpha: 0 });

const privacyItems1 = '#icon-privacy #_x34_03, #icon-privacy #_x33_98, #icon-privacy #_x33_93, #icon-privacy #_x33_88, #icon-privacy #_x33_83';
const privacyItems2 = '#icon-privacy #_x33_86, #icon-privacy #_x33_91, #icon-privacy #_x33_96, #icon-privacy #_x34_01, #icon-privacy #_x34_06';
const privacyItems3 = '#icon-privacy #_x33_65, #icon-privacy #_x33_63, #icon-privacy #_x33_62, #icon-privacy #_x33_60, #icon-privacy #_x33_59, #icon-privacy #_x33_57, #icon-privacy #_x33_56, #icon-privacy #_x33_54, #icon-privacy #_x33_51, #icon-privacy #_x33_53';
TweenMax.set(privacyItems1, { scale: 0, transformOrigin: 'center' });
TweenMax.set(privacyItems2, { scale: 0.4, y: 150, autoAlpha: 0, transformOrigin: 'center' });
TweenMax.set(privacyItems3, { scale: 0.3, y: 50, autoAlpha: 0, transformOrigin: 'center' });
TweenMax.set('#icon-privacy #_x33_67', { x: -50, y: -24, scale: 0.3, autoAlpha: 0, transformOrigin: 'center' });
TweenMax.set('#icon-privacy #_x33_70', { x: -50, y: 24, scale: 0.3, autoAlpha: 0, transformOrigin: 'center' });
TweenMax.set('#icon-privacy #_x33_73', { y: 50, scale: 0.3, autoAlpha: 0, transformOrigin: 'center' });
TweenMax.set('#icon-privacy #_x33_76', { x: 50, y: 24, scale: 0.3, autoAlpha: 0, transformOrigin: 'center' });
TweenMax.set('#icon-privacy #_x33_79', { x: 50, y: -24, scale: 0.3, autoAlpha: 0, transformOrigin: 'center' });
TweenMax.set('#icon-privacy #_x34_13', { y: 60, transformOrigin: 'center' });
TweenMax.set('#icon-privacy #_x34_10', { y: 110, transformOrigin: 'center' });
TweenMax.set('#icon-privacy #_x33_41', { y: 160, scale: 0.3, autoAlpha: 0, transformOrigin: 'center' });

const tlPrivacy = new TimelineMax();
const tlPrivacyText = new TimelineMax();
const tlPrivacyIcon = new TimelineMax();

tlPrivacyText
  .to('.section.privacy .section__wrap', 2, { y: 0, autoAlpha: 1 });

tlPrivacyIcon
  .to('.section.privacy .section__icon', 2, { scale: 1, autoAlpha: 1 })
  .to(privacyItems1, 0.5, { scale: 1 })
  .to(privacyItems2, 0.5, { scale: 1, y: 0, autoAlpha: 1 }, '-=1')
  .to('#icon-privacy #_x33_67, #icon-privacy #_x33_70, #icon-privacy #_x33_73, #icon-privacy #_x33_76, #icon-privacy #_x33_79', 1, { x: 0, y: 0, scale: 1, autoAlpha: 1 })
  .to(privacyItems3, 0.5, { scale: 1, y: 0, autoAlpha: 1 })
  .to('#icon-privacy #_x34_13, #icon-privacy #_x34_10', 0.5, { y: 0 })
  .to('#icon-privacy #_x33_41', 0.5, { scale: 1, y: 0, autoAlpha: 1 }, '-=0.5')

tlPrivacy
  .add([tlPrivacyText, tlPrivacyIcon]);

const scenePrivacy = new ScrollMagic.Scene({
  triggerElement: '.section.privacy',
  reverse: false
})
  .setTween(tlPrivacy)
  .addTo(controller);


// -----------------------------------------------------------------------


// section E-COMMERCE animation
// prepare positions of elements
TweenMax.set('.section.ecommerce .features', { y: 200, autoAlpha: 0 });
TweenMax.set('.section.ecommerce .section__icon', { scale: 0.4, autoAlpha: 0 });
TweenMax.set('#icon-ecommerce #_x33_25', { autoAlpha: 0 });
TweenMax.set('#icon-ecommerce #_x32_81, #icon-ecommerce #_x32_90, #icon-ecommerce #_x32_99, #icon-ecommerce #_x32_52', { autoAlpha: 0 });
TweenMax.set('#icon-ecommerce #_x32_27, #icon-ecommerce #_x32_13, #icon-ecommerce #_x32_03, #icon-ecommerce #_x31_93, #icon-ecommerce #_x31_88', { y: 100, scale: 0.3, autoAlpha: 0, transformOrigin: 'center' });
TweenMax.set('#icon-ecommerce #_x32_31, #icon-ecommerce #_x32_07, #icon-ecommerce #_x32_21, #icon-ecommerce #_x31_97, #icon-ecommerce #_x31_83', { y: -100, scaleY: 0, autoAlpha: 0, transformOrigin: 'bottom' });
TweenMax.set('#icon-ecommerce #_x32_49, #icon-ecommerce #_x32_46, #icon-ecommerce #_x32_43, #icon-ecommerce #_x32_40, #icon-ecommerce #_x32_37', { scale: 0, transformOrigin: 'center' });

const tlEcommerce = new TimelineMax();
const tlEcommerceText = new TimelineMax();
const tlEcommerceIcon = new TimelineMax();

tlEcommerceIcon
  .to('.section.ecommerce .section__icon', 2, { scale: 1, autoAlpha: 1 })
  .to('#icon-ecommerce #_x32_81, #icon-ecommerce #_x32_90, #icon-ecommerce #_x32_99', 0.5, { autoAlpha: 1 })
  .to('#icon-ecommerce #_x32_52', 0.5, { autoAlpha: 1 })
  .to('#icon-ecommerce #_x32_49, #icon-ecommerce #_x32_46, #icon-ecommerce #_x32_43, #icon-ecommerce #_x32_40, #icon-ecommerce #_x32_37', 0.5, { scale: 1 })
  .to('#icon-ecommerce #_x32_27, #icon-ecommerce #_x32_13, #icon-ecommerce #_x32_03, #icon-ecommerce #_x31_93, #icon-ecommerce #_x31_88', 0.5, { y: 0, scale: 1, autoAlpha: 1 })
  .to('#icon-ecommerce #_x32_31, #icon-ecommerce #_x32_07, #icon-ecommerce #_x32_21, #icon-ecommerce #_x31_97, #icon-ecommerce #_x31_83', 0.5, { y: 0, scaleY: 1, autoAlpha: 1 }, '-=0.5')

tlEcommerceText
  .to('.section.ecommerce .features', 2, { y: 0, autoAlpha: 1 });

tlEcommerce
  .add([tlEcommerceText, tlEcommerceIcon]);

const sceneEcommerce = new ScrollMagic.Scene({
  triggerElement: '.section.ecommerce',
  reverse: false
})
  .setTween(tlEcommerce)
  .addTo(controller);


// -----------------------------------------------------------------------


// section WALLET animation
// prepare positions of elements
TweenMax.set('.section.wallet .section__left', { autoAlpha: 0 });
TweenMax.set('#icon-wallet .display-data', { x: 113, y: 126 });
TweenMax.set('#icon-wallet .display-shadow-one', { x: 74, y: 74 });
TweenMax.set('#icon-wallet .display-shadow-two', { x: 36, y: 36 });

const tlWallet = new TimelineMax();
const tlWalletText = new TimelineMax();
const tlWalletIcon = new TimelineMax();

tlWalletText
  .to('.section.wallet .section__left', 2, { autoAlpha: 1 });

tlWalletIcon
  .to('#icon-wallet .display-data, #icon-wallet .display-shadow-one, #icon-wallet .display-shadow-two', 1, { x: 0, y: 0 })
  .to('#icon-wallet .display-data', 2, { x: 113, y: 126 })
  .to('#icon-wallet .display-shadow-one', 2, { x: 74, y: 74 }, '-=2')
  .to('#icon-wallet .display-shadow-two', 2, { autoAlpha: 0 }, '-=4');

tlWallet
  .add([tlWalletIcon, tlWalletText]);

const sceneWallet = new ScrollMagic.Scene({
  triggerElement: '.section.wallet',
  reverse: false
})
  .setTween(tlWallet)
  .addTo(controller);


// -----------------------------------------------------------------------


// section RESCOURCES animation
// prepare positions of elements
TweenMax.set('.section.resources .section__title', { y: -100, autoAlpha: '0.3' });
TweenMax.set('.section.resources .resources', { y: -230, autoAlpha: '0' });

const tlRescources = new TimelineMax();
const tlRescourcesTitle = new TimelineMax();
const tlRescourcesItems = new TimelineMax();

tlRescourcesTitle
  .to('.section.resources .section__title', 2, { y: 0, autoAlpha: '1' });

tlRescourcesItems
  .to('.section.resources .resources', 2, { y: 0, autoAlpha: '1' });

tlRescources
  .add([tlRescourcesTitle, tlRescourcesItems]);

const sceneRescources = new ScrollMagic.Scene({
  triggerElement: '.section.resources',
  duration: '100%',
  reverse: false
})
  .setTween(tlRescources)
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
