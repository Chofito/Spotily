// @flow
export const changePlayingElement = (newMedia: string | Array<string>) => ({
  type: 'CHANGE_MEDIA',
  payload: {
    newMedia,
  },
});
