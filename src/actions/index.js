import config from '../services/fetch-config';

const networkRequest = url => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(url);
    if (response.status === 404) {
      reject(new Error('Not Found'));
    }
    if (!response.ok) {
      reject(new Error('Could not fetch project'));
    }
    const data = response.json();
    resolve(data);
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
