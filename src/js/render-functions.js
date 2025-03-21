function renderImages(images, galleryElement) {
  const markup = images
    .map(image => {
      return `
      <li> <a href="${image.largeImageURL}" class="gallery__item">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>   <div class="card-info">
           <div class="likes"><h3>Likes </h3>
           <p>${image.likes}</p></div> 
            <div class="views"><h3>Views </h3>
            <p>${image.views}</p></div> 
             <div class="favor"><h3>Comments</h3>
             <p> ${image.comments}</p></div> 
            <div class="down"><h3>Downloads</h3>
            <p> ${image.downloads}</p></div> 
           
          </div></li>
      `;
    })
    .join("");

  galleryElement.innerHTML = markup;
}

export default renderImages;