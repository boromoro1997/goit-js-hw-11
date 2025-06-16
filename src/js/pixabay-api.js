import axios from 'axios';
const myKey = '50870264-4cff09f0574465c81a14bcda1';
const baseUrl = 'https://pixabay.com/api/';
export function getImagesByQuery(query) {
  const params = {
    key: myKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    lang: 'en',
  };

  return axios(baseUrl, { params }).then(({ data }) => {
    return data.hits;
    console.log(data.hits);
  });
}
getImagesByQuery('cat').then(resp => {
  console.log(resp);
});
