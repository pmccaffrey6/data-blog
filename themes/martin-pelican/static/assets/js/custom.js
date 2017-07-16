// Set output_png to center content
$(document).ready( function() {
  //center images
  var pngs = Array.from(document.getElementsByClassName("output_png"))
  pngs.map(function(elem) {elem.className += " row justify-content-center"})

  //also center html output such as tables and Bokeh charts
  var htmlElems = Array.from(document.getElementsByClassName("output_html"))
  htmlElems.map(function(elem) {elem.className += " row justify-content-center"})

  //also apply this to bk-root class for Bokeh plots
  var bkRoot = Array.from(document.getElementsByClassName("bk-root"))
  bkRoot.map(function(elem) {elem.className += " row justify-content-center"})
});
