// throttle
window.addEventListener("scroll", throttle(func, 2000));
function func() {
  console.log("throttle");
}
function throttle(func, wait) {
  if (typeof func !== "function") {
    throw new TypeError("need a function arguments");
  }
  let timer = Date.now();
  return function() {
    if(Date.now() - timer > wait) {
      timer = Date.now();
      func();
    }
  }
}
