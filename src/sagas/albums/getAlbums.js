// @flow
import { put, takeEvery, call } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import { albumsActions } from '../../actions/index';
import spotifyApi from '../../services/spotifyApi';
import { typeGenerator } from '../../utils/reduxHelpers';
import { LOADING } from '../../constants';

function* getAlbums(): Saga<* | null> {
  const response = yield call(spotifyApi.getMyAlbums);
  yield put(albumsActions.succeed(response.items));
}

export function* watchAlbumLoading(): any {
  yield takeEvery(typeGenerator('albums', LOADING), getAlbums);
}
