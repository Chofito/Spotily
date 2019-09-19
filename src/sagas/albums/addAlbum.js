// @flow
import { put, takeEvery, call } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import { albumsActions } from '../../actions/index';
import spotifyApi from '../../services/spotifyApi';
import { typeGenerator } from '../../utils/reduxHelpers';
import { ADDING } from '../../constants';

function* addAlbum(action): Saga<* | null> {
  console.log(action);
  yield call(spotifyApi.addAlbum, action.payload.albumId);
  yield put(albumsActions.added(action.payload.albumId));
}

export function* watchAlbumAdding(): any {
  yield takeEvery(typeGenerator('albums', ADDING), addAlbum);
}
