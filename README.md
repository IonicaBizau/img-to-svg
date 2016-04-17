# img-to-svg [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/img-to-svg.svg)](https://www.npmjs.com/package/img-to-svg) [![Downloads](https://img.shields.io/npm/dt/img-to-svg.svg)](https://www.npmjs.com/package/img-to-svg) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Convert the image pixels in SVG squares.

This parse the image pixels, [`image-to-ascii`](https://github.com/IonicaBizau/image-to-ascii) is used.

[![img-to-svg](http://i.imgur.com/HZQqqLn.png)](#)

## :cloud: Installation
    
```sh
$ npm i --save img-to-svg
```

            
## :clipboard: Example

        

```js
const imgToSvg = require("img-to-svg");

imgToSvg("https://octodex.github.com/images/jetpacktocat.png", (err, out) => {
    console.log(err || out);
    // <svg width="720" height="720"><rect x="0" y="0" width="10" height="10" fill="rgb(0, 0, 0)"></rect>
    // <rect x="12" y="0" width="10" height="10" fill="rgb(0, 0, 0)"></rect>
    // <rect x="24" y="0" width="10" height="10" fill="rgb(0, 0, 0)"></rect>
    // ...
    // <rect x="696" y="708" width="10" height="10" fill="rgb(0, 0, 0)"></rect>
    // <rect x="708" y="708" width="10" height="10" fill="rgb(0, 0, 0)"></rect></svg>
});
```
    
## :memo: Documentation
        
### `imgToSvg(a, b)`
Convert the image pixels in SVG squares.

#### Params
- **Number** `a`: Param descrpition.
- **Number** `b`: Param descrpition.

#### Return
- **Number** Return description.

        
## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License
    
[MIT][license] © [Ionică Bizău][website]
    
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md