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
  "onclick",
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

const image =
  document.querySelector(".img");

const image2 =
  document.querySelector(".image");

image.addEventListener(
  "mouseover",
  function () {
    this.src = "/img/img1.jpg";
  }
);

image.addEventListener(
  "mouseout",
  function () {
    this.src = "/img/img2.jpg";
  }
);

textColor = document.querySelector(
  ".something"
);

const colors = [
  "red",
  "blue",
  "yellow",
];

textColor.addEventListener(
  "click",
  function () {
    for (
      let i = 0;
      i < colors.length;
      i++
    ) {
      if (
        this.classList.contains(
          colors[i]
        )
      ) {
        this.classList.remove(
          colors[i]
        );
        nextColorIndex =
          i === colors.length - 1
            ? 0
            : i + 1;
        this.classList.add(
          colors[nextColorIndex]
        );
        return;
      }
    }
    this.classList.add(colors[0]);
  }
);
