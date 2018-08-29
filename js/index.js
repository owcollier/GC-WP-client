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

const scrollSidebar = () => {

  

  const sidebarLength = $('#left').height() - $('#sidebar').height() + $('#left').offset().top;
  const scroll = $(this).scrollTop();
  const height = $('#sidebar').height() + 'px';

  if (scroll < $('#left').offset().top - 120) {

    $('#sidebar').css({
      'position': 'absolute',
      'top': '0'
    });

  } else if (scroll > sidebarLength) {

    $('#sidebar').css({
      'position': 'absolute',
      'bottom': '0',
      'top': 'auto'
    });

  } else {

    $('#sidebar').css({
      'position': 'fixed',
      'top': '120px',
      'height': height
    });
  }
};

(function($) {

  $(window).on('scroll', scrollSidebar);

  $(document).on('click', '.footer-button', logEmail);
	
})( jQuery );