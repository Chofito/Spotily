// @flow
import type { Artist } from './artist'

export type TrackSimple = {
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
