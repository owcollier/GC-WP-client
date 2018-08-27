'use strict';

const dingDong = (event) => {
  console.log('DONG!');
};

(function($) {
	
	// Wrapper function for intializing jQuery $
  console.log('hello world');

  $(document).on('click', '.blog-post-dinger', dingDong);
	
})( jQuery );