/* global $*/ 
'use strict';

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

const handleSidebarNavigation = (event) => {

  const scrollPositions = {
    contentBlockOne: $('#contentBlockOne').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockTwo: $('#contentBlockTwo').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockThree: $('#contentBlockThree').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockFour: $('#contentBlockFour').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockFive: $('#contentBlockFive').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockSix: $('#contentBlockSix').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockSeven: $('#contentBlockSeven').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockEight: $('#contentBlockEight').offset().top - $('#contentBlockOne').height() - $('#masthead').height()
  };
  
  const el = $(event.target);
  const id = el.closest('li').attr('id');

  switch (id) {
  case 'sidebarOne':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockOne + 50
    }, 500, 'linear');
    break;
  case 'sidebarTwo':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockTwo + 50
    }, 500, 'linear');
    break;
  case 'sidebarThree':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockThree + 50
    }, 500, 'linear');
    break;
  case 'sidebarFour':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockFour + 50
    }, 500, 'linear');
    break;
  case 'sidebarFive':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockFive + 50
    }, 500, 'linear');
    break;
  case 'sidebarSix':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockSix + 50
    }, 500, 'linear');
    break;
  case 'sidebarSeven':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockSeven + 50
    }, 500, 'linear');
    break;
  case 'sidebarEight':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockEight + 50
    }, 500, 'linear');
    break;
  default:
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 500, 'linear'); 
  }

};

const handleSidebarHighlight = () => {

  const scroll =$(this).scrollTop();
  const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

  const scrollPositions = {
    contentBlockOne: $('#contentBlockOne').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockTwo: $('#contentBlockTwo').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockThree: $('#contentBlockThree').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockFour: $('#contentBlockFour').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockFive: $('#contentBlockFive').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockSix: $('#contentBlockSix').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockSeven: $('#contentBlockSeven').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
    contentBlockEight: $('#contentBlockEight').offset().top - $('#contentBlockOne').height() - $('#masthead').height()
  };

  if (scroll > scrollPositions.contentBlockOne && scroll < scrollPositions.contentBlockTwo) {

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarOne').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockTwo && scroll < scrollPositions.contentBlockThree) {

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarTwo').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockThree && scroll < scrollPositions.contentBlockFour) {

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarThree').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockFour && scroll < scrollPositions.contentBlockFive) {

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarFour').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockFive && scroll < scrollPositions.contentBlockSix) {

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarFive').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockSix && scroll < scrollPositions.contentBlockSeven) {

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarSix').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockSeven && scroll < scrollPositions.contentBlockEight) {

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarSeven').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockEight && scrollBottom !== 0) {

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarEight').addClass('sidebar-focus');

  } else if (scrollBottom === 0) {

    $('.content-sidebar-li').removeClass('sidebar-focus'); 
    $('#sidebarContact').addClass('sidebar-focus');

  }
};

const handleDropdown = (event) => {
  event.preventDefault();

  console.log('you want fries with that?');

  if ($('#dropdownMenu').hasClass('dropdown-show')) {

    $('#dropdownMenu').removeClass('dropdown-show');
    $('html').removeClass('modal-open');

  } else {

    $('#dropdownMenu').addClass('dropdown-show');
    $('html').addClass('modal-open');
  }
};

const handleDropdownNavigation = (event) => {

  const scrollPositions = {
    contentBlockOne: $('#contentBlockOne').offset().top - $('#masthead').height() - 100,
    contentBlockTwo: $('#contentBlockTwo').offset().top - $('#masthead').height() - 100,
    contentBlockThree: $('#contentBlockThree').offset().top - $('#masthead').height() - 100,
    contentBlockFour: $('#contentBlockFour').offset().top - $('#masthead').height() - 100,
    contentBlockFive: $('#contentBlockFive').offset().top - $('#masthead').height() - 100,
    contentBlockSix: $('#contentBlockSix').offset().top - $('#masthead').height() - 100,
    contentBlockSeven: $('#contentBlockSeven').offset().top - $('#masthead').height() - 100,
    contentBlockEight: $('#contentBlockEight').offset().top - $('#masthead').height() - 100
  };
  
  const el = $(event.target);
  const id = el.closest('li').attr('id');

  switch (id) {
  case 'dropdownOne':
    $('#dropdownMenu').removeClass('dropdown-show');
    $('html').removeClass('modal-open');
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockOne + 50
    }, 500, 'linear');
    break;
  case 'dropdownTwo':
    $('#dropdownMenu').removeClass('dropdown-show');
    $('html').removeClass('modal-open');
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockTwo + 50
    }, 500, 'linear');
    break;
  case 'dropdownThree':
    $('#dropdownMenu').removeClass('dropdown-show');
    $('html').removeClass('modal-open');
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockThree + 50
    }, 500, 'linear');
    break;
  case 'dropdownFour':
    $('#dropdownMenu').removeClass('dropdown-show');
    $('html').removeClass('modal-open');
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockFour + 50
    }, 500, 'linear');
    break;
  case 'dropdownFive':
    $('#dropdownMenu').removeClass('dropdown-show');
    $('html').removeClass('modal-open');
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockFive + 50
    }, 500, 'linear');
    break;
  case 'dropdownSix':
    $('#dropdownMenu').removeClass('dropdown-show');
    $('html').removeClass('modal-open');
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockSix + 50
    }, 500, 'linear');
    break;
  case 'dropdownSeven':
    $('#dropdownMenu').removeClass('dropdown-show');
    $('html').removeClass('modal-open');
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockSeven + 50
    }, 500, 'linear');
    break;
  case 'dropdownEight':
    $('#dropdownMenu').removeClass('dropdown-show');
    $('html').removeClass('modal-open');
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockEight + 50
    }, 500, 'linear');
    break;
  default:
    $('#dropdownMenu').removeClass('dropdown-show');
    $('html').removeClass('modal-open');
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 500, 'linear'); 
  }

};

(function($) {

  // $('#contentBlockEight').offset().top - $('#contentBlockEight').height()

  $(window).on('scroll', handleSidebarHighlight);
  $(window).on('scroll', handleSidebar);
  $(window).on('scroll', handleHeader);

  $(window).on('resize', handleResize);

  $(document).on('click', '.navbar-toggler', handleDropdown);
  $(document).on('click', '.sidebar-link', handleSidebarNavigation);
  $(document).on('touchstart click', '.dropdown-link', handleDropdownNavigation);
	
})( jQuery );