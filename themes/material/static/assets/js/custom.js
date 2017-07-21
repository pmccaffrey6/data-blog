// Set output_png to center content
$(document).ready( function() {
  //center and autoscale images
  var pngs = Array.from(document.getElementsByClassName("output_png"));

  pngs.map(function(elem) {
    $(elem).addClass("container");
  });

  $('.output_png img').map(function(k,v) { $(v).addClass('img-fluid mx-auto d-block') } );

  //also center html output such as tables and Bokeh charts
  var htmlElems = Array.from(document.getElementsByClassName("output_html"));
  htmlElems.map(function(elem) {elem.className += " row justify-content-center"});

  //set table class
  $('table').removeClass('dataframe').prop('border', 0).addClass('table table-striped table-hover');

  //also apply this to bk-root class for Bokeh plots
  var bkRoot = Array.from(document.getElementsByClassName("bk-root"));
  bkRoot.map(function(elem) {elem.className += " row justify-content-center"});

  // nanobar.js
  var options = {
    classname: 'nanobar',
    id: 'article-nanobar',
  };

  var nanobar = new Nanobar( options );

  var winHeight = $(window).height(),
  docHeight = $(document).height();
  max = docHeight - winHeight;

  //nanobar.go( 30 ); // size bar 30%
  $(document).on('scroll', function() {
    value = $(window).scrollTop();
    nanobar.go((value/max)*100);
  });

  /*MathJax.Hub.Config({
   tex2jax: {
    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
    processEscapes: true
  },
  "HTML-CSS": {
    linebreaks: { automatic: true },
    styles: {
      ".MathJax_Display": {
        "text-align": "center"
      }
    }
  }
  });
});
*/
});

// Custom MathJax Re-render
$(document).ready( function() {
  MathJax = {
    jax: ["input/TeX","output/CommonHTML"],
    CommonHTML: { linebreaks: {automatic: true}},
    SVG: { linebreaks: {automatic: true}},
    "HTML-CSS": { linebreaks: {automatic: true}},
    extensions: ["tex2jax.js", "asciimath2jax.js", "mml2jax.js", "MathMenu.js", "MathZoom.js"],
    TeX: {
      extensions: ["AMSmath.js", "AMSsymbols.js", "autoload-all.js"]
    },
    tex2jax: {
      inlineMath: [
        ['$', '$'],
        ["\\(", "\\)"]
      ],
      processEscapes: true
    }
  };

  (function(d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function() {
      // remote script has loaded
    };
    script.src = 'https://cdn.mathjax.org/mathjax/latest/MathJax.js';
    d.getElementsByTagName('head')[0].appendChild(script);
  }(document));

});
