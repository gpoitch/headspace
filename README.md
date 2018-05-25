# headspace.js [![Build Status](https://travis-ci.org/gpoitch/headspace.svg)](https://travis-ci.org/gpoitch/headspace)

Next generation web header UX.  This is similar to [headroom.js](https://github.com/WickyNilliams/headroom.js), but different in areas I believe could be improved:

- Header initially scrolls naturally out of view as if it is static
- Header reappears fixed when scrolling up, hides when scrolling back down (if greater that scroll tolerance)
- Header can reappear when reaching bottom of the document
- Header can reappear if hovering near the top
- Interaction/tolerance should match closely to mobile safari's chrome
- Minimal footprint, more opinionated

Sites like [medium.com](http://medium.com), [teehan + lax](http://www.teehanlax.com/) deploy a similar technique

## Demo
[demo.html](https://rawgit.com/gpoitch/headspace/master/demo.html)

## Install
```shell
npm install headspace --save
```

## Usage
```js
// Basic example:
const headspace = Headspace(document.querySelector('header'))

// Advanced example with options:
Headspace(document.querySelector('header'), { // can use factory method or `new Headspace`
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
Out of the box: Chrome 24+, Firefox 23+, Safari 7+, IE 10+  
AKA browsers that natively support [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) and [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) 

You can globally pollyfill them if needed, otherwise the code is structured so you can manually shim-in support.  
`Headroom.isSupported()` will check if it can be used out of the box on the current browser/environment

## Build
```shell
npm run build
```

## Test
```shell
npm test
```
