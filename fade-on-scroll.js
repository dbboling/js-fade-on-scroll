// Edit These Varibles
var fadeStart = 300,  // Pixels from the top at which fade will start
fadeUntil = 500,      // Pixels from the top at which fade will end
opacityStart = .8,    // Opacity at top of the page
opacityEnd = 1,       // Opacity at end of fade (as defined by fadeUntil variable)
fading = $('header'); // Element to fade, can be ID, class or tag

// Fixed Variables
opacityDifference = opacityEnd-opacityStart;  // Difference between opacityEnd and opacityStart
fadeMultiplier = fadeStart/fadeUntil,         // Ratio of fadeStart to fadeUntil

$(window).bind('scroll', function(){    // Begin scroll function
  var offset = $(document).scrollTop()  // Set offset variable to current pixel distance from top of document
  ,opacity=0;                           // Initialize opacity at 0
  
  if( offset<=fadeStart ){ opacity=opacityStart; }    // If user hasn't scrolled to fadeStart point, set opacity to opacityStart
  else if(offset<=fadeUntil){   // If user has scrolled between fadeStart and fadeEnd points, calculate opacity
    opacity=opacityStart+((offset/fadeUntil-fadeMultiplier)*(1/(1-fadeMultiplier)))*opacityDifference;
  }
  else if(offset>fadeUntil){ opacity=opacityEnd; }   // If user has scrolled past fadeEnd point, set opacity to opacityEnd
  fading.css('opacity',opacity);  // Inject opacity to element specified in fading variable
});
