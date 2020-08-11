import axios from 'axios';

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1'
});

export {spotifyApi}