let changeMode = document.getElementById("changeMode");

changeMode.onchange = () => {
  document.body.classList.toggle("bg-black");
  document.querySelector("header").classList.toggle("bg-black");
  document.querySelector("header").classList.toggle("sd-black");
  document.querySelector(".sub_menu").classList.toggle("bg-black");
  document.querySelector(".footer").children[0].classList.toggle("co-white");
  document.querySelector(".button").children[0].classList.toggle("sd-button");
  document.querySelector(".email").children[0].children[0].classList.toggle(
      "bg-black");
  document.querySelector(".email").children[0].children[0].classList.toggle(
      "sd-box");
  document.querySelector(".email").children[0].children[1].classList.toggle(
      "sd-button");
  let ps = document.getElementsByTagName("p");
  let links = document.querySelector("nav").getElementsByTagName("a");
  let icons = document.getElementsByTagName("i");
  let boxes = document.getElementsByClassName("box");


  for (let i = 0; i < ps.length; i++) {
    ps[i].classList.toggle("co-gray");
  }

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.toggle("bg-black");
    boxes[i].classList.toggle("sd-box");
  }
  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("co-main");
  }

  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("co-main");
  }
};