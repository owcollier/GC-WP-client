/* global $*/ 
'use strict';

// const dingDong = (event) => {
//   console.log('DONG!');
// };

// const logEmail = (event) => {
//   const email = $('#formEmail').val();
//   $('#formEmail').val('');
//   console.log(email);
// };

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
  const logoOffset = $('#headerLogo').offset().top;
  const logoHeight = $('#headerLogo').height();
  
  if (scroll < logoOffset + (logoHeight - 160)) {

    $('#masthead').removeClass('masthead-show');
    // console.log('hey', $('#headerLogo').offset().top);

  } else if (scroll > logoOffset + (logoHeight - 160)) {

    $('#masthead').addClass('masthead-show');

  }
};

const handleResize = () => {

  const scroll = $(this).scrollTop();

  if (scroll < $('#left').offset().top - 120) {

    $('#sidebar').css({
      'position': 'absolute',
      'top': '0'
    });

  }

  console.log('resizing!', scroll);

};

(function($) {

  $(window).on('scroll', handleSidebar);
  $(window).on('scroll', handleHeader);

  $(window).on('resize', handleResize);

  // $(document).on('click', '.footer-button', logEmail);
	
})( jQuery );