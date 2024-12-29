window.onload = function () {
  let image1 = document.getElementById("one");
  image1.onclick = showImageOne;
  let image2 = document.getElementById("two");
  image2.onclick = showImageTwo;
}

function showImageOne() {
  let image = document.getElementById("one");
  image.src = "images/one.jpg";
}

function showImageTwo() {
  let image = document.getElementById("two");
  image.src = "images/two.jpg";
}
