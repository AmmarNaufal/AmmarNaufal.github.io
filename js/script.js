// navbar
$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);

  //parallax jumbotron bg
  var winScroll = $(this).scrollTop();
  $('#jumbotron').css({
    'transform': 'translate(0, '+ winScroll / -30 +'px)'
  });
});      


// scroll halaman
$('.page-scroll').on('click', function(e) {
  var tujuan = $(this).attr('href');
  var elemenTujuan = $(tujuan);
  // console.log(tujuan);
  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 50
  }, 2000, 'easeInOutBack');
  e.preventDefault();
});

//tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({
      animation: true,
      delay: {show: 100, hidden: 0}
    });
  });

//copy nomer WA
function copyNomer(text){
  let textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  console.log(text);
  
  // ganti tooltip
  $('#salin').tooltip('hide')
      .attr('data-original-title', 'Copied')
      .tooltip('show');
  console.log('ok');

  $(".nomerWa").hover(function(){
      $('#salin').tooltip('hide')
          .attr('data-original-title', 'Copy')
          .tooltip('show');
    }, function(){
      // $('#salin').tooltip('hide')
      //     .attr('data-original-title', 'Copy')
      //     .tooltip('show');
  });

}

// tooltip



