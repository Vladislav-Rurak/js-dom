const colorChange =
  document.querySelector(".button");

colorChange.onclick = () => {
  colorChange.classList.add(
    "red-text-btn"
  );
};

const backgroundChange =
  document.querySelector(".btn");

backgroundChange.addEventListener(
  "click",
  function () {
    var r = Math.floor(
        Math.random() * 256
      ),
      g = Math.floor(
        Math.random() * 256
      ),
      b = Math.floor(
        Math.random() * 256
      );
    a = Math.random();
    this.style.background =
      "rgba(" +
      r +
      "," +
      g +
      "," +
      b +
      "," +
      a +
      ")";
  }
);
