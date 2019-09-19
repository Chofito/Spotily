// @flow
import type { Artist } from './artist';
import type { TrackSimple } from './trackSimple';

export type Album = {
  added_at: string,
  isSaved: boolean,
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
    tracks: Array<TrackSimple>,
    type: string,
    uri: string,
  },
};
