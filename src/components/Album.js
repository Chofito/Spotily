// @flow
import type { Album } from '../types/spotilyTypes';
import React from 'react';

const AlbumItem = ({ album, onClick, onClickPlay }: Props) => {
  return (
    <div onClick={onClick}>
      <img src={album.album.images[0]} />
      <txt>{album.album.name}</txt>
      <button onClick={onClickPlay}></button>
    </div>
  );
};

type Props = {
  album: Album,
  onClick: Function,
  onClickPlay: Function,
};

export default AlbumItem;
