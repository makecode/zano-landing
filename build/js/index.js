webpackJsonp([4],{2:function(e,c,o){"use strict";o(0),o(1);var n=new ScrollMagic.Controller;TweenMax.set("#icon-hero .st70",{x:32,y:-32}),TweenMax.set("#icon-hero .st68",{x:-32,y:-32}),TweenMax.set("#icon-hero .shield",{y:160,opacity:0}),TweenMax.set("#icon-hero .atom-gradient, #icon-hero .wallet",{opacity:0}),TweenMax.set("#icon-hero .wall-left, #icon-hero .wall-right",{y:140,opacity:0}),TweenMax.set("#icon-hero .wallet, #icon-hero .wallet-gradient, #icon-hero .wallet-bg",{y:160,opacity:0}),TweenMax.set("#icon-hero .atom, #icon-hero .atom-gradient, #icon-hero .atom-bg",{y:160,opacity:0}),(new TimelineMax).to(".section.hero .section__icon",2,{autoAlpha:1},"+=0.5").to("#icon-hero .st70, #icon-hero .st68",2,{x:0,y:0},"-=1").to("\n  #icon-hero .shield,\n  #icon-hero .wall-left,\n  #icon-hero .wall-right,\n\n  #icon-hero .wallet,\n  #icon-hero .wallet-bg,\n\n  #icon-hero .atom,\n  #icon-hero .atom-bg",2,{y:0,opacity:1},"-=1"),TweenMax.set(".section.core .section__wrap",{y:200,autoAlpha:0,transformOrigin:"center"}),TweenMax.set("#icon-core #_x31_7, #icon-core #_x31_3, #icon-core #_x33__1_",{y:160,scale:.7,autoAlpha:0,transformOrigin:"center"}),TweenMax.set("#icon-core #_x34_6, #icon-core #_x34_0, #icon-core #_x33_4",{autoAlpha:0,scale:.5,transformOrigin:"center"});var a=new TimelineMax,i=new TimelineMax,t=new TimelineMax;i.to(".section.core .section__wrap",2,{y:0,autoAlpha:1}),t.to("#icon-core #_x31_7, #icon-core #_x31_3, #icon-core #_x33__1_",3,{y:0,autoAlpha:1,scale:1}).to("#icon-core #_x34_6, #icon-core #_x34_0, #icon-core #_x33_4",3,{autoAlpha:1,scale:1},"-=2"),a.add([i,t]);new ScrollMagic.Scene({triggerElement:".section.core",reverse:!1}).setTween(a).addTo(n);TweenMax.set(".section.privacy .section__wrap",{y:400,autoAlpha:0}),TweenMax.set(".section.privacy .section__icon",{scale:.4,autoAlpha:0});var r="#icon-privacy #_x34_03, #icon-privacy #_x33_98, #icon-privacy #_x33_93, #icon-privacy #_x33_88, #icon-privacy #_x33_83",_="#icon-privacy #_x33_86, #icon-privacy #_x33_91, #icon-privacy #_x33_96, #icon-privacy #_x34_01, #icon-privacy #_x34_06",l="#icon-privacy #_x33_65, #icon-privacy #_x33_63, #icon-privacy #_x33_62, #icon-privacy #_x33_60, #icon-privacy #_x33_59, #icon-privacy #_x33_57, #icon-privacy #_x33_56, #icon-privacy #_x33_54, #icon-privacy #_x33_51, #icon-privacy #_x33_53";TweenMax.set(r,{scale:0,transformOrigin:"center"}),TweenMax.set(_,{scale:.4,y:150,autoAlpha:0,transformOrigin:"center"}),TweenMax.set(l,{scale:.3,y:50,autoAlpha:0,transformOrigin:"center"}),TweenMax.set("#icon-privacy #_x33_67",{x:-50,y:-24,scale:.3,autoAlpha:0,transformOrigin:"center"}),TweenMax.set("#icon-privacy #_x33_70",{x:-50,y:24,scale:.3,autoAlpha:0,transformOrigin:"center"}),TweenMax.set("#icon-privacy #_x33_73",{y:50,scale:.3,autoAlpha:0,transformOrigin:"center"}),TweenMax.set("#icon-privacy #_x33_76",{x:50,y:24,scale:.3,autoAlpha:0,transformOrigin:"center"}),TweenMax.set("#icon-privacy #_x33_79",{x:50,y:-24,scale:.3,autoAlpha:0,transformOrigin:"center"}),TweenMax.set("#icon-privacy #_x34_13",{y:60,transformOrigin:"center"}),TweenMax.set("#icon-privacy #_x34_10",{y:110,transformOrigin:"center"}),TweenMax.set("#icon-privacy #_x33_41",{y:160,scale:.3,autoAlpha:0,transformOrigin:"center"});var s=new TimelineMax,x=new TimelineMax,m=new TimelineMax;x.to(".section.privacy .section__wrap",2,{y:0,autoAlpha:1}),m.to(".section.privacy .section__icon",2,{scale:1,autoAlpha:1}).to(r,.5,{scale:1}).to(_,.5,{scale:1,y:0,autoAlpha:1},"-=1").to("#icon-privacy #_x33_67, #icon-privacy #_x33_70, #icon-privacy #_x33_73, #icon-privacy #_x33_76, #icon-privacy #_x33_79",1,{x:0,y:0,scale:1,autoAlpha:1}).to(l,.5,{scale:1,y:0,autoAlpha:1}).to("#icon-privacy #_x34_13, #icon-privacy #_x34_10",.5,{y:0}).to("#icon-privacy #_x33_41",.5,{scale:1,y:0,autoAlpha:1},"-=0.5"),s.add([x,m]);new ScrollMagic.Scene({triggerElement:".section.privacy",reverse:!1}).setTween(s).addTo(n);TweenMax.set(".section.ecommerce .features",{y:200,autoAlpha:0}),TweenMax.set(".section.ecommerce .section__icon",{scale:.4,autoAlpha:0}),TweenMax.set("#icon-ecommerce #_x33_25",{autoAlpha:0}),TweenMax.set("#icon-ecommerce #_x32_81, #icon-ecommerce #_x32_90, #icon-ecommerce #_x32_99, #icon-ecommerce #_x32_52",{autoAlpha:0}),TweenMax.set("#icon-ecommerce #_x32_27, #icon-ecommerce #_x32_13, #icon-ecommerce #_x32_03, #icon-ecommerce #_x31_93, #icon-ecommerce #_x31_88",{y:100,scale:.3,autoAlpha:0,transformOrigin:"center"}),TweenMax.set("#icon-ecommerce #_x32_31, #icon-ecommerce #_x32_07, #icon-ecommerce #_x32_21, #icon-ecommerce #_x31_97, #icon-ecommerce #_x31_83",{y:-100,scaleY:0,autoAlpha:0,transformOrigin:"bottom"}),TweenMax.set("#icon-ecommerce #_x32_49, #icon-ecommerce #_x32_46, #icon-ecommerce #_x32_43, #icon-ecommerce #_x32_40, #icon-ecommerce #_x32_37",{scale:0,transformOrigin:"center"});var p=new TimelineMax,y=new TimelineMax,w=new TimelineMax;w.to(".section.ecommerce .section__icon",2,{scale:1,autoAlpha:1}).to("#icon-ecommerce #_x32_81, #icon-ecommerce #_x32_90, #icon-ecommerce #_x32_99",.5,{autoAlpha:1}).to("#icon-ecommerce #_x32_52",.5,{autoAlpha:1}).to("#icon-ecommerce #_x32_49, #icon-ecommerce #_x32_46, #icon-ecommerce #_x32_43, #icon-ecommerce #_x32_40, #icon-ecommerce #_x32_37",.5,{scale:1}).to("#icon-ecommerce #_x32_27, #icon-ecommerce #_x32_13, #icon-ecommerce #_x32_03, #icon-ecommerce #_x31_93, #icon-ecommerce #_x31_88",.5,{y:0,scale:1,autoAlpha:1}).to("#icon-ecommerce #_x32_31, #icon-ecommerce #_x32_07, #icon-ecommerce #_x32_21, #icon-ecommerce #_x31_97, #icon-ecommerce #_x31_83",.5,{y:0,scaleY:1,autoAlpha:1},"-=0.5"),y.to(".section.ecommerce .features",2,{y:0,autoAlpha:1}),p.add([y,w]);new ScrollMagic.Scene({triggerElement:".section.ecommerce",reverse:!1}).setTween(p).addTo(n);TweenMax.set(".section.wallet .section__left",{autoAlpha:0}),TweenMax.set("#icon-wallet .display-data",{x:113,y:126}),TweenMax.set("#icon-wallet .display-shadow-one",{x:74,y:74}),TweenMax.set("#icon-wallet .display-shadow-two",{x:36,y:36});var h=new TimelineMax,T=new TimelineMax,u=new TimelineMax;T.to(".section.wallet .section__left",2,{autoAlpha:1}),u.to("#icon-wallet .display-data, #icon-wallet .display-shadow-one, #icon-wallet .display-shadow-two",1,{x:0,y:0}).to("#icon-wallet .display-data",2,{x:113,y:126}).to("#icon-wallet .display-shadow-one",2,{x:74,y:74},"-=2").to("#icon-wallet .display-shadow-two",2,{autoAlpha:0},"-=4"),h.add([u,T]);new ScrollMagic.Scene({triggerElement:".section.wallet",reverse:!1}).setTween(h).addTo(n);TweenMax.set(".section.resources .section__title",{y:-100,autoAlpha:"0.3"}),TweenMax.set(".section.resources .resources",{y:-230,autoAlpha:"0"});var M=new TimelineMax,v=new TimelineMax,d=new TimelineMax;v.to(".section.resources .section__title",2,{y:0,autoAlpha:"1"}),d.to(".section.resources .resources",2,{y:0,autoAlpha:"1"}),M.add([v,d]);new ScrollMagic.Scene({triggerElement:".section.resources",duration:"100%",reverse:!1}).setTween(M).addTo(n);$(document).ready(function(){var e=$("#hamburger"),c=$("#mobile-menu");$(e).click(function(){$(e).toggleClass("active"),$(c).toggleClass("opened")})})}},[2]);