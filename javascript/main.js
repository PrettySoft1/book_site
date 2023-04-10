
let height = window.innerHeight;

window.onscroll = () => {
  if (document.documentElement.scrollTop >= height) {
    document.querySelector("header").classList.add("headerFixed");
  } else {
    document.querySelector("header").classList.remove("headerFixed");
  }
};

document.getElementById("find").onblur = () => {
  if (event.target.value === "") {
    event.target.classList.remove("searchFound");
  } else {
    event.target.classList.add("searchFound");
    console.log(event.target.classList[0]);
  }
};