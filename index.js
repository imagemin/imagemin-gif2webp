'use strict';
const execBuffer = require('exec-buffer');
const isGif = require('is-gif');
const gif2webp = require('gif2webp-bin');

module.exports = opts => buf => {
	opts = Object.assign({}, opts);

	if (!Buffer.isBuffer(buf)) {
		return Promise.reject(new TypeError('Expected a buffer'));
	}

	if (!isGif(buf)) {
		return Promise.resolve(buf);
	}

	const args = [];

	if (opts.lossy) {
		args.push('-lossy');
	}

	if (opts.mixed) {
		args.push('-mixed');
	}

	if (opts.quality) {
		args.push('-q', opts.quality);
	}

	if (opts.method) {
		args.push('-m', opts.method);
	}

	if (opts.minimize) {
		args.push('-min_size');
	}

	if (opts.kmin) {
		args.push('-kmin', opts.kmin);
	}

	if (opts.kmax) {
		args.push('-kmax', opts.kmax);
	}

	if (opts.filter) {
		args.push('-f', opts.filter);
	}

	if (opts.metadata) {
		args.push('-metadata', opts.metadata);
	}

	if (opts.multiThreading) {
		args.push('-mt');
	}

	args.push('-o', execBuffer.output, execBuffer.input);

	return execBuffer({
		input: buf,
		bin: gif2webp,
		args
	}).catch(err => {
		err.message = err.stderr || err.message;
		throw err;
	});
};
