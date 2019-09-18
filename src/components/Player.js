// @flow
import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { TOKEN } from '../constants';
import { connect } from 'react-redux';

type PlayerProps = {
  currentMedia: string | Array<string>,
};

const Player = ({ currentMedia }: PlayerProps) => {
  return (
    <div className="bottom-player">
      <SpotifyPlayer
        token={TOKEN}
        showSaveIcon={true}
        magnifySliderOnHover={true}
        autoPlay={true}
        callback={state => console.log(state)}
        persistDeviceSelection={true}
        uris={currentMedia}
        play={true}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { currentMedia: state.player.currentMedia };
};

export default connect<PlayerProps, *, *, *, *, *>(mapStateToProps)(Player);
