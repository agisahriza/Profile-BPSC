// Parralax JS
if(window.matchMedia('(min-width: 992px)').matches) {
  $(window).on('load', function() {
    // Jumbotron
    $('.h1-jumbotron').addClass('muncul');
    $('.p-jumbotron').addClass('muncul');
    $('.svg1').addClass('muncul');
    $('.gambar').addClass('muncul');

    $(window).scroll(function() {
      let nilaiScroll = $(this).scrollTop();
      
      // Fasilitias
      if(nilaiScroll > $('.fasilitas').offset().top - 450) {
        $('.h3-fasilitas').addClass('muncul');
    
        $('figure .img-fasilitas').each(function(e) {
          setTimeout(function() {
            $('figure .img-fasilitas').eq(e).addClass('muncul');
            $('figure .fig-fasilitas').eq(e).addClass('muncul');
          }, 350*e);
        }); 
      }
    });
  });
} else {
  $(window).on('load', function() {
    $('.h1-jumbotron').addClass('muncul');
    $('.p-jumbotron').addClass('muncul');
    
    $(window).scroll(function() {
      let nilaiScroll = $(this).scrollTop();

      if(nilaiScroll > $('.gambar').offset().top - 450) {
        $('.svg1').addClass('muncul');
        $('.gambar').addClass('muncul');
      }

      if(nilaiScroll > $('.fasilitas').offset().top - 450) {
        $('.h3-fasilitas').addClass('muncul');
        
        $('figure .img-fasilitas').each(function(e) {
          if (nilaiScroll > $('figure .img-fasilitas').eq(e).offset().top - 550) {
            $('figure .img-fasilitas').eq(e).addClass('muncul');
            $('figure .fig-fasilitas').eq(e).addClass('muncul');
          }
        }); 
      }
    });
  });
}

$(window).scroll(function() {
  let nilaiScroll = $(this).scrollTop();
  
  // Lokasi dan Waktu
  if(nilaiScroll > $('.h3-lokasi').offset().top - 450) {
    $('.h3-lokasi').addClass('muncul');
    $('.p-lokasi').addClass('muncul');
    $('.icon-lokasi').addClass('muncul');
  }

  if(nilaiScroll > $('.h3-waktu').offset().top - 450) {
    $('.h3-waktu').addClass('muncul');
    $('.p-waktu').addClass('muncul');
    $('.icon-waktu').addClass('muncul');
  }

  if(nilaiScroll > $('.carousel').offset().top - 450) {
    $('.carousel').addClass('muncul');
    
  }


});
