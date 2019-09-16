// @flow
import { put, takeEvery, call, all } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import spotify from 'spotify-web-api-js';
import actions from './actions/index';
import { LOADING } from '../types/spotilyTypes';
import { typeGenerator } from '../utils/reduxHelpers';

const s = new spotify();
s.setAccessToken(
  'BQByEa85xnLvge_ovtO_jmANJ1fIsdoA1Ref_kfDPCfHSudcLQdbaMaQNGIHrOdfgv_DFGyIwuKO1ax0MBRvqJ9pstQOTj0jBnI-mKkn4UvDBBtZc6-faxIBfq_4vSMeCRPqDKnqQbg83rzHXbMBUjQYPWxKR0wiohY'
);
const getMyAlbums = () => {
  return s.getMySavedAlbums();
};

const albumsActions = actions('albums');

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
