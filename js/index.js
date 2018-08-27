'use strict';

const dingDong = (event) => {
  console.log('DONG!');
};

const logEmail = (event) => {
  console.log('heyo');
}

(function($) {
	
	// Wrapper function for intializing jQuery $
  console.log('hello world');

  $(document).on('click', '.blog-post-dinger', dingDong);
  $(document).on('click', '.footer-button', logEmail);
	
})( jQuery );