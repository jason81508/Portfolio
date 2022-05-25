$(document).ready(function() {
    $('.nav-toggler').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });
 });