import EventEmitter from "events";
import $ from "jquery";

export default class Fullscreen extends EventEmitter {
  constructor(element) {
    super();

    this.$element = $(element);
    this.element = this.$element.get(0);

    $(document)
      .on("fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", this.fullscreenChange.bind(this))
      .on("fullscreenerror webkitfullscreenerror mozfullscreenerror msfullscreenerror", this.fullscreenError.bind(this));

    setTimeout(() => {
      if (!Fullscreen.isSupported) {
        this.emit("unsupported");
      }
    }, 0);
  }

  requestFullscreen() {
    const element = this.element;

    if (element.requestFullscreen) {
      return element.requestFullscreen();
    } else if (element.webkitRequestFullscreen)  {
      return element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      return element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      return element.msRequestFullscreen();
    }
  }

  fullscreenChange(e) {
    const isActive = this.isActive;
    this.emit("change", isActive, e);
    this.emit("fullscreenchange", isActive, e);
  }

  fullscreenError(e) {
    const err = new Error("fullscreen failed");
    this.emit("error", err, e);
    this.emit("fullscreenerror", err, e);
  }

  get isActive() {
    return Fullscreen.fullscreenElement === this.element;
  }

  static exitFullscreen() {
    if (document.exitFullscreen) {
      return document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      return document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      return document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      return document.msExitFullscreen();
    }
  }

  static get fullscreenElement() {
    return document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement ||
      null;
  }

  static get fullscreenEnabled() {
    return document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled ||
      false;
  }

  static get isSupported() {
    return Fullscreen.fullscreenEnabled;
  }
}

export { Fullscreen };
