# imagemin-gif2webp [![Build Status](https://travis-ci.org/imagemin/imagemin-gif2webp.svg?branch=master)](https://travis-ci.org/imagemin/imagemin-gif2webp)

> Gif2webp imagemin plugin


## Install

```
$ npm install --save imagemin-gif2webp
```


## Usage

```js
const imagemin = require('imagemin');
const imageminGif2webp = require('imagemin-gif2webp');

imagemin(['images/*.gif'], 'build/images', {
	use: [
		imageminGif2webp({quality: 50})
	]
}).then(() => {
	console.log('Images optimized');
});
```


## API

### imageminGif2webp([options])(buffer)

#### options

##### lossy

Type: `boolean`<br>
Default: `false`

Encode image using lossy compression.

##### mixed

Type: `boolean`<br>
Default: `false`

For each frame in the image, pick lossy or lossless compression heuristically.

##### quality

Type: `number`<br>
Default: `75`

Quality factor between `0` and `100`.

##### method

Type: `number`<br>
Default: `4`

Specify the compression method to use, between `0` (fastest) and `6` (slowest).

##### minimize

Type: `boolean`<br>
Default: `false`

Minimize output size. Lossless compression by default; can be combined with `quality`, `method`, `lossy` or `mixed` options.

##### kmin

Type: `number`<br>

Min distance between key frames.

##### kmax

Type: `number`<br>

Max distance between key frames.

##### filter

Type: `number`<br>

Filter strength between `0` (off) and `100`.

##### metadata

Type: `string`<br>
Default: `xmp`

Comma separated list of metadata to copy from the input to the output if present. Valid values: `all`, `none`, `icc`, `xmp`.

##### multiThreading

Type: `boolean`<br>
Default: `false`

Use multi-threading if available.

#### buffer

Type: `buffer`

Buffer to optimize.


## License

MIT © [imagemin](https://github.com/imagemin)
