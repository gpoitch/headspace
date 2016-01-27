# headspace.js [![Build Status](https://travis-ci.org/gdub22/headspace.svg)](https://travis-ci.org/gdub22/headspace)

Next generation web header UX.  This is similar to headroom.js, but different in areas I believed could be improved:

- Header initially scrolls naturally out of view as if it is static
- Header reappears fixed when scrolling up, hides when scrolling back down (if greater that scroll tolerance)
- Header can reappear when reaching bottom of the document
- Header can reappear if hovering near the top
- Interaction/tolerance should match closely to mobile safari's chrome
- Minimal footprint, more opinionated

Sites like [medium.com](http://medium.com), [romper.com](http://romper.com), [teehan + lax](http://www.teehanlax.com/) deploy a similar technique

## Demo
`demo.html` TODO: link

## Install
```shell
npm install headspace
```

## Usage
```js
// new Headspace(element, options)

// Basic example:
var headspace = new Headspace(document.querySelector('header'))

// Advanced example with options:
Headspace(document.querySelector('header'), { // can use factory method instead of `new`
  startOffset: 90,                            // default: height of element
  tolerance: 5,                               // default: 8
  showAtBottom: false,                        // default: true
  classNames: {
    base: 'custom',                           // default: 'headspace'
    fixed: 'custom--fixed',                   // default: 'headspace--fixed'
    hidden: 'custom--hidden'                  // default: 'headspace--hidden'
  }
})
```
**Base css:**
To get started quickly with the minimal amount of css, copy contents of `dist/headspace.css` to your project.  

## Browser support
Out of the box: Browsers that natively support [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) and [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) (Chrome, Safari, Firefox, IE 10+).  You can globally pollyfill them if needed, otherwise the code is structured so you can shim in support.

## Build
```shell
npm run build
```

## Test
```shell
npm test
```
