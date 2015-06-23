// IE shim
var textProperty = document.createElement('div').textContent !== undefined ?
  'textContent' :
  'innerText';

function isOverflowing (domElement) {
  var visibleHeight = domElement.clientHeight || domElement.offsetHeight;
  return domElement.scrollHeight - visibleHeight >= 1;
}

module.exports = function truncate (domElement) {
  if (!domElement) {
    return;
  }

  if (isOverflowing(domElement)) {
    domElement.title = domElement[textProperty];
  }

  while (isOverflowing(domElement)) {
    domElement[textProperty] =
      domElement[textProperty].replace(/(.|\s)(\.\.\.)?$/, '...');
  }

  return domElement;
};
