
# ppi

  Find the PPI (pixels per inch) of an image.

## Example

```js
var parse = require('exif2');
var exif = parse('./photo.png');

var PPI = ppi(exif) || 72;
```

## API

### `ppi(exif)`

Determine the PPI of an image. If it cannot find the PPI, otherwise returning `false`.

### Support

Parsing exif data is not trivial. There are many different formats and lots of pictures (especially those from the internet) do not have enough data to determine the PPI.

This library is a test-driven approach to determining the PPI on a variety of pictures. Right now this library tests the following image sources:

- screenshot
- screenshot from retina computer
- photo from camera (leica)
- iphone 4 photo
- iphone 5s photo
- old internet photo that lacks exif

To test a photo from your device simply add it to `test/images`, run the tests with `make test`, then inspect the exif data inside `test/exif`. Hopefully there will be enough data to determine the PPI.

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
