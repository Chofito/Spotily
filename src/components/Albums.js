// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Album } from '../types/spotilyTypes';
import AlbumItem from './Album';

type albumProps = {
  albums: Array<Album>,
  onClick: () => void,
  onClickPlay: () => void,
};

class Albums extends Component<albumProps> {
  componentDidMount() {}

  render() {
    return (
      <div>
        {this.props.albums.map(album => {
          <AlbumItem
            key={album.added_at}
            onClick={this.props.onClick}
            onClickPlay={this.props.onClickPlay}
            album={album}
          ></AlbumItem>;
        })}
      </div>
    );
  }
}

export default connect()(Albums);
