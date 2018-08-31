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

const handleSidebarHighlight = () => {
  const scroll =$(this).scrollTop();

  const contentBlockOne = $('#contentBlockOne').offset().top - $('#contentBlockOne').height() - $('#masthead').height();

  // console.log('scroll position:', scroll);
  // console.log('contentBlockOne height:', contentBlockOne);

  if (scroll > contentBlockOne) {
    console.log('I\'ve passed the mark!');
  }

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

const handleDropdown = (e) => {
  e.preventDefault();

  console.log('you want fries with that?');

  if ($('#dropdownMenu').hasClass('dropdown-show')) {

    $('#dropdownMenu').removeClass('dropdown-show');
    $('html').removeClass('modal-open');

  } else {

    $('#dropdownMenu').addClass('dropdown-show');
    $('html').addClass('modal-open');
  }

};

(function($) {

  $(window).on('scroll', handleSidebarHighlight);
  $(window).on('scroll', handleSidebar);
  $(window).on('scroll', handleHeader);

  $(window).on('resize', handleResize);

  $(document).on('click', '.navbar-toggler', handleDropdown);

  // $(document).on('click', '.footer-button', logEmail);
	
})( jQuery );