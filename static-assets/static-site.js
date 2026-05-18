(function () {
  function message(event) {
    event.preventDefault();
    alert("This is a static preview of the original WordPress site. Forms are not connected here. Please call 718-375-WOOD or email office@tribecaflooring.com.");
  }
  document.addEventListener("submit", function (event) {
    if (event.target && event.target.tagName === "FORM") {
      message(event);
    }
  });
})();
