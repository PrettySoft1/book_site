let search = document.getElementById("find");
let box = document.getElementsByClassName("box");
let bookName = document.getElementsByTagName("h3");
let authorName = document.getElementsByClassName("authors");

search.oninput = () => {
  document.getElementById("not_found").style.display = "none";
  let count = 0;
  let flag = false;

  for (let i = 0; i < bookName.length; i++) {
    if (bookName[i].innerText == search.value.trim() ||
        authorName[i].innerText.includes(search.value.trim())) {
      box[i].style.display = "block";
      flag = true;
    } else {
      box[i].style.display = "none";
    }
  }

  if (!flag) {
    let words = search.value.trim().split(" ");
    for (let i = 0; i < bookName.length; i++) {
      for (let j = 0; j < words.length; j++) {
        if (bookName[i].innerText.includes(words[j].trim()) ||
            authorName[i].innerText.includes(words[j].trim())) {
          box[i].style.display = "block";
          flag = true;
          break;
        } else {
          box[i].style.display = "none";
          flag = false;
        }
      }
      if (!flag) count++;
    }
    if (count == bookName.length) {
      document.getElementById("not_found").style.display = "block";
    }
  }
};
