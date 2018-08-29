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

const handleSidebar = () => {

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

const handleHeader = () => {
  const scroll = $(this).scrollTop();
  
  if (scroll < $('#headerLogo').offset().top) {
    $('#masthead').addClass('hidden');
    console.log('hey', $('#headerLogo').offset().top);
  }
};

const handleScroll = (handleSidebar, handleHeader) => {
  handleSidebar();
  handleHeader();
};

(function($) {

  $(window).on('scroll', handleSidebar);
  $(window).on('scroll', handleHeader);

  $(document).on('click', '.footer-button', logEmail);
	
})( jQuery );