window.onload = function () {
  //   let image1 = document.getElementById("one");
  //   image1.onclick = showImageOne;
  //   let image2 = document.getElementById("two");
  //   image2.onclick = showImageTwo;
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
  }
};

// function showImageOne() {
//   let image = document.getElementById("one");
//   image.src = "images/one.jpg";
// }

// function showImageTwo() {
//   let image = document.getElementById("two");
//   image.src = "images/two.jpg";
// }

function showAnswer(event) {
  let image = event.target;
  let name = image.id;
  name = name + ".jpg";
  image.src = "images/" + name;
}
