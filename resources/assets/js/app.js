// *************************************************************************
// *************************************************************************
// *************************************************************************

require('./bootstrap');



// #ACCODION
// =========================================================================

$('.accordion__content').hide();
$('.accordion__content').first().show();
$('.accordion__panel').first().addClass('is--open');

$('.accordion__title').click(function() {
    $('.accordion__panel').removeClass('is--open');
    $(this).parent().addClass('is--open');
    $('.accordion__content').slideUp(200);
    $(this).next('.accordion__content').slideDown(200);
});



// #TABS
// =========================================================================

$('li[data-tab], .tabs__content').first().addClass('is--active');
$('.tabs__content').first().addClass('is--active');

$('li[data-tab]').click(function() {
    var thisTab = $(this).attr('data-tab');
    var tab = $('.tabs__content' + '[data-tab="' + thisTab + '"]');

    $('li[data-tab]').removeClass('is--active');
    $(this).addClass('is--active');
    $('.tabs__content').removeClass('is--active');
    tab.addClass('is--active');
});




// #DROPDOWN
// =========================================================================

$('.dropdown__container').mouseenter(function() {
    $(this).addClass('is--active');
});

$('.dropdown__container').mouseleave(function() {
    $(this).removeClass('is--active');
});

$('.dropdown').mouseleave(function() {
    $(this).parent().removeClass('is--active');
});




// #ALERT NOTIFY
// =========================================================================

$('.alert--notify').click(function() {
    $(this).fadeOut(200);
});



// #OFF CANVAS
// =========================================================================

var offCanvasTrigger = document.querySelector('.off-canvas__trigger');
var offCanvas = document.querySelector('.off-canvas');

if (offCanvasTrigger) {
    offCanvasTrigger.addEventListener('click', function () {
        offCanvas.classList.add('is--open');
        overlay.classList.add('is--active');
    });
}



// #MODAL
// =========================================================================

var modalTrigger = document.querySelector('.modal__trigger');
var modal = document.querySelector('.modal');

if (modalTrigger) {
    modalTrigger.addEventListener('click', function () {
        modal.classList.add('is--open');
        overlay.classList.add('is--active');
    });
}



// #KEY CONTROL
// =========================================================================

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        overlay.classList.remove('is--active');
    }
});

if (offCanvas) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            offCanvas.classList.remove('is--open');
        }
    });

}

if (modal) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            modal.classList.remove('is--open');
        }
    });

}



// #OVERLAY
// =========================================================================

var overlay = document.querySelector('.overlay');

if (overlay) {
    overlay.addEventListener('click', function () {
        this.classList.remove('is--active');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        offCanvas.classList.remove('is--open');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        modal.classList.remove('is--open');
    });
}



// #DOCS
// =========================================================================

/** LIGHTBOX **/
jQuery(document).ready(function($) {
    $('.lightbox').hide();

    var testPos = function() {
      var testNext = $('.active').parent().next().children();
        if (testNext.length == 0) {
          $('.next').hide();
        } else {
          $('.next').show();
        }

      var testPrev = $('.active').parent().prev().children();
        if (testPrev.length == 0) {
          $('.prev').hide();
        } else {
          $('.prev').show();
        }
    }
    
    $('.lightbox__trigger').click(function(e){
        e.preventDefault();
        $('body').addClass('lightbox-active');
        
        $('.lightbox').show();
        $('.active').removeClass('active');
        $(this).children().addClass('active');
        
        var activeimg = $('.active').data('lightbox');      
        //lightbox content img src of active image
        $('.lightbox_content img').attr('src', activeimg);

        testPos();
    });
    
    var trigger = $('.process-thumbnails .lightbox__trigger');
    var active = $('.active');
    
    $('.next').click(function(){

        var next = $('.active').parent().next().children();
        $('.active').removeClass('active');
        next.addClass('active');
        
        var activeimg = $('.active').data('lightbox');
        $('.lightbox_content img').attr('src', activeimg);

        testPos();
    });
    
    $('.prev').click(function(){
        var previous = $('.active').parent().prev().children();
        $('.active').removeClass('active');
        previous.addClass('active');
        
        var activeimg = $('.active').data('lightbox');
        $('.lightbox_content img').attr('src', activeimg);    

        testPos();
    });
    
    $(document).mouseup(function(e) {     
        var arrows = $("span");     
        if (!arrows.is(e.target)) {
            $('.lightbox').hide();
        }
    });  

});

$('.close').on('click', function(){
  $('.overlay').removeClass('is--active')
  $('.lightbox').hide();
})

// nav active class underline
$(document).ready(function() {
    $('.nav__navbar li').click(function(){
        $('ul.nav__navbar').removeClass('is--active');
        $('.nav__navbar li.is--active').removeClass('is--active');
        $(this).addClass('is--active');
    });
});


//email form
var form = $('.form');

$(form).submit(function(e) {
  e.preventDefault();

  var formData = new FormData($(this)[0]);

  $.ajax({
    type: 'post',
    url: $(this).attr('action'),
    data: formData,
    processData: false,
    contentType: false
  })
  .done(function (response) {
    $('input').val('');
    $('textarea').val('');
    $('<div class="alert is-success">Your Message Was Sent! We\'ll be in touch.</div>').insertAfter(form);
    
    console.log('success' + response);
  })
  .fail(function (data) {
    $('input').val('');
    $('textarea').val('');
    $('<div class="alert is-error">Oh no! Something went wrong, try again.</div>').insertAfter(form);
    
    console.log('fail' + data);
  })

});


// Resume submit
var resForm = $('.resume-form');

$(resForm).submit(function(e) {
  e.preventDefault();

  var formData = new FormData($(this)[0]);

  formData.append('file', $('input[type=file]')[0].files[0]);

  $.ajax({
    type: 'post',
    url: $(this).attr('action'),
    data: formData,
    processData: false,
    contentType: false
  })
  .done(function (response) {
    $('input').val('');
    $('textarea').val('');
    $('<div class="alert is-success">Your Message Was Sent! We\'ll be in touch.</div>').insertAfter(resForm);
    
    console.log('success' + response);
  })
  .fail(function (data) {
    $('input').val('');
    $('textarea').val('');
    $('<div class="alert is-error">Oh no! Something went wrong, try again.</div>').insertAfter(resForm);
    
    console.log('fail' + data);
  })

});


//Google Maps

//footer map
var map = new GMaps({
    div:'#map',
    disableDefaultUI: true,
    lat:42.294381,
    lng: -82.636276,
    styles: [
            {
              featureType: 'water',
              elementType: 'geometry.fill',
              stylers: [
                { color: '#d8d8d8' }
              ]
            }, {
              featureType: 'landscape',
              elementType: 'all',
              stylers: [
                { color: '#f5f5f5' }
              ]
            }, {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                { color: '#ffffff' }
              ]
            }, {
              featureType: 'poi',
              elementType: 'all',
              stylers: [
                { "visibility": "off" }
              ]
            }
          ]
});

map.addMarker({
    lat:42.294487,
    lng: -82.625524,
    icon: "assets/img/map-marker.png"
});


if ($('#contactMap').length != 0) {
  //contact map
  var contactMap = new GMaps({
      div:'#contactMap',
      disableDefaultUI: true,
      lat:42.294487,
      lng: -82.625524,
      styles: [
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [
                  { color: '#d8d8d8' }
                ]
              }, {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [
                  { color: '#f5f5f5' }
                ]
              }, {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                  { color: '#ffffff' }
                ]
              }, {
                featureType: 'poi',
                elementType: 'all',
                stylers: [
                  { "visibility": "off" }
                ]
              }
            ]
  });

  contactMap.addMarker({
      lat:42.294487,
      lng: -82.625524,
      icon: "assets/img/contact-map-marker.png"
  });
}




// scroll to top
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});



// home page photo slider
$('.photos-preview').slick({
  centerMode:true,
  slidesToShow:3,
  autoplaySpeed:6000,
  autoplay:true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

$('.slick-dots button').empty();
$('.slick-prev').html("<i class=\"fa fa-long-arrow-left\"></i>");
$('.slick-next').html("<i class=\"fa fa-long-arrow-right\"></i>");



// gallery filter

var galleryButtons = document.getElementsByClassName('gallery-cat');

for (var i = 0; i < galleryButtons.length; i++) {
  galleryButtons[i].addEventListener('click', function(){
    $('button.is--active').removeClass('is--active');
    $(this).addClass('is--active');
  })
}

$('button[data-category]').click(function() {
  var thisButton = $(this).attr('data-category');
  var photos = document.getElementsByClassName('all');

  for (var a = 0; a < photos.length; a++) {
    $(photos[a]).parent().hide();
    if (!$(photos[a]).hasClass(thisButton)) {
      $(photos[a]).parent().css('display', 'none');
    } else {
      $(photos[a]).parent().fadeIn('slow');
      $(photos[a]).parent().css('display', 'block');

    }
  }
});