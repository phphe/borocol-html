webpackJsonp([0],[,function(n,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var c=a(2),t=(a.n(c),a(4)),s=(a.n(t),a(5)),e=(a.n(s),a(6)),o=(a.n(e),a(7)),r=(a.n(o),a(0)),l=(a.n(r),a(8)),u=(a.n(l),a(9)),d=a.n(u),f=a(10);a.n(f),a(11);new d.a},function(n,i){},,function(n,i){},function(n,i){},function(n,i){},function(n,i){},,,function(n,i,a){(function(n){n(function(){var i=n(".main-header .menu-card");n(".main-header .menu-btn").on("click",function(){var a=n(this);a.toggleClass("active"),a.hasClass("active")?i.slideDown():i.slideUp()}),i.find(".menu-item a").on("click",function(i){var a=n(this);a.next().is(".sub-menu")&&(i.preventDefault(),a.next().slideToggle())}),n(".carousel").each(function(){function i(n){var i=t.width();if("right"===n)(s+=i)>0&&(s=0);else{var a=-(c[0].scrollWidth-t.width());s-=i,s<a&&(s=a),s>0&&(s=0)}c.stop().animate({left:s+"px"})}var a=n(this),c=a.find(".carousel-list"),t=a.find(".carousel-list-wrapper"),s=0;a.find(".left-btn").on("click",function(){i("right")}),a.find(".right-btn").on("click",function(){i("left")})})})}).call(i,a(0))},function(n,i,a){"use strict";(function(n){var i=a(12);n(function(){var a=!1;n(window).on("resize",Object(i.a)(function(){var i=window.innerWidth<=768;if(a!==i){a=i;var c='<div class="card-wrapper-to-keep-shadow-in-slick"></div>',t=n(".soon-to-start-courses-block .cards, .early-bird-courses-block .cards"),s=n(".big-block .carousel");if(a){t.add(s).addClass("mini").find("img").each(function(i,a){var c=n(a);c.attr("src")||c.attr("src",c.attr("data-src"))}),t.find(".card").wrap(c),t.each(function(i,a){n(a).slick({dots:!0,arrows:!1,autoplay:!0})}),s.each(function(i,a){n(a).find(".carousel-list").children(".carousel-item").addClass("card").wrap(c)});var e=s.last();s.not(e).each(function(i,a){n(a).find(".carousel-list").slick({dots:!0,arrows:!1,autoplay:!0})}),e.find(".carousel-list").slick({dots:!0,arrows:!1,autoplay:!0,slidesToShow:2,slidesToScroll:2})}else t.add(s).removeClass("mini"),t.each(function(i,a){n(a).slick("unslick")}),t.find(".card").unwrap(),s.each(function(i,a){n(a).find(".carousel-list").slick("unslick")}),s.find(".carousel-item").removeClass("card").unwrap()}}))})}).call(i,a(0))},function(n,i,a){"use strict";function c(n){return n(),n}i.a=c}],[1]);