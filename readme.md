# imagemin-gif2webp

> Gif2webp imagemin plugin

## Install

```
$ npm install --save imagemin-gif2webp
```

## Usage

```js
const imagemin = require('imagemin');
const imageminGif2webp = require('imagemin-gif2webp');

(async () => {
	await imagemin(['images/*.gif'], {
		destination: 'build/images',
		plugins: [
			imageminGif2webp({quality: 50})
		]
	});

	console.log('Images optimized');
})();
```

## API

### imageminGif2webp(options?)(buffer)

#### options

##### lossy

Type: `boolean`\
Default: `false`

Encode image using lossy compression.

##### mixed

Type: `boolean`\
Default: `false`

For each frame in the image, pick lossy or lossless compression heuristically.

##### quality

Type: `number`\
Default: `75`

Quality factor between `0` and `100`.

##### method

Type: `number`\
Default: `4`

Specify the compression method to use, between `0` (fastest) and `6` (slowest).

##### minimize

Type: `boolean`\
Default: `false`

Minimize output size. Lossless compression by default; can be combined with `quality`, `method`, `lossy` or `mixed` options.

##### kmin

Type: `number`

Min distance between key frames.

##### kmax

Type: `number`

Max distance between key frames.

##### filter

Type: `number`

Filter strength between `0` (off) and `100`.

##### metadata

Type: `string`\
Default: `xmp`

Comma separated list of metadata to copy from the input to the output if present. Valid values: `all`, `none`, `icc`, `xmp`.

##### multiThreading

Type: `boolean`\
Default: `false`

Use multi-threading if available.

#### buffer

Type: `buffer`

Buffer to optimize.
