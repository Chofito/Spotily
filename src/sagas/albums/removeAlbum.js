// @flow
import { put, takeEvery, call } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import { albumsActions } from '../../actions/index';
import spotifyApi from '../../services/spotifyApi';
import { typeGenerator } from '../../utils/reduxHelpers';
import { REMOVING } from '../../constants';

function* removeAlbum(action): Saga<* | null> {
  yield call(spotifyApi.removeAlbum, action.payload.albumId);
  yield put(albumsActions.removed(action.payload.albumId));
}

export function* watchAlbumRemoving(): any {
  yield takeEvery(typeGenerator('albums', REMOVING), removeAlbum);
}
