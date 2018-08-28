/* global $*/ 
'use strict';

// const dingDong = (event) => {
//   console.log('DONG!');
// };

const logEmail = (event) => {
  const email = $('#formEmail').val();
  $('#formEmail').val('');
  console.log(email);
};

(function($) {

  // const length = $('#left').height() - $('#sidebar').height();

  const length = $('#left').height() - $('#sidebar').height() + $('#left').offset().top;

  $(window).scroll(function () {

    const scroll = $(this).scrollTop();
    const height = $('#sidebar').height() + 'px';

    if (scroll < $('#left').offset().top) {

      $('#sidebar').css({
        'position': 'absolute',
        'top': '0'
      });

    } else if (scroll > length) {

      $('#sidebar').css({
        'position': 'absolute',
        'bottom': '0',
        'top': 'auto'
      });

    } else {

      $('#sidebar').css({
        'position': 'fixed',
        'top': '0',
        'height': height
      });
    }
  });

  // $(window).scroll(function () {
  //   const scroll = $(this).scrollTop();
  //   const height = $('#sidebar').height() + 'px';

  //   if(scroll <= 0) {
  //     $('#sidebar').css({
  //       'position': 'absolute',
  //       'top': '0'
  //     });
  //   } else if(scroll >= length) {
  //     $('#sidebar').css({
  //       'position': 'absolute',
  //       'bottom': '0',
  //       'top': 'auto'
  //     });
  //   } else {
  //     $('#sidebar').css({
  //       'position': 'fixed',
  //       'top': '300px'
  //     });
  //   }
  // });
	
  // Wrapper function for intializing jQuery $
  console.log('hello world');

  // $(document).on('click', '.blog-post-dinger', dingDong);
  $(document).on('click', '.footer-button', logEmail);
	
})( jQuery );