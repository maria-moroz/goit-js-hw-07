import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryEl.addEventListener('click', onGalleryItemClick)

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

function onGalleryItemClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionDelay: 250 });
}
