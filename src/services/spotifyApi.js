// @flow
import spotify from 'spotify-web-api-js';
import { TOKEN } from '../constants';

const s = new spotify();
s.setAccessToken(TOKEN);

const getMyAlbums = () => {
  return s.getMySavedAlbums();
};

const removeAlbum = (albumId: string) => {
  return s.removeFromMySavedAlbums(albumId);
};

const addAlbum = (albumId: string) => {
  console.log(albumId);
  return s.addToMySavedAlbums(albumId);
};

export default { getMyAlbums, removeAlbum, addAlbum };
