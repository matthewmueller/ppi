/**
 * Export `ppi`
 */

module.exports = ppi;

/**
 * Units
 *
 * (pixels / unit) * (units / inch) = pixels / inch
 */

var units = {
  meters: 0.0254,
  inches: 1,
}

/**
 * Initialize `ppi`
 *
 * @param {Object} exif
 * @return {Number|Boolean}
 */

function ppi(exif) {
  // metric
  var unit = exif['resolution unit'] || exif['pixel units'];
  if (!unit) return false;
  var ratio = units[unit.toLowerCase()];
  if (!ratio) return false;

  // x,y resolution
  if (exif['x resolution'] && exif['y resolution']) {
    var x = +exif['x resolution'];
    var y = +exif['y resolution'];

    // arbitrary avg, should normally be equal
    var res = (x + y) / 2;
    return Math.round(res * ratio);
  }

  // pixels per unit x,y
  if (exif['pixels per unit x'] && exif['pixels per unit y']) {
    var x = +exif['pixels per unit x'];
    var y = +exif['pixels per unit y'];

    // arbitrary avg, should normally be equal
    var res = (x + y) / 2;
    return Math.round(res * ratio);
  }

  return false;
}
