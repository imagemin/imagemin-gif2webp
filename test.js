import fs from 'fs';
import path from 'path';
import isWebP from 'is-webp';
import pify from 'pify';
import test from 'ava';
import m from './';

const fsP = pify(fs);

test('convert an image into a WebP', async t => {
	const buf = await fsP.readFile(path.join(__dirname, 'fixtures/test.gif'));
	const data = await m()(buf);

	t.true(data.length < buf.length);
	t.true(isWebP(data));
});

test('skip optimizing unsupported files', async t => {
	const buf = await fsP.readFile(path.join(__dirname, 'fixtures/test.bmp'));
	const data = await m()(buf);

	t.deepEqual(data, buf);
});
