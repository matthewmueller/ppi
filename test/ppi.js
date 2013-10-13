/**
 * Module Dependencies
 */

var ppi = require('../');
var assert = require('better-assert');
var exifpath = __dirname + '/exif/';
var imagepath = __dirname + '/images/';

var fs = require('fs');
var path = require('path');
var readdir = fs.readdirSync;
var mkdir = require('mkdirp');
var write = fs.writeFileSync;
var basename = path.basename;
var extname = path.extname;
var exif = require('exif2');

describe('ppi(exif)', function() {

  describe('should find ppi of:', function() {
    it ('retina screenshot from mac', function() {
      var exif = require(exifpath + 'retina-screenshot-from-mac.json');
      assert(ppi(exif) == 144)
    });

    it ('photo from an iphone 4', function() {
      var exif = require(exifpath + 'photo-from-iphone-4.json');
      assert(ppi(exif) == 72)
    });

    it ('photo from an iphone 5s', function() {
      var exif = require(exifpath + 'photo-from-iphone-5s.json');
      assert(ppi(exif) == 72)
    });

    it ('photo from an ipad 3', function() {
      var exif = require(exifpath + 'photo-from-ipad-3.json');
      assert(ppi(exif) == 72)
    });

    it ('photo from an samsung s3', function() {
      var exif = require(exifpath + 'photo-from-samsung-s3.json');
      assert(ppi(exif) == 72)
    });

    it ('photo from a camera (leica)', function() {
      var exif = require(exifpath + 'photo-from-leica-camera.json');
      assert(ppi(exif) == 180)
    });
  })

  describe('should not find ppi of:', function() {
    it ('old photo from the internet', function() {
      var exif = require(exifpath + 'old-internet-photo.json');
      assert(ppi(exif) == false)
    });

    it ('screenshot from ubuntu', function() {
      var exif = require(exifpath + 'screenshot-from-ubuntu.json');
      assert(ppi(exif) == false)
    });

    it ('screenshot from ipad 3', function() {
      var exif = require(exifpath + 'retina-screenshot-from-ipad-3.json');
      assert(ppi(exif) == false)
    });

    it ('screenshot from iphone 5s', function() {
      var exif = require(exifpath + 'retina-screenshot-from-iphone-5s.json');
      assert(ppi(exif) == false)
    });
  })

  before(function(done) {
    mkdir(exifpath);
    var imgs = readdir(imagepath);
    var pending = imgs.length;

    imgs.forEach(function(img) {
      if ('.' === img[0]) return next();
      exif(imagepath + img, function(err, ex) {
        if (err) throw err;
        var file = basename(img, extname(img));
        write(exifpath + file + '.json', JSON.stringify(ex, true, 2), 'utf8');
        next();
      });
    });

    function next() {
      if (!--pending) done();
    }
  });
});
