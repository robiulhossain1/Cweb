$(document).ready(function(){
    $('.venobox').venobox({
        spinner: 'wandering-cubes',
        spinColor: 'tomato',
        arrowsColor: 'green',
        closeBackground: 'black',
        closeColor: 'white',
        share: ['facebook', 'twitter', 'linkedin', 'pinterest', 'download']
    });

    $('.test-slide').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        nextArrow: '<i class="fas fa-chevron-right right_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left left_arrow"></i>'
      });
});
// slick carousel ends

// $navOffset=$('header').offset().top;

// $(window).scroll(function(){
//     $scrolling= $(this).scrollTop();
//     if($scrolling > $navOffset){
//         $('header').addClass('nav_fixed');
//     }
//     else{
//         $('header').removeClass('');
//     }
//     if($scrolling > 700){
//         $('.gotopbtn').slideDown();
//     }
//     else{
//         $('.gotopbtn').slideUp();
//     }
// });

// // go-top-button start

// $('.gotopbtn').click(function(){
//     $('html').animate({
//         scrollTop: 0
//     }, 1200);
// });


// jQuery('header').sticky({
//     outerWidth: true
//   });