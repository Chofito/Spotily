// @flow
import type { Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';
import { watchAlbumLoading } from './albums/getAlbums';
import { watchAlbumRemoving } from './albums/removeAlbum';
import { watchAlbumAdding } from './albums/addAlbum';

export default function* rootSaga(): Saga<void> {
  yield all([watchAlbumLoading(), watchAlbumRemoving(), watchAlbumAdding()]);
}
