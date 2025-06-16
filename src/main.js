// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', searchSubmit);
function searchSubmit(e) {
  e.preventDefault();
  showLoader();
  clearGallery();
  const searchedWord = form.elements['search-text'].value.trim();
  if (searchedWord.trim() === '') {
    form.reset();
    hideLoader();
    return iziToast.show({
      message: '❌ you must write something!!',
      backgroundColor: 'red',
      position: 'topRight',
    });
  }
  getImagesByQuery(searchedWord)
    .then(resp => {
      if (resp.length === 0) {
        return iziToast.show({
          message:
            '❌ Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: 'red',
          position: 'topRight',
        });
      }
      createGallery(resp);
    })
    .catch(er =>
      iziToast.show({
        message: `Server error : ${er}`,
      })
    )
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
