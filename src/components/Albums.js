// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataActions, changePlayingElement } from '../actions/index';
import type { Album } from '../types/spotilyTypes';
import AlbumItem from './Album';

const albumsActions = dataActions('albums');

type albumProps = {
  albums: Array<Album>,
  onClick: Function,
  onClickPlay: Function,
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
              album={album}
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
  };
};

const mapStateToProps = state => {
  console.log(state);
  return state.albums;
};

export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
