import axios from "axios";
import iziToast from "izitoast"; 
import "izitoast/dist/css/iziToast.min.css"; 

const API_KEY = "49351983-6f21a445dc99e49ed2940712c";
const BASE_URL = "https://pixabay.com/api/";

function fetchImages(query) {
    loader.style.display = "block";
    return axios
        .get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true
            }
        })
        .then(response => {
            const images = response.data.hits;
            loader.style.display = "none";
            if (images.length === 0) {
                iziToast.warning({
                    title: "Warning",
                    message: "Sorry, there are no images matching your search query. Please try again.",
                    position: "topRight"
                });
                return [];
            }

            return images;
        })
        .catch(error => {
            loader.style.display = "none"; 
            iziToast.error({
                title: "Error",
                message: "Something went wrong. Please try again later.",
                position: "topRight"
            });

            console.error("Error fetching images:", error);
            return [];
        });
}

export default fetchImages;