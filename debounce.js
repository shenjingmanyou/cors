// debounce
const button = document.querySelector("#btn");
button.addEventListener(
  "click",
  debounce(function () {
    console.log("debounce");
  }, 2000)
);

function debounce(func, wait = 0) {
  if (typeof func !== "function") {
    throw new TypeError("need a function arguments");
  }
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func();
    }, wait);
  };
}
