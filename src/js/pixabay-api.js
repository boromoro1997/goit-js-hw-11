import axios from 'axios';
let searchedWord = 'dog';
const myKey = '50870264-4cff09f0574465c81a14bcda1';
const baseUrl = 'https://pixabay.com/api/';
function urlUsage(query) {
  const params = {
    key: myKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    lang: 'en',
  };

  return axios.get(baseUrl, { params });
}
function getImagesByQuery(query) {
  urlUsage(query)
    .then(({ data }) => {
      //   if (data.hits.length === 0) {
      //     return alert(
      //       'Sorry, there are no images matching your search query. Please try again!'
      //     );
      //   }
      //   console.log(data);
      return data;
    })
    .catch(error => console.log(error));
}
getImagesByQuery(searchedWord);
