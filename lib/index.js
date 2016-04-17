"use strict";

const ul = require("ul")
    , imageToAscii = require("image-to-ascii")
    ;

/**
 * imgToSvg
 * Convert the image pixels in SVG squares.
 *
 * @name imgToSvg
 * @function
 * @param {String} path The image path.
 * @param {Object} opts An object containing the following fields:
 *
 *  - `pxSize` (Number): The square size.
 *  - `margin` (Number): The margin between squares.
 *
 * @param {Object} options The image-to-ascii options.
 * @param {Function} cb The callback function.
 */
module.exports = function imgToSvg (path, opts, options, cb) {

    debugger
    if (typeof opts === "function") {
        options = {}
        cb = opts;
        opts = {};
    }

    if (typeof options === "function") {
        cb = options;
        options = {};
        opts = {};
    }

    opts = ul.merge(opts, {
        pxSize: 10
      , margin: 2
    });
    let outerSize = opts.pxSize + opts.margin;

    options = ul.deepMerge(options, {
        size_options: {
            px_size: {
                width: 1
            }
        }
      , stringify_fn: pixels => pixels.map((row, y) =>
            row.map((pixel, x) =>
                `<rect x="${x * outerSize}" y="${y * outerSize}" width="${opts.pxSize}" height="${opts.pxSize}" fill="rgb(${pixel.r}, ${pixel.g}, ${pixel.b})"></rect>`
            ).join("\n")
        ).join("\n")
    });


    imageToAscii(path, options, (err, converted, raw, img) => {
        if (err) { return cb(err); }
        cb(null, `<svg width="${img[0].length * outerSize}" height="${img.length * outerSize}">${converted}</svg>`);
    });
};
