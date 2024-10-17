function safariHacks() {
  let windowsVH = window.innerHeight / 100;
  document.body.style.setProperty("--vh", windowsVH + "px");
  document.querySelector(".bg").style.setProperty("--vh", windowsVH + "px");
  window.addEventListener("resize", function () {
    document.body.style.setProperty("--vh", windowsVH + "px");
    document.querySelector(".bg").style.setProperty("--vh", windowsVH + "px");
  });
}

safariHacks();
