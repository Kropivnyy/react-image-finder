import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';
axios.defaults.headers.common['Authorization'] =
  'Client-ID x9AhgqdVedkj92knzoynGC04XskWUCMDGAsuL6NaIdM';

const fetchImages = (query, page) => {
  return axios
    .get(`?query=${query}&per_page=12&page=${page}`)
    .then(response => response.data.results);
};

export default { fetchImages };
