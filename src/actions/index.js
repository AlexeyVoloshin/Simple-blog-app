import axios from 'axios';

import config from '../services/fetch-config';

const networkRequest = url => {
  return new Promise(async (resolve, reject) => {
    const response = await axios(url);
    resolve(response.data);
  });
};

export const fetchData = async (endpoint, id) => {
  let url;
  if (!id) {
    url = `${config.url}${endpoint}`;
  } else {
    url = `${config.url}${endpoint}/${id}`;
  }
  return await networkRequest(url);
};