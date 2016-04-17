"use strict";

const imgToSvg = require("../lib");

imgToSvg("https://octodex.github.com/images/jetpacktocat.png", (err, out) => {
    console.log(err || out);
    // <svg width="720" height="720"><rect x="0" y="0" width="10" height="10" fill="rgb(0, 0, 0)"></rect>
    // <rect x="12" y="0" width="10" height="10" fill="rgb(0, 0, 0)"></rect>
    // <rect x="24" y="0" width="10" height="10" fill="rgb(0, 0, 0)"></rect>
    // ...
    // <rect x="696" y="708" width="10" height="10" fill="rgb(0, 0, 0)"></rect>
    // <rect x="708" y="708" width="10" height="10" fill="rgb(0, 0, 0)"></rect></svg>
});
