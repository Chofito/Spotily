// @flow
import { itemsActions } from './items';
import { changePlayingElement } from './player';

const albumsActions = itemsActions('albums');
const songsActions = itemsActions('songs');
const playlistsActions = itemsActions('playlists');

export { albumsActions, songsActions, playlistsActions, changePlayingElement };
