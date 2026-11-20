export function woo() {
  document
    .querySelectorAll(".button.product_type_simple")
    .forEach(function (button) {
      button.insertAdjacentHTML(
        "beforeend",
        ' <i class="bi bi-arrow-right"></i>',
      );
    });
}
