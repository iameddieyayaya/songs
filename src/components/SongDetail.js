import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ songDetail }) => {
  //if
  //Since our selectSong is defaulted to null, we need to check;
  //There for if null it'll return the first JSX code block asking the user to select a song.
  if (!songDetail) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {songDetail.title}
        <br />
        Duration: {songDetail.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    songDetail: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
