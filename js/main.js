$(function () {
    'use strict';
   $(window).scroll(function (){
       var navbar = $('.navbar');
       if($(window).scrollTop() >= navbar.height()){
           navbar.addClass('sticky-nav')
       } else {
           navbar.removeClass('sticky-nav')
       }
   });
   
   // Switch tabs
   $('.tab-switch li').click(function () {
       $(this).addClass('selected').siblings().removeClass('selected');
       
       $('.tabs-section .tabs-content > div').hide(); 

       $($(this).data('class')).show();
   });
});
