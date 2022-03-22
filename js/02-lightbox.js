import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

let lightbox =  new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom', });

function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
          <a class="gallery__item" href=${original}>
            <img 
              class="gallery__image"
              src=${preview}
              alt=${description}
            />
          </a>
          `;
    }).join('');
}
