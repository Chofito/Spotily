import React from "react";
import { connect } from "react-redux";
import actions from "../store/actions/index";

const albumsActions = actions("albums");

const Albums = ({ albums, dispatch }) => {
  return (
    <div>
      {albums.map((album, index) => {
        console.log(album);
        return <li key={index}>{album.album.name}</li>;
      })}
      <button
        onClick={() => {
          dispatch(albumsActions.loading());
          console.log(albums);
        }}
      >
        Albums
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    albums: state.albums.albums
  };
};

export default connect(mapStateToProps)(Albums);
