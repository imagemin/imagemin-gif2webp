'use strict';
const execBuffer = require('exec-buffer');
const isGif = require('is-gif');
const gif2webp = require('gif2webp-bin');

module.exports = options => buf => {
	options = {...options};

	if (!Buffer.isBuffer(buf)) {
		return Promise.reject(new TypeError('Expected a buffer'));
	}

	if (!isGif(buf)) {
		return Promise.resolve(buf);
	}

	const args = [];

	if (options.lossy) {
		args.push('-lossy');
	}

	if (options.mixed) {
		args.push('-mixed');
	}

	if (options.quality) {
		args.push('-q', options.quality);
	}

	if (options.method) {
		args.push('-m', options.method);
	}

	if (options.minimize) {
		args.push('-min_size');
	}

	if (options.kmin) {
		args.push('-kmin', options.kmin);
	}

	if (options.kmax) {
		args.push('-kmax', options.kmax);
	}

	if (options.filter) {
		args.push('-f', options.filter);
	}

	if (options.metadata) {
		args.push('-metadata', options.metadata);
	}

	if (options.multiThreading) {
		args.push('-mt');
	}

	args.push('-o', execBuffer.output, execBuffer.input);

	return execBuffer({
		input: buf,
		bin: gif2webp,
		args
	}).catch(error => {
		error.message = error.stderr || error.message;
		throw error;
	});
};
