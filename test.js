const {promisify} = require('util');
const fs = require('fs');
const path = require('path');
const isWebP = require('is-webp');
const test = require('ava');
const m = require('.');

const readFile = promisify(fs.readFile);

test('convert an image into a WebP', async t => {
	const buf = await readFile(path.join(__dirname, 'fixtures/test.gif'));
	const data = await m()(buf);

	t.true(data.length < buf.length);
	t.true(isWebP(data));
});

test('skip optimizing unsupported files', async t => {
	const buf = await readFile(path.join(__dirname, 'fixtures/test.bmp'));
	const data = await m()(buf);

	t.deepEqual(data, buf);
});
