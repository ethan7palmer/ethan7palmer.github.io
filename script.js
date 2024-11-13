let body = document.querySelector("body");

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

// time since last added trail element
let lastTrailTime = 0;
// delay in milliseconds between trail
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
