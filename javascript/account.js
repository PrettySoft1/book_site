
let create = document.getElementById("sign_up");
let log = document.getElementById("sign_in");


document.getElementById("log_in").onclick = function() {
  create.style.display = "none";
  log.style.display = "block";
};

function CreateAccount() {
  create.style.display = "flex";
  log.style.display = "none";
}