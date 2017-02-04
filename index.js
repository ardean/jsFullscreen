import $ from "jquery";
import Fullscreen from "./src/index";

const $element = $(".rectangle");
const $info = $(".info");

if (!Fullscreen.isSupported) {
  $info
    .addClass("error")
    .text("fullscreen unsupported, please use another browser");
} else {
  const fullscreen = new Fullscreen($element);
  fullscreen
    .on("change", (isActive) => {
      if (isActive) {
        $element.addClass("active");
      } else {
        $element.removeClass("active");
      }

      $info.removeClass("error");
      $info.text(`fullscreen is ${isActive ? 'active' : 'not active'}`);
    }).on("error", (err) => {
      $info.addClass("error");
      $info.text(err.message);
    });

  $element.on("click", () => {
    fullscreen.requestFullscreen();
  });
}
