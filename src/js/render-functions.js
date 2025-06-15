// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
let searchedWord = 'dog';
const myKey = '50870264-4cff09f0574465c81a14bcda1';
const baseUrl = 'https://pixabay.com/api/';
const gallery = document.querySelector('.gallery');
function getImagesByQuery(query) {
  const params = {
    key: myKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    lang: 'en',
  };

  return axios(baseUrl, { params });
}
function createGallery(images) {
  const markUp = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
    />
  </a>
  <ul>
  <li>likes ${likes}</li>
  <li>views ${views}</li>
  <li>comments ${comments}</li>
  <li>downloads ${downloads}</li>
  </ul>
</li>`
    )
    .join('');
  gallery.innerHTML = markUp;
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

  lightbox.refresh();
}

getImagesByQuery(searchedWord)
  .then(({ data: { hits } }) => {
    createGallery(hits);
  })

  .catch(er => console.log(er));
