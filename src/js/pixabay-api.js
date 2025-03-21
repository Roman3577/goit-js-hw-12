import axios from "axios";

const API_KEY = "49351983-6f21a445dc99e49ed2940712c";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query, page = 1, perPage = 15) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                page: page,
                per_page: perPage
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
}