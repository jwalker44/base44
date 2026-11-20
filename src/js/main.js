console.log("intro");

import { general } from "./parts/general.js";
import { cover } from "./parts/cover.js";
import { tiers } from "./parts/tiers.js";
import { other } from "./parts/other.js";
import { footer } from "./parts/footer.js";

window.addEventListener("load", (event) => {
  console.log("LOADING");

  const screen = gsap.timeline();
  screen
    .to(".lds-ripple", {
      opacity: 0,
      duration: 0.5,
      ease: "power4.in",
    })
    .to(
      "#screen",
      {
        opacity: 0,
        duration: 2,
        ease: "power4.in",
        onComplete(e) {
          let screen = document.getElementById("screen");
          if (screen) {
            screen.style.display = "none";
          }
        },
      },
      0,
    );

  general();
  // introvideo();
  // getContent();
  cover();
  tiers();
  other();
  // letter();
  // lettertext();
  // grandchallenge();
  // frontiers();
  // fellows();
  // newgrandchallenge();
  // eac();
  // trends();
  // resaearch();
  // wealth();
  // ncgrowth();
  // scholars();
  // dean();
  // events();
  footer();

  //smoothScroll();
});
