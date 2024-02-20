$(function () {
    trenCung = $('nav').offset().top;
     $('.arrow-up').click(function () {
       $('body,html').animate({ scrollTop:trenCung });
     })
   })

