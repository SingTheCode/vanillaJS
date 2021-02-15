// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");

function handleResize() {
  if (window.innerWidth >= 900 && window.innerWidth < 1200) {
    body.style.backgroundColor = "#A86CAD";
  } else if (window.innerWidth >= 1200) {
    body.style.backgroundColor = "#FDCB66";
  } else {
    body.style.backgroundColor = "#009ed3";
  }
}

window.addEventListener("resize", handleResize);
