
# ppi

  Find the PPI (pixels per inch) of an image.

## Example

```js
var PPI = require('ppi');
var parse = require('exif2');
var exif = parse('./photo.png');

var ppi = PPI(exif);
```

## API

### `ppi(exif)`

Determine the PPI of an image. If it cannot find the PPI, `ppi` returns `false`.

### Support

Parsing exif data is not trivial. There are many different formats and lots of pictures (especially those from the internet) do not have enough data to determine the PPI.

This library is a test-driven approach to determining the PPI on a variety of pictures. Right now this library tests the following image sources:

- screenshot from ubuntu
- screenshot from retina mac
- screenshot from windows
- screenshot from ipad 3
- photo from camera (leica)
- iphone 4 photo
- iphone 5s photo
- iphone 5s screenshot
- samsung s3
- ipad 3
- old internet photo

To test a photo from your device simply add it to `test/images`, run the tests with `make test`, then inspect the exif data inside `test/exif`. Hopefully there will be enough data to determine the PPI.

## TODO

Depending on what kind of computer the screenshot was taken on the PPI will change:

- Non-retina mac: 72 ppi
- Retina mac: 144 ppi
- Windows: 96 ppi
- Linux: 96 ppi (?)

We can provide sensible defaults for images that we know are taken on a specific computer

## Test

    make test

## License

(The MIT License)

Copyright (c) 2012 Matthew Mueller &lt;mattmuelle@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
