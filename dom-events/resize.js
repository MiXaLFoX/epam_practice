
function showResizedDimensions() {
  const width = window.outerWidth;
  const height = window.outerHeight;
  console.log(`Window size: width = "${width}", height="${height}`);
}

window.addEventListener('resize', showResizedDimensions);