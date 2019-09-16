// @flow
export type Artist = {
  external_urls: Array<any>,
  href: string,
  id: string,
  name: string,
  type: string,
  uri: string,
};

export type trackSimple = {
  artists: Array<Artist>,
  available_markets: Array<string>,
  disc_number: number,
  duration_ms: number,
  explicit: boolean,
  external_urls: Array<string>,
  href: string,
  id: string,
  is_local: boolean,
  name: string,
  preview_url: string,
  track_number: number,
  type: string,
  uri: string,
};

export type Album = {
  added_at: string,
  album: {
    albumType: string,
    artists: Array<Artist>,
    availableMarkets: Array<string>,
    copyrights: Array<{ text: string, type: string }>,
    externalIds: Array<string>,
    externalUrls: Array<string>,
    genres: Array<any>,
    href: string,
    id: string,
    images: Array<{ height: number, url: string, width: number }>,
    label: string,
    name: string,
    popularity: number,
    releaseDate: string,
    releaseDatePrecision: string,
    totalTracks: number,
    tracks: Array<trackSimple>,
    type: string,
    uri: string,
  },
};

export type UserAction = {
  type: string,
  token: string,
};

export const SET_USER_TOKEN: string = 'SET_USER_TOKEN';
export const FAILED: string = 'FAILED';
export const LOADING: string = 'LOADING';
export const SUCCEED: string = 'SUCCEED';
