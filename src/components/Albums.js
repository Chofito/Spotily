// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { albumsActions, changePlayingElement } from '../actions/index';
import type { Album } from '../types/album';
import AlbumItem from './Album';

type albumProps = {
  albums: Array<Album>,
  onClick: Function,
  onClickPlay: Function,
  onClickSaveRemove: Function,
  loadAlbums: Function,
};

class Albums extends Component<albumProps> {
  componentDidMount() {
    this.props.loadAlbums();
  }

  render() {
    return (
      <div className="columns is-multiline">
        {this.props.albums.map(album => {
          return (
            <AlbumItem
              key={album.added_at}
              onClick={this.props.onClick}
              onClickPlay={() => {
                this.props.onClickPlay(album.album.uri);
              }}
              onClickSaveRemove={() => {
                this.props.onClickSaveRemove(album);
              }}
              album={album}
              isSaved={album.isSaved}
            />
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadAlbums: () => dispatch(albumsActions.loading()),
    onClickPlay: (newMedia: string | Array<string>) =>
      dispatch(changePlayingElement(newMedia)),
    onClickSaveRemove: (album: Album) => {
      if (album.isSaved) dispatch(albumsActions.removing(album.album.id));
      else dispatch(albumsActions.adding(album.album.id));
    },
  };
};

const mapStateToProps = state => {
  return state.albums;
};

export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
