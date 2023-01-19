import { galleryItems } from './gallery-items';

// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryBoard = document.querySelector('.gallery');

const imagesMarkup = createGalleryMarkup(galleryItems);

galleryBoard.insertAdjacentHTML('beforeend', imagesMarkup);

galleryBoard.addEventListener('click', onGalleryItemClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
    </a>
        `;
    })
    .join('');
}

function onGalleryItemClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
