// Assignment code here
var password=document.getElementById("password");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function genPassword () {
  const Keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    Symbol: "!@#$%^&*()_+~//,.+=-"
  }

  const getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
  ];
}

// Write password to the #password input
function createPassword() {
  const upper = document.getElementById("upperCase").checked;
  const lower = document.getElementById("lowerCase").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;
  if (upper + lower + number + symbol === 0) {
  alert("Please check atleast one box!");
  return;
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function copyPassword() {
  const textarea = document.createElement("textarea");
  const password = document.getElementById("passwordBox").innerText;
  if (!password) { return; }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  textarea.remove();
  alert("Password copied to clipboard");
}