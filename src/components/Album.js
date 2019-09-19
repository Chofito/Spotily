// @flow
import type { Album } from '../types/album';
import React from 'react';

const AlbumItem = ({
  album,
  isSaved,
  onClick,
  onClickPlay,
  onClickSaveRemove,
}: Props) => {
  return (
    <div className="column is-3">
      <div className="card" onClick={onClick}>
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={album.album.images[2].url} alt={album.album.name} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{album.album.name}</p>
            <p className="subtitle is-6">{album.album.artists[0].name}</p>
          </div>
        </div>
        <footer className="card-footer">
          <a className="card-footer-item" onClick={onClickPlay}>
            Play
          </a>
          <a className="card-footer-item" onClick={onClickSaveRemove}>
            {isSaved ? 'Remove' : 'Re-Save'}
          </a>
        </footer>
      </div>
    </div>
  );
};

type Props = {
  album: Album,
  isSaved: boolean,
  onClick: Function,
  onClickPlay: Function,
  onClickSaveRemove: Function,
};

export default AlbumItem;
