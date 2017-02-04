# jsFullscreen
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license-image]][license-url]

**WHATWG Fullscreen API Fallback**

[Demo](https://ardean.github.io/jsFullscreen/)

## Specification
[Fullscreen API, WHATWG](https://fullscreen.spec.whatwg.org/)

## Usage

I suggest you to use [jspm](http://jspm.io/) as your package manager.

```js
import Fullscreen from "jsfullscreen";

const fullscreen = new Fullscreen(document.body);

fullscreen.on("change", (isActive) => {
  console.log(`fullscreen is ${isActive ? 'active' : 'not active'}`);
});

fullscreen.element.addEventListener("click", () => {
  fullscreen.requestFullscreen();
});
```

### Directly in a browser

Please checkout the [index-dist.html](https://ardean.github.io/jsFullscreen/index-dist.html) file for direct usage in a browser.

## API

### Classes

- _Fullscreen_
  - **Constructor**(**Element** element) extends **[EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)**
  - **Members**
    - _requestFullscreen()_ => **Promise**
  - **Static Members**
    - _exitFullscreen()_ => **Promise**
  - **Properties**
    - _element_ => **Element**
    - _isActive_ => **Boolean**
  - **Static Properties**
    - _fullscreenElement_ => **Element**
    - _isSupported_ / _fullscreenEnabled_ => **Boolean**
  - **Events**
    - _change_ / _fullscreenchange_ => (**Boolean** _isActive_, **Event** _e_)
    - _error_ / _fullscreenerror_ => (**Error** _err_, **Event** _e_)
    - _unsupported_ => ()


## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/jsfullscreen.svg
[npm-url]: https://npmjs.org/package/jsfullscreen
[downloads-image]: https://img.shields.io/npm/dm/jsfullscreen.svg
[downloads-url]: https://npmjs.org/package/jsfullscreen
[license-image]: https://img.shields.io/npm/l/jsfullscreen.svg
[license-url]: LICENSE
