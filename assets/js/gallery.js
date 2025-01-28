var selectedImg = document.getElementById("selected_img");
var images = document.getElementById("image_list").getElementsByTagName("li");
for (i = 0; i < images.length; i++) {
  images[i].addEventListener("click", activateImage);
  if (images[i].innerHTML === selectedImg.innerHTML) {
    images[i].classList.add("image-active");
  }
}
function activateImage() {
  selectedImg.innerHTML = this.innerHTML;
}
