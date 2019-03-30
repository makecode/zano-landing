"use strict";var itemsAnimateYOpacity="\n  #icon-hero .shield,\n  #icon-hero .wall-left,\n  #icon-hero .wall-right,\n  \n  #icon-hero .wallet-gradient,\n  #icon-hero .wallet-bg,\n  \n  #icon-hero .atom-gradient,\n  #icon-hero .atom-bg\n",controller=new ScrollMagic.Controller;TweenMax.set("#icon-hero .st70",{x:32,y:-32}),TweenMax.set("#icon-hero .st68",{x:-32,y:-32}),TweenMax.set("#icon-hero .shield",{y:160,opacity:0}),TweenMax.set("#icon-hero .wall-left, #icon-hero .wall-right",{y:140,opacity:0}),TweenMax.set("#icon-hero .wallet, #icon-hero .wallet-gradient, #icon-hero .wallet-bg",{y:160,opacity:0}),TweenMax.set("#icon-hero .atom, #icon-hero .atom-gradient, #icon-hero .atom-bg",{y:160,opacity:0});var tlHero=new TimelineMax;tlHero.to(".section.hero .section__icon",2,{autoAlpha:1},"+=0.5").to("#icon-hero .st70, #icon-hero .st68",2,{x:0,y:0},"-=1").to(itemsAnimateYOpacity,2,{y:0,opacity:1},"-=1"),TweenMax.set(".section.core .section__wrap",{y:400,autoAlpha:0});var tlCore=new TimelineMax;tlCore.to(".section.core .section__wrap",2,{y:0,autoAlpha:1});var sceneCore=new ScrollMagic.Scene({triggerElement:".section.core",reverse:!1}).setTween(tlCore).addIndicators().addTo(controller);TweenMax.set(".section.privacy .section__wrap",{y:400,autoAlpha:0}),TweenMax.set(".section.privacy .section__icon",{scale:.4,autoAlpha:0});var tlPrivacy=new TimelineMax,tlPrivacyText=new TimelineMax,tlPrivacyIcon=new TimelineMax;tlPrivacyText.to(".section.privacy .section__wrap",2,{y:0,autoAlpha:1}),tlPrivacyIcon.to(".section.privacy .section__icon",2,{scale:1,autoAlpha:1}),tlPrivacy.add([tlPrivacyText,tlPrivacyIcon]);var scenePrivacy=new ScrollMagic.Scene({triggerElement:".section.privacy",reverse:!1}).setTween(tlPrivacy).addIndicators().addTo(controller);TweenMax.set(".section.ecommerce .features",{y:200,autoAlpha:0}),TweenMax.set(".section.ecommerce .section__icon",{scale:.4,autoAlpha:0});var tlEcommerce=new TimelineMax,tlEcommerceText=new TimelineMax,tlEcommerceIcon=new TimelineMax;tlEcommerceIcon.to(".section.ecommerce .section__icon",3,{scale:1,autoAlpha:1}),tlEcommerceText.to(".section.ecommerce .features",3,{y:0,autoAlpha:1}),tlEcommerce.add([tlEcommerceText,tlEcommerceIcon]);var sceneEcommerce=new ScrollMagic.Scene({triggerElement:".section.ecommerce",reverse:!1}).setTween(tlEcommerce).addIndicators().addTo(controller);TweenMax.set(".section.wallet .section__left",{autoAlpha:0}),TweenMax.set("#icon-wallet .display-data",{x:113,y:126}),TweenMax.set("#icon-wallet .display-shadow-one",{x:74,y:74}),TweenMax.set("#icon-wallet .display-shadow-two",{x:36,y:36});var tlWallet=new TimelineMax,tlWalletText=new TimelineMax,tlWalletIcon=new TimelineMax;tlWalletText.to(".section.wallet .section__left",2,{autoAlpha:1}),tlWalletIcon.to("#icon-wallet .display-data, #icon-wallet .display-shadow-one, #icon-wallet .display-shadow-two",2,{x:0,y:0}),tlWallet.add([tlWalletIcon,tlWalletText]);var sceneWallet=new ScrollMagic.Scene({triggerElement:".section.wallet",reverse:!1}).setTween(tlWallet).addIndicators().addTo(controller);TweenMax.set(".section.resources .section__title",{y:-100,autoAlpha:"0.3"}),TweenMax.set(".section.resources .resources",{y:-230,autoAlpha:"0"});var tlRescources=new TimelineMax,tlRescourcesTitle=new TimelineMax,tlRescourcesItems=new TimelineMax;tlRescourcesTitle.add(TweenMax.to(".section.resources .section__title",2,{y:0,autoAlpha:"1"})),tlRescourcesItems.add(TweenMax.to(".section.resources .resources",2,{y:0,autoAlpha:"1"})),tlRescources.add([tlRescourcesTitle,tlRescourcesItems]);var sceneRescources=new ScrollMagic.Scene({triggerElement:".section.resources",duration:"100%",reverse:!1}).setTween(tlRescources).addIndicators().addTo(controller);$(document).ready(function(){var e=$("#hamburger"),t=$("#mobile-menu");$(e).click(function(){$(e).toggleClass("active"),$(t).toggleClass("opened")})});