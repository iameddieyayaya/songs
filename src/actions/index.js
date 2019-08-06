//Action creator
//named export
export const selectSong = song => {
  //Return an action
  //type is required
  //payload isn't required.
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
