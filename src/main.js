import { fetchImages } from "./js/pixabay-api.js";
import renderImages, { lightbox } from "./js/render-functions.js"; 
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
export const fetchPostsBtn = document.querySelector(".fetchPostsBtn");

let currentQuery = "";
let currentPage = 1;
const perPage = 15;
let totalHits = 0;

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    gallery.innerHTML = ""; 
    fetchPostsBtn.classList.remove("is-visible"); 

    currentQuery = event.currentTarget.elements["search-text"].value.trim();
    currentPage = 1;

    if (!currentQuery) {
        iziToast.warning({
            title: "Warning",
            message: "Please enter a search term.",
            position: "topRight"
        });
        return;
    }

    try {
        loader.style.display = "block";
        const data = await fetchImages(currentQuery, currentPage, perPage);
        loader.style.display = "none";

        if (data.hits.length > 0) {
            totalHits = data.totalHits;
            renderImages(data.hits, gallery);
            lightbox.refresh();  
            
            if (currentPage * perPage < totalHits) {
                fetchPostsBtn.classList.add("is-visible");
            }
        } else {
            iziToast.warning({
                title: "Warning",
                message: "Sorry, no images found. Try again.",
                position: "topRight"
            });
        }
    } catch (error) {
        loader.style.display = "none";
        iziToast.error({
            title: "Error",
            message: "Something went wrong. Please try again later.",
            position: "topRight"
        });
    }
});

fetchPostsBtn.addEventListener("click", async () => {
    currentPage += 1;
    try {
        loader.style.display = "block";
        const data = await fetchImages(currentQuery, currentPage, perPage);
        loader.style.display = "none";

        if (data.hits.length > 0) {
            renderImages(data.hits, gallery);
            lightbox.refresh();

            const cardHeight = gallery.firstElementChild?.getBoundingClientRect().height || 0;
            window.scrollBy({
                top: cardHeight * 2,
                left: 0,
                behavior: "smooth"
            });

            if (currentPage * perPage >= totalHits) {
                fetchPostsBtn.classList.remove("is-visible");
                iziToast.info({
                    title: "Info",
                    message: "We're sorry, but you've reached the end of search results.",
                    position: "topRight"
                });
            }
        }
    } catch (error) {
        loader.style.display = "none";
        iziToast.error({
            title: "Error",
            message: "Something went wrong. Please try again later.",
            position: "topRight"
        });
    }
});
