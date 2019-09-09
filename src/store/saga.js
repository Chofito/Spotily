import { put, all, takeEvery, call } from "redux-saga/effects";
import spotify from "spotify-web-api-js";
import actions from "./actions/index";
import { LOADING } from "../types/actionTypes";
import { typeGenerator } from "./helpers";

const s = new spotify();
s.setAccessToken(
  "BQABhY3xv5TW4r-fv1rcqD4RSfsaB_-eSC7JFLkoiprX7cWVXhLct5YPfv7whi8CD7eihGWSVuhqTu6-MORFzzVxi6ZBLJaLbzQqB_JrbkzA2NS7P-ySiSdwXKZsK-ppngq18XStXV1fpg7aCOTM1tlNxqweG9m8if4mBIe1"
);
const getMyAlbums = () => {
  return s.getMySavedAlbums();
};

const albumsActions = actions("albums");

function* getAlbums() {
  const response = yield call(getMyAlbums);
  yield put(albumsActions.succeed(response.items));
}

function* watchAlbumLoading() {
  yield takeEvery(typeGenerator("albums", LOADING), getAlbums);
}

export default function* rootSaga() {
  yield all([watchAlbumLoading()]);
}
