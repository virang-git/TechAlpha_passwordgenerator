const len = document.getElementById("length");
const password = document.getElementById("password");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const special = "/><{}|`!#$%&'()*+,-.^=";

const allchar = uppercase + lowercase + number + special;

function createpassword() {
  let pwd = "";
  pwd += uppercase[Math.floor(Math.random() * uppercase.length)];
  pwd += lowercase[Math.floor(Math.random() * lowercase.length)];
  pwd += number[Math.floor(Math.random() * number.length)];
  pwd += special[Math.floor(Math.random() * special.length)];

  while (len.value > pwd.length) {
    pwd += allchar[Math.floor(Math.random() * allchar.length)];
  }
  password.value = pwd;
  len.value = "";
}

function copy() {
  password.select();
  document.execCommand("copy");
  alert("Password Copied successfully");
}
