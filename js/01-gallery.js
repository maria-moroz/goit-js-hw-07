import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryEl.addEventListener('click', onGalleryItemClick)

function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href=${original}>
            <img 
              class="gallery__image"
              src=${preview}
              data-source=${original}
              alt=${description}
            />
          </a>
        </div>`;
    }).join('');
}

function onGalleryItemClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const html = `<img src=${e.target.dataset.source} alt=${e.target.alt}>`;

  const instance = basicLightbox.create(html, {
    onShow: (instance) => document.addEventListener("keydown", onKeyboardCloseModal.bind(this, instance)),
    onClose: () => document.removeEventListener("keydown", onKeyboardCloseModal),
  });

  instance.show();
}

function onKeyboardCloseModal(instance, e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}