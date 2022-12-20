// $(function() {
//     $('.list-group-item').on('click', function() {
//       $('.glyphicon', this)
//         .toggleClass('glyphicon-chevron-right')
//         .toggleClass('glyphicon-chevron-down');
//     });
// });

// $(function() {
//     $('.list-group-item').on('click', function() {
//       $('.bi', this)
//         .toggleClass('bi-chevron-right')
//         .toggleClass('bi-chevron-down');
//     });
// });
$(function() {
        
  $('.list-group-item').on('click', function() {
    $('.bi', this)
      .toggleClass('bi-chevron-right')
      .toggleClass('bi-chevron-down');
  });

});

// document.querySelector(function() {
//   document.querySelector('.list-group-item').addEventListener('click', function() {
//     document.querySelector('.bi', this)
//     .classList.toggle('bi-chevron-right')
//     .classList.toggle('bi-chevron-down');
//   });
// });

$(document).ready(function(){

  if($('.brands_slider').length)
       {
           var brandsSlider = $('.brands_slider');

           brandsSlider.owlCarousel(
           {
               loop:true,
               autoplay:true,
               autoplayTimeout:5000,
               nav:false,
               dots:false,
               autoWidth:true,
               items:8,
               margin:42
           });

           if($('.brands_prev').length)
           {
               var prev = $('.brands_prev');
               prev.on('click', function()
               {
                   brandsSlider.trigger('prev.owl.carousel');
               });
           }

           if($('.brands_next').length)
           {
               var next = $('.brands_next');
               next.on('click', function()
               {
                   brandsSlider.trigger('next.owl.carousel');
               });
           }
       }


   });