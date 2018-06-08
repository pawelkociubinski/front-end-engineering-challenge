/* @flow */
import axios from 'axios';

const BASE_URL = 'http://exygy-challenge-backend.herokuapp.com/'
const PROXY_ADDRESS = 'https://cors-anywhere.herokuapp.com/';

const exygy = axios.create({
  baseURL: BASE_URL,
});

const CORSexygy = axios.create({
  baseURL: PROXY_ADDRESS + BASE_URL,
});

export const api = {
  post({ username, password }: { username: string, password: string; }) {
    return exygy
      .post('/users/login', {
        email: username,
        password: password,
      })
      .then((response) =>
        response.data[0]);
  },
  get(searchedPhrase: string) {
    return CORSexygy
      .get('/documents', {
        params: {
          search: searchedPhrase,
          api_key: 123,
        }
      })
      .then((response) => response.data);
  }
};
