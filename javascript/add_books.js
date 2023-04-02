let inputFields = [...document.getElementsByClassName("style")];
let form = document.querySelector("form");



inputFields.forEach(input => {
  input.addEventListener("blur", () => {
    if (event.target.value.trim() === "")
      // Add Wrong Class For Empty Input Field
      event.target.classList.add("wrong_input");
    else
      // Remove Wrong Class For Empty Input Field
      event.target.classList.remove("wrong_input");
  });
});

// Prevent Enter Numbers In Author Name Input
inputFields[1].addEventListener("keypress", () => {
  if (!isNaN(event.key)) {
    event.preventDefault();
  }
});

document.querySelector("[name='Dept']")
    .addEventListener("blur", () => {
      if (event.target.value === "a")
        // Add Wrong Class For Empty Value Is Select Field
        event.target.classList.add("wrong_input");
      else
        // Remove Wrong Class For Empty Value Is Select Field
        event.target.classList.remove("wrong_input");
    });


// Form Validation For Prevent Empty Field From Send
form.addEventListener("submit", (e) => {
  let flag = true;
  if (e.target.BookName.value.trim() === "") {
    e.target.BookName.classList.add("wrong_input");
    flag = false;
  }
  if (e.target.AuthorName.value.trim() === "") {
    e.target.AuthorName.classList.add("wrong_input");
    flag = false;
  }
  if (e.target.PageCount.value.trim() === "") {
    e.target.PageCount.classList.add("wrong_input");
    flag = false;
  }
  if (e.target.Dept.value === "a") {
    e.target.Dept.classList.add("wrong_input");
    flag = false;
  }
  if (!flag) e.preventDefault();
});