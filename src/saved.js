// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const loader = document.querySelector('#loader');
console.log(loader);
function showLoader() {
  loader.classList.remove('hidden');
}
function hideLoader() {
  loader.classList.add('hidden');
}
form.addEventListener('submit', searchSubmit);
function clearGallery() {
  gallery.innerHTML = '';
}
function searchSubmit(e) {
  e.preventDefault();
  showLoader();
  clearGallery();
  const searchedWord = form.elements['search-text'].value.trim();
  console.log(searchedWord);
  getImagesByQuery(searchedWord)
    .then(({ data: { hits } }) => {
      if (hits.length === 0) {
        return iziToast.show({
          message:
            '❌ Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: 'red',
          position: 'topRight',
        });
      }
      createGallery(hits);
    })
    .catch(er => console.log(er))
    .finally(() => {
      hideLoader();
    });
}
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
      alt="${tags}"
    />
  </a>
  <ul>
  <li><span class="spanText">Likes</span><br>${likes}</li>
  <li><span class="spanText">Views</span><br>${views}</li>
  <li><span class="spanText">Comments</span><br>${comments}</li>
  <li><span class="spanText">Downloads</span><br>${downloads}</li>
  </ul>
</li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markUp);
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

  lightbox.refresh();
}

console.log(loader);
