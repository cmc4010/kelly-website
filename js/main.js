function myNavSlide() {
$('#fullpage').animate({ right: 250 }, 'slow', function() {
      //$('#slideout_button_a').html('Close');
    });
} 

function myNavReset() {
$('#fullpage').animate({ right: 0 }, 'slow', function() {
      //$('#slideout_button_a').html('Menu');
    });
}

function myNavSlider(){
if( $("#fullpage").css('right') == "0px"){
 myNavSlide();    
} else if ($("#fullpage").css('right') == "250px"){
myNavReset();
}    
}

function reset_slideout() {
$('#fullpage').animate({ right: 0 }, 'slow', function() {
$('#slideout_button_a').html('Menu');
});
}

$(window).resize(function() {
var w = $(window).width();
if( w > 768) {
reset_slideout();
}
});

//////////// SMOOTH SCROLLING //////////
//
//// SCROLL EVENT var //
//var lastScrollTop = 0; // previous position of view
//var currentScrollTop = 0; // current position of view
//var lastCall = 0; // time of last call
//var scrollFlag = 1;
//
//function myScrollTo(hash) {
//  location.hash = "#" + hash;
//}    
//
//$(window).scroll(function(){
//  var now = Date.now();
//
//   if( lastCall + 400 < now){ // last occurrence is more than 550ms ago
//    lastCall = now;
//
//    currentScrollTop = $(window).scrollTop(); 
//
//     if(lastScrollTop > currentScrollTop && scrollFlag == 1){ // scrolling up
//       if( location.hash == "#intro" || location.hash == ""){
//         animateScrollTop(0, 300, '');
//           //myScrollTo('');
//           lastScrollTop = 0;
//         } else if ( location.hash  == "#about"){
//           animateScrollTop( $('#intro').offset().top, 300, 'intro');
//           //myScrollTo('intro');
//           lastScrollTop = $('#intro').offset().top;
//         } else if ( location.hash == '#product') {
//           animateScrollTop( $('#about').offset().top , 300, 'about');
//           //myScrollTo('about');
//           lastScrollTop = $('#about').offset().top;
//         } else if ( location.hash == '#process') {
//           animateScrollTop( $('#product').offset().top , 300, 'product');
//           //myScrollTo('about');
//           lastScrollTop = $('#product').offset().top;
//         }  else if (location.hash == '#contact') {
//           animateScrollTop( $('#process').offset().top , 300, 'process');
//           //myScrollTo('services');
//           lastScrollTop = $('#process').offset().top;
//         } else {
//          alert('something went wrong 1');
//        }
//     } else if (lastScrollTop < currentScrollTop && scrollFlag == 1) { // scrolling down
//       if( location.hash == "#intro" || location.hash == ""){
//         animateScrollTop( $('#about').offset().top, 300, 'about');
//           //myScrollTo('about');
//           lastScrollTop = $('#about').offset().top;
//         } else if ( location.hash  == "#about"){
//           animateScrollTop( $('#product').offset().top , 300, 'product');
//           //myScrollTo('services');
//           lastScrollTop = $('#product').offset().top;
//         } else if ( location.hash == '#product') {
//           animateScrollTop( $('#process').offset().top , 300, 'process');
//           //myScrollTo('contact');
//           lastScrollTop = $('#process').offset().top;
//         } else if ( location.hash == '#process') {
//           animateScrollTop( $('#contact').offset().top , 300, 'contact');
//           //myScrollTo('contact');
//           lastScrollTop = $('#contact').offset().top;
//         }  else if (location.hash == '#contact') {
//          animateScrollTop( $('#contact').offset().top , 300, 'contact');
//          //myScrollTo('contact');
//          lastScrollTop = $('#contact').offset().top;
//        } else {
//          alert('something is wrong 2');
//        }
//      }
//    }    
//  });
//
//function animateScrollTop(target, duration, hash) {
//  duration = duration || 16;
//  var scrollTopProxy = { value: $(window).scrollTop() };
//  if (scrollTopProxy.value != target) {
//    $(scrollTopProxy).animate(
//      { value: target }, 
//      {   duration: duration, 
//
//        step: function (stepValue) {
//          var rounded = Math.round(stepValue);
//          $(window).scrollTop(rounded);
//        },
//
//        easing: 'easeOutQuad',
//
//        fail: function(){
//          myScrollTo(hash);
//        },
//
//        complete: function () {
//          myScrollTo(hash);
//        }
//      });
//  }
//}

//$(document).ready(function() {
//    $('#fullpage').fullpage({
//        //Navigation
//        menu: '#menu',
//        lockAnchors: false,
//        anchors:['home','about','product','process','contact']
//        navigation: false,
//        navigationPosition: 'right',
//        navigationTooltips: ['firstSlide', 'secondSlide'],
//        showActiveTooltip: false,
//        slidesNavigation: true,
//        slidesNavPosition: 'bottom',
//
//        //Scrolling
//        css3: true,
//        scrollingSpeed: 700,
//        autoScrolling: true,
//        fitToSection: true,
//        fitToSectionDelay: 1000,
//        scrollBar: false,
//        easing: 'easeInOutCubic',
//        easingcss3: 'ease',
//        loopBottom: false,
//        loopTop: false,
//        loopHorizontal: true,
//        continuousVertical: false,
//        //normalScrollElements: '#element1, .element2',
//        scrollOverflow: false,
//        touchSensitivity: 15,
//        normalScrollElementTouchThreshold: 5,
//
//        //Accessibility
//        keyboardScrolling: true,
//        animateAnchor: true,
//        recordHistory: true,
//
//        //Design
//        controlArrows: true,
//        verticalCentered: true,
//        resize : false,
//        sectionsColor : ['#ccc', '#fff'],
//        paddingTop: '3em',
//        paddingBottom: '10px',
//        fixedElements: '#navbar, #slideout_menu',
//        responsiveWidth: 0,
//        responsiveHeight: 0,
//
//        //Custom selectors
//        sectionSelector: '.section',
//        slideSelector: '.slide',
//
//        //events
//        onLeave: function(index, nextIndex, direction){},
//        afterLoad: function(anchorLink, index){},
//        afterRender: function(){},
//        afterResize: function(){},
//        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
//        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
//    });
//});

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['home','about','product','process','contact'],
        navigation: true,
        menu: "#myMenu"
    });
});

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

