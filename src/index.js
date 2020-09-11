
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }

  return Math.min(...array);
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  return Math.max(...array);
}

exports.avg = function avg (array) {

  if ( array === undefined || array.length === 0 ) {
    return 0; 
  } else {

    const max = array.reduce((sum, current) => sum + current, 0);
    const avg = max/array.length;

    return avg;

  }
 

}
