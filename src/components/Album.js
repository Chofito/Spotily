// @flow
import type { Album } from '../types/spotilyTypes';
import React from 'react';

const AlbumItem = ({ album, onClick, onClickPlay }: Props) => {
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
        </footer>
      </div>
    </div>
  );
};

type Props = {
  album: Album,
  onClick: Function,
  onClickPlay: Function,
};

export default AlbumItem;
