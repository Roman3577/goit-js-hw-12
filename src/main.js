import fetchImages from "./js/pixabay-api";
import renderImages from "./js/render-functions";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast"; 
import "izitoast/dist/css/iziToast.min.css"; 

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.getElementById("loader");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250
});

form.addEventListener("submit", event => {
    event.preventDefault();
    gallery.innerHTML = "";
  const query = event.currentTarget.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search term.",
      position: "topRight"
    });
    return;
  }
  fetchImages(query).then(images => {
    if (images.length > 0) {
      renderImages(images, gallery);
      lightbox.refresh();
      } 
      return;
  }).catch(error => {

    console.error("Error fetching images:", error);
  });
});