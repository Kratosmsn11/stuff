function main() {
  const div0 = document.body.getElementsByTagName("div")[0];
  div0.innerText = "hehehehe";
}

window.addEventListener("load", main, { once: true });
