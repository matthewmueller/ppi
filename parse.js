/**
 * Module Dependencies
 */

var fs = require('fs');
var path = require('path');
var readdir = fs.readdirSync;
var write = fs.writeFileSync;
var basename = path.basename;
var extname = path.extname;
var exif = require('exif2');

var images = __dirname + '/test/images/';
var exifs = __dirname + '/test/exif/';

var imgs = readdir(images);
imgs.forEach(function(img) {
  if ('.' === img[0]) return;
  exif(images + img, function(err, ex) {
    if (err) throw err;
    var file = basename(img, extname(img));
    write(exifs + file + '.json', JSON.stringify(ex, true, 2), 'utf8');
  });
});
