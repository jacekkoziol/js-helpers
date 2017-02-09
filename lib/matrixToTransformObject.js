// Get Transform values based on the matrix function
// @param matrix: getComputedStyle(target).getPropertyValue('transform')
function matrixToTransformObject(matrix) {
  let resultObj = {rotate: '', translate: '', translateX: 0, translateY:0 }
  let values, translateX, translateY;

  matrix = (matrix === 'none') ? 'matrix(0,0,0,0,0)' : matrix;
  values = matrix.match(/([-+]?[\d\.]+)/g);

  resultObj.rotate = (Math.round(
    Math.atan2(
      parseFloat(values[1]),
      parseFloat(values[0])) * (180/Math.PI)) || 0
  ).toString() + 'deg';

  translateX = values[5] ? values[4] : (values[4] ? values[4] : 0);
  translateY = values[5] ? values[5] : (values[4] ? values[4] : 0);

  resultObj.translate = values[5] ? values[4] + 'px, ' + values[5] + 'px' : (values[4] ? values[4] + 'px' : '');
  resultObj.translateX = parseFloat(translateX);
  resultObj.translateY = parseFloat(translateY);

  return resultObj;
}