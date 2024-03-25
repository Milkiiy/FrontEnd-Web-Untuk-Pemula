function welcome() {
  alert("Welcome to the test code 3");
  const contents = document.querySelector(".contents");
  contents.removeAttribute("hidden");
}

function increment() {
  document.getElementById("count").innerText++;

  if (document.getElementById("count").innerText == 7) {
    const hiddenMessage = document.createElement("p");
    hiddenMessage.innerText = "You have reached 7!";
    const image = document.createElement("img");
    image.setAttribute("src", "https://media.giphy.com/media/3o7TKz50Rg6ZG8Z9Kc/giphy.gif");
    const contents = document.querySelector(".contents");
    contents.appendChild(hiddenMessage).appendChild(image);
  }
}
window.addEventListener("load", welcome);
document.getElementById("incrementButton").addEventListener("click", increment);
