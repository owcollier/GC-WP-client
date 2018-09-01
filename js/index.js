/* global $*/ 
'use strict';

const handleSidebarNavigation = (event) => {

  const scrollPositions = event.data.scrollPositions;
  const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  const el = $(event.target);
  const id = el.closest('li').attr('id');

  switch (id) {
  case 'sidebarOne':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockOne + 50
    }, 500);
    break;
  case 'sidebarTwo':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockTwo + 50
    }, 500);
    break;
  case 'sidebarThree':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockThree + 50
    }, 500);
    break;
  case 'sidebarFour':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockFour + 50
    }, 500);
    break;
  case 'sidebarFive':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockFive + 50
    }, 500);
    break;
  case 'sidebarSix':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockSix + 50
    }, 500);
    break;
  case 'sidebarSeven':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockSeven + 50
    }, 500);
    break;
  case 'sidebarEight':
    $('html, body').animate({
      scrollTop: scrollPositions.contentBlockEight + 50
    }, 500);
    break;
  default:
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 500);
    
  }
  
};

const handleSidebarHighlight = (event) => {
  const scroll =$(this).scrollTop();
  const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

  const scrollPositions = event.data.scrollPositions;

  // let currentFocus = {
  //   focus: ''
  // };

  if (scroll > scrollPositions.contentBlockOne && scroll < scrollPositions.contentBlockTwo) {

    // if (currentFocus.focus !== '#sidebarOne') {
    //   $(currentFocus.focus).removeClass('sidebar-focus');
    //   currentFocus.focus = '#sidebarOne';
    // }

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarOne').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockTwo && scroll < scrollPositions.contentBlockThree) {

    // if (currentFocus.focus !== '#sidebarTwo') {
    //   $(currentFocus.focus).removeClass('sidebar-focus');
    //   currentFocus.focus = '#sidebarTwo';
    // }

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarTwo').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockThree && scroll < scrollPositions.contentBlockFour) {

    // if (currentFocus !== '#sidebarThree') {
    //   $(currentFocus).removeClass('sidebar-focus');
    //   currentFocus = '#sidebarThree';
    // }

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarThree').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockFour && scroll < scrollPositions.contentBlockFive) {

    // if (currentFocus !== '#sidebarFour') {
    //   $(currentFocus).removeClass('sidebar-focus');
    //   currentFocus = '#sidebarFour';
    // }

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarFour').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockFive && scroll < scrollPositions.contentBlockSix) {

    // if (currentFocus !== '#sidebarFive') {
    //   $(currentFocus).removeClass('sidebar-focus');
    //   currentFocus = '#sidebarFive';
    // }

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarFive').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockSix && scroll < scrollPositions.contentBlockSeven) {

    // if (currentFocus !== '#sidebarSix') {
    //   $(currentFocus).removeClass('sidebar-focus');
    //   currentFocus = '#sidebarSix';
    // }

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarSix').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockSeven && scroll < scrollPositions.contentBlockEight) {

    // if (currentFocus !== '#sidebarSeven') {
    //   $(currentFocus).removeClass('sidebar-focus');
    //   currentFocus = '#sidebarSeven';
    // }

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarSeven').addClass('sidebar-focus');

  } else if (scroll > scrollPositions.contentBlockEight && scrollBottom !== 0) {

    // if (currentFocus !== '#sidebarEight') {
    //   $(currentFocus).removeClass('sidebar-focus');
    //   currentFocus = '#sidebarEight';
    // }

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarEight').addClass('sidebar-focus');

  } else if (scrollBottom === 0) {

    // if (currentFocus !== '#sidebarContact') {
    //   $(currentFocus).removeClass('sidebar-focus');
    //   currentFocus = '#sidebarContact';
    // }

    $('.content-sidebar-li').removeClass('sidebar-focus');
    $('#sidebarContact').addClass('sidebar-focus');

  }
  
  // else if (scroll + $(window).height() / $(document).height() === 0) {
  //   console.log('Contact!');
  // }

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

(function($) {

  const STORE = {
    scrollPositions: {
      contentBlockOne: $('#contentBlockOne').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
      contentBlockTwo: $('#contentBlockTwo').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
      contentBlockThree: $('#contentBlockThree').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
      contentBlockFour: $('#contentBlockFour').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
      contentBlockFive: $('#contentBlockFive').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
      contentBlockSix: $('#contentBlockSix').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
      contentBlockSeven: $('#contentBlockSeven').offset().top - $('#contentBlockOne').height() - $('#masthead').height(),
      contentBlockEight: $('#contentBlockEight').offset().top - $('#contentBlockOne').height() - $('#masthead').height()
    }
  };

  // $('#contentBlockEight').offset().top - $('#contentBlockEight').height()

  $(window).on('scroll', STORE, handleSidebarHighlight);
  $(window).on('scroll', handleSidebar);
  $(window).on('scroll', handleHeader);

  $(window).on('resize', handleResize);

  $(document).on('click', '.navbar-toggler', handleDropdown);
  $(document).on('click', '.sidebar-link', STORE, handleSidebarNavigation);
	
})( jQuery );