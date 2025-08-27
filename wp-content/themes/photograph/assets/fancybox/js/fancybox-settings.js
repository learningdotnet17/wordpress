jQuery( function() {
	// Configure FancyBox for standard gallery images
	jQuery('[data-fancybox="gallery"], [data-fancybox="post-gallery"]').fancybox({
		animationDuration: 700,
		transitionEffect: 'slide',
		transitionDuration: 900,
		idleTime: 3,
		buttons: [
	        "zoom",
	        'slideShow',
	        'fullScreen',
	        "thumbs",
	        "close"
	    ]
	});
	
	// Configure FancyBox for all photo galleries
	jQuery('[data-fancybox="lighthouse-gallery"], [data-fancybox="flowers-gallery"], [data-fancybox="national-parks-gallery"], [data-fancybox="moon-gallery"], [data-fancybox="city-gallery"], [data-fancybox="sunsets-gallery"], [data-fancybox="prints-gallery"], [data-fancybox="night-gallery"], [data-fancybox="long-exposure-gallery"]').fancybox({
		animationDuration: 700,
		transitionEffect: 'slide',
		transitionDuration: 900,
		idleTime: 3,
		buttons: [
	        "zoom",
	        'slideShow',
	        'fullScreen',
	        "thumbs",
	        "close"
	    ],
		// Group all images in the same gallery together
		loop: true,
		thumbs: {
			autoStart: true
		},
		// Show captions and image info
		caption: function(instance, item) {
			return item.opts.caption || '';
		},
		// Image counter
		infobar: true,
		// Enable keyboard navigation
		keyboard: true
	});
});