let body = document.querySelector("body");

// spark/firework effect ------------------------------
body.addEventListener("click", (e) => {
  let spark = document.createElement("div");
  spark.classList.add("spark");
  body.appendChild(spark);

  spark.style.top = event.clientY - body.offsetTop + "px";
  spark.style.left = event.clientX - body.offsetLeft + "px";
  spark.style.filter = "hue-rotate(" + Math.random() * 360 + "deg)";

  for (let i = 0; i <= 7; i++) {
    let span = document.createElement("span");
    span.style.transform = "rotate(" + i * 45 + "deg)";
    spark.appendChild(span);
  }

  setTimeout(function () {
    spark.remove();
  }, 1000);
});

// -------------------------------------------------------

// trail effect ---------------------------------------

// time since last added trail element
let lastTrailTime = 0;
// delay in milliseconds between trails
const trailDelay = 20;
document.addEventListener("mousemove", (e) => {
  const currentTime = Date.now();

  if (currentTime - lastTrailTime > trailDelay) {
    lastTrailTime = currentTime;

    let element = document.createElement("div");
    element.setAttribute("class", "trail");
    element.setAttribute(
      "style",
      `left: ${e.clientX - 5}px; top: ${e.clientY - 5}px;`
    );

    element.onanimationend = () => {
      element.remove();
    };

    body.insertAdjacentElement("beforeend", element);
  }
});

// -------------------------------------------------------

// project slider ------------------------------------

let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};

let timeRunning = 3000;
let runTimeOut;

// slider auto run
// let timeAutoNext = 7000;
// let runAutoRun = setTimeout(() => {
//   nextDom.click();
// }, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  // // slider auto run
  // clearTimeout(runAutoRun);
  // runAutoRun = setTimeout(() => {
  //   nextDom.click();
  // }, timeAutoNext);
}

// -------------------------------------------------------
