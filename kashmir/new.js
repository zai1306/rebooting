const strokeWidth = 15,
  fadeOutDelay = 2,
  svgContainer = document.querySelector("#svgContainer"),
  svgGroup = svgContainer.querySelector("g"),
  TL = new TimelineMax({ paused: true }),
  power = [Power0, Power1, Power2, Power3];

let boxHeight = svgContainer.getBoundingClientRect().height,
  boxWidth = svgContainer.getBoundingClientRect().width,
  animCompleted = true,
  resized = false,
  clearSVG,
  dashOffset;

function removeLines() {
  if (!animCompleted) return;
  while (svgGroup.childElementCount > 0) {
    svgGroup.removeChild(svgGroup.firstChild);
  }
  addLines();
}

function addLines() {
  const fragment = document.createDocumentFragment();

  boxHeight = svgContainer.getBoundingClientRect().height;
  boxWidth = svgContainer.getBoundingClientRect().width;
  svgContainer.setAttribute("viewbox", `0 0 ${boxWidth} ${boxHeight}`);

  for (let i = Math.ceil(boxWidth / strokeWidth); i > 0; i--) {
    const posX = (i - 1) * strokeWidth;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    const ease = chance.integer({ min: 0, max: 2 });

    line.setAttribute("x1", posX);
    line.setAttribute("x2", posX);
    line.setAttribute("y1", "0");
    line.setAttribute("y2", "100%");
    line.setAttribute(
      "style",
      `stroke-width: ${
        strokeWidth + 2
      }; stroke-dasharray: ${boxHeight}; stroke-dashoffset: ${boxHeight};`
    );

    fragment.appendChild(line);

    TL.fromTo(
      line,
      chance.integer({ min: 2, max: 4 }),
      { strokeDashoffset: boxHeight },
      {
        strokeDashoffset: 0,
        delay: chance.floating({
          min: 0,
          max: 1,
          fixed: 2,
        }),
        ease:
          power[chance.integer({ min: 0, max: 3 })][
            `ease${ease ? (ease === 1 ? "In" : "Out") : "InOut"}`
          ],
      },
      0
    );
  }

  svgGroup.appendChild(fragment);
}

TL.eventCallback("onComplete", () => {
  svgContainer.setAttribute("class", "hidden");
  setTimeout(() => {
    animCompleted = true;
    TL.restart().pause();
    if (resized) {
      resized = false;
      removeLines();
    }
  }, fadeOutDelay * 1000);
});

// document.querySelector("span").addEventListener("mouseenter", () => {

const loader = function ()  {if (!animCompleted) return;
  animCompleted = false;
  svgContainer.setAttribute("class", "");
  TL.play();
};

window.addEventListener("resize", () => {
  if (animCompleted) {
    clearTimeout(clearSVG);
    clearSVG = setTimeout(removeLines, 500);
  } else {
    resized = true;
  }
});

svgContainer.setAttribute(
  "style",
  `height: calc(100vh + ${strokeWidth * 3}px);`
);
addLines();

window.onload = loader

// { Bleeding Documention Has Ended Here}

const bleed = document.querySelector('.bleeding')

setTimeout(() => {
  bleed.classList.add("show") 
}, 7200)


const tour = document.querySelector('.bleeding button')

tour.addEventListener( 'click', ()=> {
  bleed.classList.add('removeName')
})
  

//scroll animation
const reveal = document.querySelector('.reveal')
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var text = document.querySelector('.text')
console.log(text)
if (dots.style.display === "none") {
  text.classList.add('auto-Height')
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";

  } else {
    // text.classList.remove('.auto-Height')
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}