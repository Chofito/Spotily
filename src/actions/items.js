// @flow
import {
  LOADING,
  FAILED,
  SUCCEED,
  SET_USER_TOKEN,
  REMOVE_FAILED,
  REMOVING,
  REMOVED,
  ADD_FAILED,
  ADDING,
  ADDED,
} from '../constants';
import { actionCreatorGenerator, typeGenerator } from '../utils/reduxHelpers';

export const setToken = (token: string) => {
  return { type: SET_USER_TOKEN, token };
};

const failed = (name: string) => () => ({
  type: typeGenerator(name, FAILED),
});

const loading = (name: string) => () => ({
  type: typeGenerator(name, LOADING),
});

const succeed = (name: string) => data => ({
  type: typeGenerator(name, SUCCEED),
  data,
});

const removeFailed = (name: string) => () => ({
  type: typeGenerator(name, REMOVE_FAILED),
});

const removing = (name: string) => (albumId: string) => ({
  type: typeGenerator(name, REMOVING),
  payload: { albumId: [albumId] },
});

const removed = (name: string) => (albumId: string) => ({
  type: typeGenerator(name, REMOVED),
  albumId,
});

const addFailed = (name: string) => () => ({
  type: typeGenerator(name, ADD_FAILED),
});

const adding = (name: string) => (albumId: string) => ({
  type: typeGenerator(name, ADDING),
  payload: { albumId: [albumId] },
});

const added = (name: string) => (albumId: string) => ({
  type: typeGenerator(name, ADDED),
  albumId,
});

export const itemsActions = (name: string, params: any): any =>
  actionCreatorGenerator(
    name,
    {
      failed,
      loading,
      succeed,
      removeFailed,
      removing,
      removed,
      addFailed,
      adding,
      added,
    },
    params
  );
