// @flow
import { put, takeEvery, call, all } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import spotify from 'spotify-web-api-js';
import { dataActions } from '../actions/index';
import { LOADING } from '../types/spotilyTypes';
import { typeGenerator } from '../utils/reduxHelpers';
import { TOKEN } from '../constants';

const s = new spotify();
s.setAccessToken(TOKEN);
const getMyAlbums = () => {
  return s.getMySavedAlbums();
};

const albumsActions = dataActions('albums');

function* getAlbums(): Saga<* | null> {
  const response = yield call(getMyAlbums);
  yield put(albumsActions.succeed(response.items));
}

function* watchAlbumLoading(): any {
  yield takeEvery(typeGenerator('albums', LOADING), getAlbums);
}

export default function* rootSaga(): Saga<void> {
  yield all([watchAlbumLoading()]);
}
