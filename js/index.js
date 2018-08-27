'use strict';

const dingDong = (event) => {
  console.log('DONG!');
};

(function($) {
	
	// $ Works! You can test it with next line if you like
  // console.log($);
  console.log('hello world');

  $(document).on('click', '.blog-post-dinger', dingDong);
	
})( jQuery );